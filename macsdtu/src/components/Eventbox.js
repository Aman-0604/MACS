import React from 'react'

export default function Eventbox(props) {
    return (
        <div className="border-2 border-red-400 overflow-hidden">
            <img className="event-image block h-64 aspect-square object-cover object-center" src={props.img} alt="" />
        </div>
    )
}
