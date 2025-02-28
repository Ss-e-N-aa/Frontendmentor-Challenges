import Card from "./components/Card"
import SuccessCard from "./components/SuccessCard";
import { useState } from "react"

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <main>
      {isSubmitted ?
        (
          <SuccessCard onDismiss={() => setIsSubmitted(false)} />
        )
        :
        (
          <Card onSuccess={() => setIsSubmitted(true)} />
        )
      }

    </main>
  )
}
