import React from 'react'

export default function Imagebox(props) {
    return (
        <div className="image-wrapper border-2 border-red-400 relative overflow-hidden">
            <img className="zoom block h-64 hover:scale-110 aspect-square object-cover object-center duration-500 ease-in-out grayscale" src={props.img} alt="" />
            <div className="text-2xl font-bold absolute inset-3 p-[1rem] bg-transparent flex justify-center items-end duration-500 ease-in-out">{props.name}</div>
            <div className="text-2xl text-red-400 font-bold absolute -inset-3 p-[1rem] bg-transparent flex justify-center items-end duration-500 ease-in-out">{props.post}</div>
        </div>
    )
}
