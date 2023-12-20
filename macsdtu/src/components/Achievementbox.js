import React from 'react'
import AchievementBorder from '../images/achievementBorder.svg'

export default function AchievementBox(props) {
    return (
        <div className="achievement-box">
            <figure className="rounded-xl relative p-8">
                <img className="w-24 h-24 rounded-full mx-auto block object-cover object-center" src={props.img} alt="" />
                <img className="w-60 h-60 aspect-square absolute -inset-8 mx-auto bg-transparent" src={AchievementBorder} alt="" />
                <div className="bg-transparent pt-6 text-center space-y-4 mt-5">
                    <blockquote className='bg-transparent'>
                        <p className="text-lg font-medium bg-transparent text-red-400">
                            {props.msg}
                        </p>
                    </blockquote>
                </div>
            </figure>
        </div>
    )
}