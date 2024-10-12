import { useState } from 'react'

const StatisticLine = ({text, value}) => {
return (
  <table>
  <tr>
    <td style={{ paddingRight: '20px' }}>{text}</td>
    <td>{value}</td>
  </tr>
  </table>
)
}

const Statistics = ({good, neutral, bad}) => {
  const totalClicks = good + neutral + bad
  const average = ((good - bad) / totalClicks)
  const roundedAverage = (Math.round(average * 100)/100).toFixed(2)
  const positivePercentage = (good / totalClicks) * 100
  const roundedPercentage = (Math.round(positivePercentage * 100)/100).toFixed(2)

  if (totalClicks === 0) {
    return <p>No feedback given</p>
  } 
  return (
      <div>  
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={totalClicks} />
      <StatisticLine text='average' value={roundedAverage} />
      <StatisticLine text='positive' value={`${roundedPercentage} %`} />
    </div>
  )
}
const Button =({ count, setCount, text }) => {
const handleClick = () => {
  setCount(count + 1 )
}
return (
  <div>
  <button onClick = {handleClick}>{text}</button>
  </div>
)
}
  

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h2>give feedback</h2>
      <div style={{display:'flex', gap: '10px' }}>
      <Button count={good} setCount={setGood} text="good" />
      <Button count={neutral} setCount={setNeutral} text="neutral" />
      <Button count={bad} setCount={setBad} text="bad" />
      </div>
      <h2>statistics</h2> 
      <div>
      <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

export default App