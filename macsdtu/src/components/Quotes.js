import React from 'react'

const Quotes = (props) => {
  return (
    <div>
        {props.msg.map((ele,index)=>{
            return <p key={index} className={`${ele.color} ${ele.size} sm:text-xl`}>{ele.message}</p>
        })
        }
    </div>
  )
}

export default Quotes