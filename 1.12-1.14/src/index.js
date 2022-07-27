import { createRoot } from 'react-dom/client';
import React, { useState } from 'react'


const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
} 

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, addPoint] = useState ([0,0,0,0,0,0])
  const createRandom = () =>{
    setSelected(Math.floor(Math.random()*6))
  }

  const assignPoint = () =>{
    const newPoints = points
    newPoints[selected] += 1
    addPoint(newPoints)
  }

  const mostVoted = Math.max(...points);
  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <Button handleClick={createRandom} text="Next anecdote" />
      <Button handleClick={assignPoint} text="Vote" />
      <h2>Anecdote with most votes</h2>
      {props.anecdotes[points.indexOf(mostVoted)]}
    </div>
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App anecdotes={anecdotes} tab="home" />);

