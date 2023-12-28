import React from 'react'
import { Link } from 'react-router-dom'

export default function PlacementBox(props) {
    return (
        <div className="achievement-box mt-20 flex flex-col border-2 border-white justify-center items-center relative w-64 h-64">
            {/* Image */}
            <img className="w-36 h-36 mx-auto block object-cover object-center bg-transparent absolute -inset-24" src={props.img} alt="" />

            {/* Company Specification */}
            <div className="company-specification flex flex-col absolute inset-20 bg-transparent">
                <div className="company-name border-2 border-white p-2 text-center text-xl bg-transparent">
                    {props.company}
                </div>
                <div className="position text-center text-neutral-400 bg-transparent">
                    {props.position}
                </div>
                <img className="w-12 h-12 mx-auto block object-cover object-center bg-transparent absolute -inset-y-4" src={props.companylogo} alt="" />
            </div>

            {/* Personal Specification */}
            <div className="personal-specification flex flex-col bg-transparent absolute inset-y-48">
                {/* Header */}
                <div className="header-box flex flex-row justify-between bg-transparent">
                    <div className="full-name bg-transparent">
                        Name
                    </div>
                    <div className="linkedin-id bg-transparent">
                        Contact
                    </div>
                </div>

                {/* Footer */}
                <div className="footer-box flex flex-row justify-between bg-transparent">
                    <div className="full-name-value bg-transparent">
                        {props.name}
                    </div>
                    <Link to={props.linkedin}>ID</Link>
                </div>
            </div>
        </div>
    )
}