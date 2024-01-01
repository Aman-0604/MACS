import React from 'react'

export default function Spnosorbox(props) {
    return (
        <div className="sponsor-box">
            <img className="w-40 h-40 aspect-square mx-5 block object-scale-down" src={props.img} alt="" />
        </div>
    )
}