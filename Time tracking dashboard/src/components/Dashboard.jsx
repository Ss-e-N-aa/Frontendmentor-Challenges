import ProfileCard from "./ProfileCard"
import ActivityCard from "./ActivityCard"
import { useState } from "react";

const timeframes = ['Daily', 'Weekly', 'Monthly'];

export default function Dashboard({ activities }) {
    const [timeframe, setTimeframe] = useState('weekly')

    const selectTimeframe = (clickedTimeframe) => {
        setTimeframe(clickedTimeframe.toLowerCase());
    }

    return (
        <div className="dashboard" >
            <ProfileCard timeframes={timeframes} selectTimeframe={selectTimeframe} />
            <div className="activityCards">
                {activities.map((i, index) => (
                    <ActivityCard key={index} {...i} timeframe={timeframe} className={`div${index + 1}`} />
                ))}
            </div>
        </div>
    )
}
