import { useState } from "react"

const Button = ({handleClicks, text}) => {
  return (
    <button onClick={handleClicks}>{text}</button>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClicks={handleGoodClick} text = "Good"/>
      <Button handleClicks={handleNeutralClick} text = "Neutral"/>
      <Button handleClicks={handleBadClick} text = "Bad"/>
    </div>
  )
}

export default App;
