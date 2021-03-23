import React, {useEffect, useState} from 'react'
import axios from 'axios'
// import HiddenText from '../components/HiddenText'
import LoginForm from '../components/LoginForm'
import EffectDemo from '../components/EffectDemo'
import StepTracker from '../components/StepTracker'

const Home = () => {
  const [testData, setTestData] = useState(null)
  useEffect(()=>{
        getData()
  },[])

  const getData = async()=>{
    try{
    let res = await axios.get(`/api/api_test`)
    setTestData(res.data.dataHere)
    } catch(err){
      alert('err')
    }

  }
  return (
    <div>
      <h1>Title goes here </h1>
      <LoginForm/>
      <h1> Effect demo</h1>
      <EffectDemo/>
      <h1>step tracker</h1>
      <StepTracker/>
    </div>
  )
}

export default Home