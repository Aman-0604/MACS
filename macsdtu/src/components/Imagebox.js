import React from 'react'

export default function Imagebox(props) {
    return (
        <div className="image-box border-2 border-red-400 w-fit overflow-hidden inline-block">
            <img className="h-64 hover:scale-110 duration-500 transition-transform" src={props.img} alt="" />
        </div>
    )
}
