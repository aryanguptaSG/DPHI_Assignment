import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar';
import { useParams } from "react-router-dom";
import defaultData from '../../constants/defaultData';

function CreateChallengePage() {
    const { id } = useParams();
    const [name, setname] = useState("");
    const [start, setstart] = useState("");
    const [end, setend] = useState("");
    const [desc, setdesc] = useState("");
    const [level, setlevel] = useState("");
    const [poster, setposter] = useState(null);

    useEffect(() => {
        if (id === "new") return;


        setname(defaultData[id].Heading);
        setdesc("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum placeat odio similique soluta assumenda? Eaque aperiam facilis unde in atque. Placeat ullam ea minima officiis illum fugiat odio quam laborum.");
        setposter(defaultData[id].Poster);

        setstart(`${defaultData[id].StartDate.toISOString().split('T')[0]}`);

        setend(`${defaultData[id].EndDate.toISOString().split('T')[0]}`)

    }, [])


    return (
        <div>
            <Navbar />
            <div style={{
                height: "70px",
                paddingInline: "100px",
                backgroundColor: "#f8f9fd",
                display: "flex",
                alignItems: "center",
                fontSize: "1.5rem",
                fontWeight: "bold"
            }}>Challenge Details</div>


            <div className='challenge-details'>
                <div className='challenge-div'>
                    <p>Challenge Name</p>
                    <input value={name} type="text" className='w-20' />
                </div>

                <div className='challenge-div'>
                    <p>Start Date</p>
                    <input value={start} type="date" className='w-20' />
                </div>

                <div className='challenge-div'>
                    <p>End Date</p>
                    <input value={end} type="date" className='w-20' />
                </div>

                <div className='challenge-div'>
                    <p>Description</p>
                    <textarea value={desc} name="desc" id="desc" cols="30" rows="10"></textarea>
                </div>

                {poster != null && <div>
                    <img src={"." + poster} alt="" />
                </div>}

                <div className='challenge-div'>
                    <p>Image</p>
                    <input type="file" />
                </div>

                <div className='challenge-div'>
                    <p>Level</p>
                    <select name="cars" id="cars" className='w-10'>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
            </div>

            <div className='create-challenge-btn'>
                <button>Create Challenge</button>
            </div>
        </div>
    )
}

export default CreateChallengePage;
