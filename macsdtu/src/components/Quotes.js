import React from 'react'

const Quotes = (props) => {
  return (
    <div>
        {props.msg.map((ele,index)=>{
            return <p key={index} className={`text-${ele.color} text-${ele.size}`}>{ele.message}</p>
        })
        }
    </div>
  )
}

export default Quotes