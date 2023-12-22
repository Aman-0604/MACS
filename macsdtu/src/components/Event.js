import React from 'react'
import Quotes from './Quotes'
import EventBox from './Eventbox'
import Dummy from '../images/dummy.jpg'
import Event1 from '../images/event1.jpeg'
import Event2 from '../images/event2.jpeg'
import Event3 from '../images/event3.jpeg'
import Event4 from '../images/event4.jpeg'
import Event5 from '../images/event5.jpeg'
import Event6 from '../images/event6.jpeg'
import Event7 from '../images/event7.jpeg'
import Event8 from '../images/event8.jpeg'
let event_quote = [{ message: "Moments that matter, memories that linger.", color: "text-white", size: "text-3xl" }, { message: "Our events, where every gathering becomes a celebration of shared experiences.", color: "text-red-400", size: "text-3xl" }]

export default function Event() {
  return (
    <div className="event-section flex flex-col justify-center mt-16">
      {/* Quote */}
      <div className="qoutes text-center flex flex-col items-center mb-4 mx-10">
        <Quotes msg={event_quote} />
      </div>

      {/* Flagship Event */}
      <div className="flagship-event-section flex flex-col justify-center items-center mt-20 mx-10">
        <p className="text-5xl uppercase text-center">Flagship Events</p>
        <div className="flagship-event-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 gap-y-20 mt-16">
          <EventBox img={Event3} />
          <EventBox img={Event4} />
          <EventBox img={Event5} />
          <EventBox img={Event6} />
        </div>
      </div>

      {/* Workshops */}
      <div className="workshop-section flex flex-col justify-center items-center mt-32 mx-10">
        <p className="text-5xl uppercase text-center">Workshops</p>
        <div className="workshop-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 gap-y-20 mt-16">
          <EventBox img={Event1} />
          <EventBox img={Event2} />
          <EventBox img={Event8} />
        </div>
      </div>

      {/* Hackathons */}
      <div className="hackathons-section flex flex-col justify-center items-center mt-32 mx-10 mb-10">
        <p className="text-5xl uppercase text-center">Other Events</p>
        <div className="hackathons-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 gap-y-20 mt-16">
          <EventBox img={Event7} />
          <EventBox img={Dummy} />
        </div>
      </div>

    </div>
  )
}
