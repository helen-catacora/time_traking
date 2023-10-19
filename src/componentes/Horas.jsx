import React from 'react'

function Horas(props) {
    const weekly = props.weekly
  return (
    <div>
        <div>{weekly.horas}hrs</div>
        <div>Last Week - {weekly.lastWeek}hrs</div>
    </div>
  )
}

export default Horas