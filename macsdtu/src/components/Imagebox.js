import React from 'react'

export default function Imagebox(props) {
    return (
        <div className="image-box border-2 border-red-400 w-fit">
            <img className="h-64" src={props.img} alt="" />
        </div>
    )
}
