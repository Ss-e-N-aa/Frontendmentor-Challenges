import { useState } from 'react';
import profileImg from '../assets/image-jeremy.png'

export default function ProfileCard({ timeframes, selectTimeframe }) {
    const [value, setValue] = useState(1)

    return (
        <div className="profileContainer">
            <div className="profileHeader">
                <div className="profileContent">
                    <img src={profileImg} alt="profile image" />
                    <div className="profileInfo">
                        <span>Report for</span>
                        <h1>Jeremy Robson</h1>
                    </div>
                </div>
            </div>
            <div className="linksContainer">
                {timeframes.map((timeframe, index) => (
                    <a onClick={(e) => {
                        e.preventDefault();
                        selectTimeframe(timeframe);
                        setValue(index);
                    }
                    } key={index} className={index === value ? "active" : ""} >
                        {timeframe}
                    </a>
                ))}
            </div>
        </div>
    );
}
