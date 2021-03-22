import React, {useEffect, useState} from 'react'
import axios from 'axios'
// import HiddenText from '../components/HiddenText'
import LessText from '../components/StepTracker'

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
      <LessText />
    </div>
  )
}

export default Home