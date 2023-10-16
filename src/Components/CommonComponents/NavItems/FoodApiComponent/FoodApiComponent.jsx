import React from 'react'
import style from './style.module.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
const FoodApiComponent = () => {
    const data = useSelector(state => state.data.apiDataArray)
    const {id1,id2} = useParams()
   console.log(id2)

const [filteredData] = data.filter(data=> data.id ==id2)
  return (
    <div>
      <div>title is {filteredData.title}</div>
    </div>
  )
}

export default FoodApiComponent
