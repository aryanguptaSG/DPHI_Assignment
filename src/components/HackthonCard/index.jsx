import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function HackthonCard({
    hackthon,
    id
}) {
    const [days, setdays] = useState("00");
    const [hours, sethours] = useState("00");
    const [mins, setmins] = useState("00");

    const getdiff = (future, now) => {
        var delta = Math.abs(future - now) / 1000;
        const d = Math.floor(delta / 86400);
        delta -= d * 86400;

        const h = Math.floor(delta / 3600) % 24;
        delta -= h * 3600;

        const m = Math.floor(delta / 60) % 60;
        delta -= m * 60;

        return { d, h, m };
    }

    useEffect(() => {
        let now = new Date();
        if (hackthon.Status === "Active") {
            const { d, h, m } = getdiff(hackthon.EndDate, now);
            setdays(d);
            sethours(h);
            setmins(m);
        }
        if (hackthon.Status === "Upcoming") {
            const { d, h, m } = getdiff(hackthon.StartDate, now);
            setdays(d);
            sethours(h);
            setmins(m);
        }
    }, [hackthon])
    return (
        <div className='hackthon-card'>
            <img src={hackthon.Poster} alt="" />
            <div>
                <div className={hackthon.Status}>{hackthon.Status}</div>
                <h3>{hackthon.Heading}</h3>
                <div className='date-time'>
                    <p>{
                        hackthon.Status === "Active" ? "Ends in" : hackthon.Status === "Upcoming" ? "Starts in" : "Ended on"
                    }</p>
                    <div>
                        {
                            hackthon.Status === "Past" ?
                                <p>
                                    {hackthon.EndDate.toLocaleDateString()}
                                </p> :
                                <>
                                    <div><p>{days} :</p><div>Days</div></div>
                                    <div><p>{hours} :</p><div>hours</div></div>
                                    <div><p>{mins}</p><div>Mins</div></div>
                                </>
                        }
                    </div>
                </div>
            </div>
            <div className='participate-btn'>
                <Link to={`/hackthon/${id}`}><button>Participate Now</button></Link>
            </div>
        </div>
    )
}

export default HackthonCard;
