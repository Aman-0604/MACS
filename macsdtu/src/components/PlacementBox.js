import React from 'react'

export default function AchievementBox(props) {
    return (
        <div className="achievement-box">
            <figure className="rounded-xl relative p-8">
                <img className="w-24 h-24 mx-auto block object-cover object-center" src={props.img} alt="" />
                <div className="bg-transparent pt-6 text-center space-y-4 mt-5">
                    <p className="text-lg font-medium bg-transparent text-red-400">{props.name}</p>
                </div>
            </figure>
        </div>
    )
}