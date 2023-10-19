import React from 'react'
import Card from './Card'

function Tarjetas(props) {
    const weekly = props.weekly
  return (
    <section className='tarjetas'>
        {
            weekly.map(week=>{
                return(
                    <Card weekly={week} />
                )
            })
        }
    </section>
  )
}

export default Tarjetas