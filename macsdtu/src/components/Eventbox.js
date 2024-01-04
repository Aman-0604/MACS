import React from 'react'

export default function Eventbox(props) {
    return (
        <div className="eventbox-wrapper border-2 border-red-400 relative overflow-hidden">
            <img className="event-image block h-64 aspect-square object-cover object-center duration-500 ease-in-out" src={props.img} alt="" />
            <div className="content slide-right text-xl font-bold absolute inset-3 pl-[1rem] pr-2 pt-2 pb-2 bg-transparent flex justify-center items-end duration-500 ease-in-out">{props.desc}</div>
        </div>
    )
}
