import React, { useState } from 'react'

function ItemList() {
  const [items, setItems] = useState([])
  const [itemName, setItemName] = useState('')

  const addItem = event => {
    event.preventDefault()
    setItems([
      ...items,
      {
        id: items.length,
        name: itemName
      }
    ])
    setItemName('')
  }
  return (
    <div>
      <form onSubmit={addItem}>
        <label>
          <input
          name='item'
          type='text'
          value={itemName}
          onChange={e => setItemName(e.target.value)}/>
        </label>
      </form>
      <ul>
        {items.map(item =>(
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ItemList

