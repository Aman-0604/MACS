import React from 'react'
import { Link } from 'react-router-dom'
import Quotes from './Quotes'
import ImageBox from './Imagebox'
import Dummy from '../images/dummy.jpg'
let sponsor_quote = [{ message: "Gratitude in partnership, impact in support.", color: "white", size: "3xl" }, { message: "To our sponsors, thank you for being the cornerstone of our success.", color: "neutral-500", size: "3xl" }]

export default function Sponsor() {
  return (
    <div className="event-section flex flex-col justify-center mt-16">
      {/* Quote */}
      <div className="qoutes text-center flex flex-col items-center mb-4">
        <Quotes msg={sponsor_quote} />
      </div>

      {/* Sponsor */}
      <div className="sponsor-section flex flex-col justify-center items-center mt-10">
        <div className="sponsor-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 gap-y-20 mt-16">
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
        </div>
      </div>

      {/* Sponsor Us Button */}
      <div className="flex justify-center mt-20">
        <Link to='/'><p className='w-28 border rounded p-1 hover:bg-white hover:text-black text-center'>Sponsor Us</p></Link>
      </div>
    </div>
  )
}
