import { useState } from "react"

const Display = () => {
  return (
    <div>
      <h2>Give Feedback</h2>
    </div>
  )
}

const Stats = ({good, neutral, bad}) =>{
  
  const sum = good + neutral + bad;
  const avg = (sum / 3)

  if(sum === 0){
    
    return (
      <div>
        <p>There are no Feedbacks yet.</p>
      </div>
    )
  }
  return (
    <div>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {sum}</p>
      <p>Average {avg}</p>
    </div>
  )
}

const Button = ({handleClicks, text}) => {
  return (
    <button onClick={handleClicks}>{text}</button>
  )
}


const App = () => {
  
  // const [allClicks, setAllClicks] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // })

  //state management for good
  // const handleGoodClick = () => {
  //   setAllClicks({...allClicks, good: allClicks.good + 1})
  // }

  //state management for neutral
  // const handleNeutralClick = () => {
  //   setAllClicks({...allClicks, neutral: allClicks.neutral + 1})
  // }

   //state management for neutral
  //  const handleBadClick = () => {
  //   setAllClicks({...allClicks, bad: allClicks.bad + 1})
  // }

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // const [allFeedbacks, setFeedbacks] = useState([])



  const handleGoodClick = () => {
    // setFeedbacks(allFeedbacks.concat("P"))
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    // setFeedbacks(allFeedbacks.concat("D"))
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    // setFeedbacks(allFeedbacks.concat("P"))
    setBad(bad + 1)
  }

  

  return (
    <div>
      <Display />
      <Button handleClicks={handleGoodClick} text = "Good"/>
      <Button handleClicks={handleNeutralClick} text = "Neutral"/>
      <Button handleClicks={handleBadClick} text = "Bad"/>
      <h2>Statistics</h2>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;
