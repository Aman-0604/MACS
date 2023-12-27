import React from 'react'

export default function Eventbox(props) {
    return (
        <div className="eventbox-wrapper border-2 border-red-400 relative overflow-hidden">
            <img className="event-image block h-64 aspect-square object-cover object-center duration-500 ease-in-out" src={props.img} alt="" />
            <div className="content slide-right text-xl font-bold absolute inset-3 p-[1rem] bg-transparent flex justify-center items-end duration-500 ease-in-out">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, labore.</div>
        </div>
    )
}
