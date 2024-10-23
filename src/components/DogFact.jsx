export const DogFact = ({ dogFact }) => {
  console.log(dogFact)

  return (
    <div>
      <h1>Dog Fact:</h1>
      {dogFact ? ( // Check if the dogFact prop is truthy (not null or undefined)
        <p>{dogFact}</p> // If dogFact exists, render it inside a <p> tag
      ) : (
        <p>Loading...</p> // Fallback: Render "Loading..." if dogFact is missing 
      )}
    </div>
  )
}


