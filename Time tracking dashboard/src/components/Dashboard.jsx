import ProfileCard from "./ProfileCard"
import ActivityCard from "./ActivityCard"
import { useEffect, useState } from "react"

export default function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/Frontendmentor-Challenges/time-tracking-dashboard/data.json')
            .then((response) => response.json())
            .then((fetchedData) => setData(fetchedData))
            .catch((error) => console.error(error))
    }, [])

    return (
        <div className="dashboard" >
            <ProfileCard />
            <div className="activityCards">
                {data.map((i, index) => (
                    <ActivityCard key={index} data={i} className={`div${index + 1}`} />
                ))}
            </div>
        </div>
    )
}
