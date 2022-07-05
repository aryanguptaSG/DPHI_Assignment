import React from 'react'
import first from "../../assets/icons/carbon_notebook-reference.svg";
import second from "../../assets/icons/users.svg";
import third from "../../assets/icons/Robot.svg";
import fourth from "../../assets/icons/IdentificationCard.svg"

function Middle() {
    const data = [
        {
            img: first,
            heading: "Prove your skills",
            text: "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions."
        },
        {
            img: second,
            heading: "Learn from community",
            text: "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them."
        },
        {
            img: third,
            heading: "Challenge yourself",
            text: "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder."
        },
        {
            img: fourth,
            heading: "Earn recognition",
            text: "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards."
        }
    ]
    return (
        <div className='middle'>
            <h3>
                Why Participate in <span style={{
                    color: "#44924d"
                }}>AI Challenges?</span>
            </h3>
            <div>
                {
                    data.map((item, id) => {
                        return (
                            <div key={id} className='card'>
                                <div>
                                    <img src={item.img} alt="" />
                                </div>
                                <h4>{item.heading}</h4>
                                <p>{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Middle;
