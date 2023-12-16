import React from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon, CalendarIcon, CurrencyRupeeIcon, PhotoIcon, StarIcon, UserGroupIcon } from '@heroicons/react/24/solid'

export default function Navbar() {
    return (
        <div className="header flex flex-row justify-center content-center mt-3">
            <Link to="/">
                <li className="has-tooltip headerList list-none mx-3">
                    <HomeIcon className='h-8 w-8 text-neutral-300 scale-110 border-b border-neutral-600 transform hover:scale-125 rounded-md p-1' />
                    <span class='tooltip rounded-md text-sm shadow-md p-2 bg-black text-neutral-300 mt-2 -mx-3'>Home</span>
                </li>
            </Link>
            <Link to="/event">
                <li className="has-tooltip headerList list-none mx-3">
                    <CalendarIcon className='h-8 w-8 text-neutral-300 scale-110 border-b border-neutral-600 transform hover:scale-125 rounded-md p-1' />
                    <span class='tooltip rounded-md text-sm shadow-md p-2 bg-black text-neutral-300 mt-2 -mx-3'>Event</span>
                </li>
            </Link>
            <Link to="/sponsor">
                <li className="has-tooltip headerList list-none mx-3">
                    <CurrencyRupeeIcon className='h-8 w-8 text-neutral-300 scale-110 border-b border-neutral-600 transform hover:scale-125 rounded-md p-1' />
                    <span class='tooltip rounded-md text-sm shadow-md p-2 bg-black text-neutral-300 mt-2 -mx-3'>Sponsor</span>
                </li>
            </Link>
            <Link to="/gallery">
                <li className="has-tooltip headerList list-none mx-3">
                    <PhotoIcon className='h-8 w-8 text-neutral-300 border-b scale-110 border-neutral-600 transform hover:scale-125 rounded-md p-1' />
                    <span class='tooltip rounded-md text-sm shadow-md p-2 bg-black text-neutral-300 mt-2 -mx-3'>Gallery</span>
                </li>
            </Link>
            <Link to="/achievement">
                <li className="has-tooltip headerList list-none mx-3">
                    <StarIcon className='h-8 w-8 text-neutral-300 border-b scale-110 border-neutral-600 transform hover:scale-125 rounded-md p-1' />
                    <span class='tooltip rounded-md text-sm shadow-md p-2 bg-black text-neutral-300 mt-2 -mx-3'>Achievement</span>
                </li>
            </Link>
            <Link to="/team">
                <li className="has-tooltip headerList list-none mx-3">
                    <UserGroupIcon className='h-8 w-8 text-neutral-300 border-b scale-110 border-neutral-600 transform hover:scale-125 rounded-md p-1' />
                    <span class='tooltip rounded-md text-sm shadow-md p-2 bg-black text-neutral-300 mt-2 -mx-3'>Team</span>
                </li>
            </Link>
        </div>
    )
}
