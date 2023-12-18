import React from 'react'
import Quotes from './Quotes'
import ImageBox from './Imagebox'
import Dummy from '../images/dummy.jpg'
let event_quote = [{ message: "Moments that matter, memories that linger.", color: "white", size: "3xl" }, { message: "Our events, where every gathering becomes a celebration of shared experiences.", color: "neutral-500", size: "3xl" }]

export default function Event() {
  return (
    <div className="event-section flex flex-col justify-center mt-16">
      {/* Quote */}
      <div className="qoutes text-center flex flex-col items-center mb-4">
        <Quotes msg={event_quote} />
      </div>

      {/* Flagship Event */}
      <div className="flagship-event-section flex flex-col justify-center items-center mt-20">
        <p className="text-5xl uppercase">Flagship Event</p>
        <div className="flagship-event-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 gap-y-20 mt-16">
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
        </div>
      </div>

      {/* Workshops */}
      <div className="workshop-section flex flex-col justify-center items-center mt-32">
        <p className="text-5xl uppercase">Workshops</p>
        <div className="workshop-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 gap-y-20 mt-16">
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
        </div>
      </div>

      {/* Hackathons */}
      <div className="hackathons-section flex flex-col justify-center items-center mt-32">
        <p className="text-5xl uppercase">Hackathons</p>
        <div className="hackathons-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 gap-y-20 mt-16">
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
        </div>
      </div>

    </div>
  )
}
