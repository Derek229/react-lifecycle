import React, { useEffect, useRef, useState } from 'react'

function EffectDemo() {
  const [title, setTitle] = useState('default title')
  const titleRef = useRef()
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    console.log('useEffect')
    document.title= title
  }, [title])
  const handleClick = () => setTitle(titleRef.current.value)
  const handleCheckboxChange =() => setDarkMode((prev) => !prev)
  console.log('render')
  return (
    <div className={darkMode ? 'view dark-mode' : 'view'}>
      <label htmlFor='darkMode'>dark mode</label>
      <input 
      name= 'darkMode'
      type='checkbox'
      checked={darkMode}
      onChange={handleCheckboxChange}/>
      <input ref={titleRef}/>
      <button onClick={handleClick}>change title</button>
    </div>
  )
}

export default EffectDemo