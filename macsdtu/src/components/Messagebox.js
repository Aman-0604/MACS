import React from 'react'

export default function Messagebox(props) {
    return (
        <div className="break-inside-avoid-column mb-4">
            <figure className="rounded-xl p-8 bg-gray-500 bg-opacity-5">
                <img className="w-24 h-24 rounded-full mx-auto block object-cover object-center" src={props.img} alt="" />
                <div className="bg-transparent pt-6 text-center space-y-4">
                    <blockquote className='bg-transparent'>
                        <p className="text-lg font-medium bg-transparent">
                            {props.message}
                        </p>
                    </blockquote>
                    <figcaption className="font-medium bg-transparent">
                        <div className="text-red-400 bg-transparent">
                            {props.name}
                        </div>
                        <div className="text-slate-500 bg-transparent">
                            {props.role}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}
