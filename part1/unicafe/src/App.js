import { useState } from 'react'
import './App.css'

const Title = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({ name, value }) => <table><tbody><tr><td>{name}</td> <td>{value}</td></tr></tbody></table>

const Statistics = (props) => {
  const weightGood = 1
  const weightNeutral = 0
  const weightBad = -1
  let positive = (props.good / props.total) * 100
  let mean = ((weightGood * props.good) + (weightNeutral * props.neutral) + (weightBad * props.bad)) / props.total
  if (props.total === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <StatisticLine name='good' value={props.good} />
      <StatisticLine name='neutral' value={props.neutral} />
      <StatisticLine name='bad' value={props.bad} />
      <StatisticLine name='all' value={props.total} />
      <StatisticLine name='average' value={mean} />
      <StatisticLine name='positive' value={positive} />
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  return (
    <>
      <Title text='give feedback' />

      <Button
        onClick={() => setGood(good + 1)}
        text='good'
      />
      <Button
        onClick={() => setNeutral(neutral + 1)}
        text='neutral'
      />
      <Button
        onClick={() => setBad(bad + 1)}
        text='bad'
      />
      <Title text='statistics' />

      <Statistics good={good} neutral={neutral} bad={bad} total={all} />
    </>
  )
}

export default App