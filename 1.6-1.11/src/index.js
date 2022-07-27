import React, { useState } from 'react'
import { createRoot } from 'react-dom/client';



const Button = (props) => {
  
  return <button onClick={props.handleClick}>{props.text}</button>
}

const Statistic = (props) => {
  return (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td> 
  </tr>
  )
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const allClicks = props.allClicks

  if (allClicks === 0) {
    return(    
    <div>
      <h2>Statistics</h2>
      <p>No Feedback Given</p>
    </div>
    )
  }

  return (
    <div>
    <h2>Statistics</h2>
    <table>
      <tbody>
        <Statistic text="Good " value={good}/>
        <Statistic text="Neutral " value={neutral}/>
        <Statistic text="Bad " value={bad}/>
        <Statistic text="All " value={allClicks}/>
        <Statistic text="Average " value={((good * 1) + (bad * -1)) / allClicks}/>
        <Statistic text="Positive" value={(good * 100 / allClicks) + " %"}/>
      </tbody>
    </table>
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  const clickGod = () =>{
    setGood(good + 1)
    setAll (allClicks + 1)
  }
  
  const clickNeutral = () =>{
    setNeutral(neutral + 1)
    setAll (allClicks + 1)
  }
  
  const clickBad = () =>{
    setBad(bad + 1)
    setAll (allClicks + 1)
  }


  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={clickGod} text="Good" />
      <Button handleClick={clickNeutral} text="Neutral" />
      <Button handleClick={clickBad} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
    </div>
  )
}



const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);