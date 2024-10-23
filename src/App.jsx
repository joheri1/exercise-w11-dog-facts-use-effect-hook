import { useState, useEffect } from "react" // Import required hooks
import { DogFact } from "./components/DogFact" // Import DogFact component

// API URL and Endpoints
const BASE_URL = "https://dogapi.dog/api"
const dogFactEndpoint = "/v2/facts"

export const App = () => {
  const [dogFact, setDogFact] = useState({}) // State to store the dog fact
  const [isLoading, setIsLoading] = useState(true) //State to for the loading

  useEffect(() => {
    setIsLoading(true) // Set loading to true before fetching the fact
    const fetchDogFact = async () => {
      try {
        const response = await fetch(`${BASE_URL}${dogFactEndpoint}`)
        // Convert response to JSON
        const result = await response.json()
        setDogFact(result.data[0].attributes.body) // Store fetched fact
      } catch (error) {
        console.log("Error when fetching Dog facts", error)
      } finally {
        setIsLoading(false) // Set loading to false after fetching
      }
    }
    fetchDogFact() // Call fetch function
  }, []) // Empty dependency array ensures this runs once

  return (
    <section>
      <div className="App"> 
        {isLoading && <h1>Loading...</h1>} 
        {!isLoading && <DogFact dogFact={dogFact} />} {/* Render DogFact when loaded */}
      </div>
    </section>
  )
}

// Hint: To use this component, import it in your main App component and pass the 'dogFact' prop to it.
// Example: <DogFact dogFact={yourFactData} />

