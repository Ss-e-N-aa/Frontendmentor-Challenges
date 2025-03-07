import Dashboard from "./components/Dashboard"
import data from '../data.json'
import { useEffect, useState } from "react"

export default function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    setActivities(data);
  }, [])

  return (
    <main>
      <Dashboard activities={activities} />
    </main>
  )
}
