import React from 'react'

const Quotes = (props) => {
  return (
    <div>
      {props.msg.map((ele, index) => {
        return <p key={index} className={`${ele.color} ${ele.smSize} ${ele.mdSize} ${ele.lgSize} ${ele.xlSize}`}>{ele.message}</p>
      })
      }
    </div>
  )
}

export default Quotes