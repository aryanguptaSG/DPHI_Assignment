import React from 'react'
import rocket from "../../assets/icons/rocket.svg";
import ai1 from "../../assets/icons/ai1.svg";
import ai2 from "../../assets/icons/ai2.svg";
import ai3 from "../../assets/icons/ai3.svg";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header-div'>
            <div className='first-div'>
                <div className='intro-text'>
                    <h1>Accelerate Innovation <br /> With Global AI Challenges</h1>
                    <p>AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</p>
                    <div className='create-btn'>
                        <Link to="/create/new"><button>Create Challenge</button></Link>
                    </div>
                </div>
                <div>
                    <img src={rocket} alt="" />
                </div>
            </div>


            <div className='second-div'>
                <div className='ai1'>
                    <img src={ai1} alt="ai1" />
                    <div>
                        <strong style={{
                            fontSize: "1.5em"
                        }}> 100K+</strong> <br />
                        AI Model Submission
                    </div>
                </div>
                <hr />
                <div className='ai2'>
                    <img src={ai2} alt="ai1" />
                    <div>
                        <strong style={{
                            fontSize: "1.5em"
                        }}> 50K+</strong><br />
                        Data Scientists
                    </div>
                </div>
                <hr />
                <div className='ai3'>
                    <img src={ai3} alt="ai1" />
                    <div>
                        <strong style={{
                            fontSize: "1.5em"
                        }}> 100+</strong><br />
                        AI Challenges Hosted
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
