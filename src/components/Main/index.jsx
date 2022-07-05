import React, { useState, useEffect } from 'react'
import Filter from '../Filter';
import HackthonCard from '../HackthonCard';
import defaultData from '../../constants/defaultData';
import allFilters from "../../constants/filtersList";

function Main() {
    const [searchKey, setsearchKey] = useState("");
    const [filtersList, setfiltersList] = useState(allFilters);
    const [filtersApplied, setfiltersApplied] = useState({ status: [], level: [] });
    const [hackthonDefaultData, sethackthonDefaultData] = useState(defaultData);

    const getStatus = (start, end) => {
        let curr = new Date();
        if (curr >= start && curr < end) {
            return "Active";
        }
        if (curr < start) {
            return "Upcoming";
        }
        if (curr >= end) {
            return "Past";
        }
    }

    const refreshFilter = () => {
        let latestFilter = { status: [], level: [] };

        Object.entries(filtersList.status).forEach(item => {
            if (item[1].check) {
                latestFilter.status.push(item[1].label);
            }
        })
        Object.entries(filtersList.level).forEach(item => {
            if (item[1].check) {
                latestFilter.level.push(item[1].label);
            }
        })
        return latestFilter;
    }

    useEffect(() => {
        let latestFilter = refreshFilter();
        setfiltersApplied(latestFilter);



        let data = defaultData;
        data = data.map((item) => {
            return { ...item, Status: getStatus(item.StartDate, item.EndDate) }
        })

        // saerch key filter
        if (searchKey.trim().length) {
            data = data.filter((item) => {
                return item.Heading.toLocaleLowerCase().startsWith(searchKey.toLocaleLowerCase().trim());
            })
        }




        // NO Filter
        if ((latestFilter.status.length == 0 && latestFilter.level.length == 0) || latestFilter.status.includes("All")) {
            sethackthonDefaultData(data);
            return;
        }

        //filter for status
        if (latestFilter.status.length) {
            data = data.filter((item) => {
                if (latestFilter.status.includes(item.Status)) {
                    return true;
                }
                return false;
            });
        }

        //filter for level
        if (latestFilter.level.length) {
            data = data.filter((item) => latestFilter.level.includes(item.level));
        }

        sethackthonDefaultData(data);


    }, [filtersList, searchKey])

    return (
        <div className='main'>
            <div className='filter-div'>
                <h4>Explore Challenges</h4>
                <div>
                    <input value={searchKey} onChange={(e) => { setsearchKey(e.target.value) }} type="text" placeholder='Search' />
                    <Filter filtersList={filtersList} setfiltersList={setfiltersList} />
                </div>
                <div className='filters-list'>
                    {
                        filtersApplied.status.map((item, id) => {
                            if (item == "All") return null;
                            return <div key={id}>{item}</div>
                        })
                    }
                    {
                        filtersApplied.level.map((item, id) => {
                            return <div key={id}>{item}</div>
                        })
                    }
                </div>
            </div>

            <div className='hackthon-list'>
                {
                    hackthonDefaultData.map((hackthon, id) => {
                        return (<HackthonCard key={id} hackthon={hackthon} id={id} />);
                    })
                }
            </div>
        </div>
    )
}

export default Main;
