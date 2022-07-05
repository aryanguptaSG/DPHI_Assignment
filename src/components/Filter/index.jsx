import React, { useState } from 'react'

function Filter({
    filtersList,
    setfiltersList
}) {
    const [filterOpen, setfilterOpen] = useState(false);
    return (
        <>
            <div style={{
                position: 'relative'
            }}>
                <div style={{
                    width: `${filterOpen ? "200px" : "80px"}`,
                    backgroundColor: "#ffffff",
                    color: "#032a3b",
                    padding: "7px",
                    borderRadius: "10px",
                    textAlign: "left",
                    position: "absolute",
                    zIndex: "100"
                }}>
                    <div style={{ cursor: "pointer" }} onClick={() => { setfilterOpen(!filterOpen) }}>Filter</div>
                    {
                        filterOpen &&
                        <div className='filter-options'>
                            <hr />
                            <div style={{ marginBlock: "10px" }}>status</div>

                            <input onChange={(e) => {
                                setfiltersList({
                                    level: { ...filtersList.level },
                                    status: { ...filtersList.status, All: { ...filtersList.status.All, check: e.target.checked } }
                                })
                            }}
                                checked={filtersList.status.All.check} type="checkbox" name="All" id="All" />
                            <label htmlFor="All">All</label>
                            <br />


                            <input onChange={(e) => {
                                setfiltersList({
                                    level: { ...filtersList.level },
                                    status: { ...filtersList.status, Active: { ...filtersList.status.Active, check: e.target.checked } }
                                })
                            }}
                                checked={filtersList.status.Active.check} type="checkbox" name="Active" id="Active" />
                            <label htmlFor="Active">Active</label>
                            <br />


                            <input
                                onChange={(e) => {
                                    setfiltersList({
                                        level: { ...filtersList.level },
                                        status: { ...filtersList.status, Upcoming: { ...filtersList.status.Upcoming, check: e.target.checked } }
                                    })
                                }}
                                checked={filtersList.status.Upcoming.check} type="checkbox" name="Upcoming" id="Upcoming" />
                            <label htmlFor="Upcoming">Upcoming</label>
                            <br />


                            <input
                                onChange={(e) => {
                                    setfiltersList({
                                        level: { ...filtersList.level },
                                        status: { ...filtersList.status, Past: { ...filtersList.status.Past, check: e.target.checked } }
                                    })
                                }}
                                checked={filtersList.status.Past.check} type="checkbox" name="Past" id="Past" />
                            <label htmlFor="Past">Past</label>


                            <hr />
                            <div style={{ marginBlock: "10px" }}>Level</div>

                            <input
                                onChange={(e) => {
                                    setfiltersList({
                                        status: { ...filtersList.status },
                                        level: { ...filtersList.level, Easy: { ...filtersList.level.Easy, check: e.target.checked } }
                                    })
                                }}
                                checked={filtersList.level.Easy.check} type="checkbox" name="Easy" id="Easy" />
                            <label htmlFor="Easy">Easy</label>
                            <br />


                            <input
                                onChange={(e) => {
                                    setfiltersList({
                                        status: { ...filtersList.status },
                                        level: { ...filtersList.level, Medium: { ...filtersList.level.Medium, check: e.target.checked } }
                                    })
                                }}
                                checked={filtersList.level.Medium.check} type="checkbox" name="Medium" id="Medium" />
                            <label htmlFor="Medium">Medium</label>
                            <br />


                            <input
                                onChange={(e) => {
                                    setfiltersList({
                                        status: { ...filtersList.status },
                                        level: { ...filtersList.level, Hard: { ...filtersList.level.Hard, check: e.target.checked } }
                                    })
                                }}
                                checked={filtersList.level.Hard.check} type="checkbox" name="Hard" id="Hard" />
                            <label htmlFor="Hard">Hard</label>
                        </div>
                    }
                </div>
            </div>
            {
                filterOpen &&
                <div onClick={() => { setfilterOpen(!filterOpen) }} style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: `${document.body.scrollHeight}px`,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    zIndex: "1"
                }}>
                </div>
            }
        </>
    )
}

export default Filter;
