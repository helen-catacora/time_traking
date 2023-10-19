import React from 'react'
import Actividades from './Actividades'
import Horas from './Horas'
import Photo from './Photo'

function Card(props) {
    const weekly = props.weekly
  return (
    <div className={weekly.theme+' card'}>
        <Photo weekly={weekly}/>
        <div className='activities'>
            <Actividades weekly={weekly}/>
            <Horas weekly={weekly}/>
        </div>
    </div>
  )
}

export default Card