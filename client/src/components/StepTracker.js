import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function StepTracker() {
  const [steps, setSteps] = useState(0)
  
  function increment() {
    setSteps(prevState => prevState + 1)
  }
  return (
    <div>
      today you've taken {steps} steps.
      <br/>
      <button onClick={increment}>
        took another step
      </button>
    </div>
  )
}

ReactDOM.render(
  <stepTracker />,
  document.querySelector('#root')
)

export default StepTracker


