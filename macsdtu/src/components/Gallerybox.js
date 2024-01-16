import React from 'react'

export default function Gallerybox(props) {
    return (
        <div className="overflow-hidden break-inside-avoid-column mb-4">
            <img className="gallery-image block w-full" src={props.img} alt="" loading='lazy' />
        </div>
    )
}
