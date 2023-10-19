import React from 'react'

function Photo(props) {
    const weekly = props.weekly
  return (
    <div className='photo'>
        <img src={weekly.imgUrl} alt={weekly.area} className='lol' />
    </div>
  )
}

export default Photo