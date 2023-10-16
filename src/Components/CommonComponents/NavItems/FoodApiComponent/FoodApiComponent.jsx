import React from 'react'
import style from './style.module.css'
import { useSelector } from 'react-redux'
const FoodApiComponent = () => {
    const data = useSelector(state => state.data.apiData)
    console.log(data)
  return (
    <div>
      <div>title is {data.title}</div>
    </div>
  )
}

export default FoodApiComponent
