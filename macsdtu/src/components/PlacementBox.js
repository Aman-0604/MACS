import React from 'react'
import { Link } from 'react-router-dom'
import Linkedin from '../images/linkedin.svg'

export default function PlacementBox(props) {
    return (
        <div className="achievement-box mt-32 flex flex-col justify-end border-2 border-white w-64 h-64 relative">
            {/* Image */}
            <img className="w-36 h-36 mx-auto mb-5 block object-cover object-center bg-transparent absolute -inset-24" src={props.img} alt="" />

            {/* Company Specification */}
            <div className="company-specification flex flex-col bg-transparent mx-4 mb-10">
                <div className="company-name border-2 border-white p-2 bg-transparent">
                    <img className="mx-auto block object-cover object-center bg-transparent" src={props.companylogo} alt="" />
                </div>
                <div className="position text-center text-neutral-400 bg-transparent">
                    {props.position}
                </div>
            </div>

            {/* Personal Specification */}
            <div className="personal-specification flex flex-col bg-transparent mx-2">
                {/* Header */}
                <div className="header-box flex flex-row justify-between bg-transparent">
                    <div className="full-name bg-transparent text-neutral-400">
                        Name
                    </div>
                    <div className="linkedin-id bg-transparent text-neutral-400">
                        Contact
                    </div>
                </div>

                {/* Footer */}
                <div className="footer-box flex flex-row justify-between bg-transparent">
                    <div className="full-name-value bg-transparent">
                        {props.name}
                    </div>
                    <Link to={props.linkedin} target="_blank"><img src={Linkedin} className='w-5 h-5 bg-transparent' alt="" /></Link>
                </div>
            </div>
        </div>
    )
}