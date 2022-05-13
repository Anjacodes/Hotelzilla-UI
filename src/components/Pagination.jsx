import React from 'react'
import { useSelector } from 'react-redux'

const Pagination = ({data, RenderComponent, title, pageLimit, dataLimit}) => {
  const [pages] = useState(Math.round(hotels.length / dataLimit));



const getPaginatedData = () => {
  const startIndex = currentPage * dataLimit - dataLimit;
  const endIndex = startIndex + dataLimit;
  return data.slice(startIndex, endIndex)
}

  return (
    <div>Pagination</div>
  )
}

export default Pagination