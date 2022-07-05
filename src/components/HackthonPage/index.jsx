import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar';
import { useParams } from "react-router-dom";
import defaultData from '../../constants/defaultData';
import easyicon from "../../assets/icons/carbon_skill-level-basic.svg"
import "./style.css";
import { Link } from 'react-router-dom';

function HackthonPage() {
    const { id } = useParams();
    const [hackthon, sethackthon] = useState(null);
    useEffect(() => {
        sethackthon(defaultData[id]);
        console.log(defaultData[id]);
    }, [defaultData])
    return (
        <div>
            <Navbar />
            {hackthon !== null && <>
                <header className='hackthon_header'>
                    <div className='hackthon_time'>{hackthon.StartDate.toLocaleString()}</div>
                    <h3>{hackthon.Heading}</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <div className='hackthon_level'>
                        <img src={easyicon} alt="" /><span>{" " + hackthon.level}</span>
                    </div>
                </header>

                <div>
                    <div className='hackthon_actionbar'>
                        <div className='hackthon_overview'>OverView</div>
                        <div>
                            <Link to={`/create/${id}`}><button className='edit-btn'>Edit</button></Link>
                            <button className='delete-btn'>Delete</button>
                        </div>
                    </div>
                    <div className='hackthon_desc'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aperiam mollitia quibusdam sed accusantium a, temporibus vel facilis amet recusandae soluta earum, excepturi impedit modi odio. Velit possimus beatae illo. <br /> <br /> lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis repellat deserunt iste voluptatum et eveniet modi, tempora dolorem molestiae ducimus optio rerum cumque! Doloribus reiciendis beatae provident nostrum et.
                    </div>
                </div>



            </>}
        </div>
    )
}

export default HackthonPage;
