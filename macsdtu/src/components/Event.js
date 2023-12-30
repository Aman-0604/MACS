import React from 'react'
import Quotes from './Quotes'
import EventBox from './Eventbox'
// import Dummy from '../images/dummy.jpg'
import Event1 from '../images/event1.jpeg'
import Event2 from '../images/event2.jpeg'
import Event3 from '../images/event3.jpeg'
import Event4 from '../images/event4.jpeg'
import Event5 from '../images/event5.jpeg'
import Event6 from '../images/event6.jpeg'
import Event7 from '../images/event7.jpeg'
import Event8 from '../images/event8.jpeg'
import Event9 from '../images/event9.png'
import Event12 from '../images/Event12.jpeg'
import Event13 from '../images/Event13.jpeg'
import Event14 from '../images/Event14.jpeg'
import Event15 from '../images/Event15.jpeg'
import Event16 from '../images/Event16.jpeg'
import Event17 from '../images/Event17.jpeg'
import Event18 from '../images/Event18.jpeg'
import Event19 from '../images/Event19.jpeg'
import Event20 from '../images/Event20.jpeg'
import Event21 from '../images/Event21.jpeg'
import Event22 from '../images/Event22.jpeg'
import Event23 from '../images/Event23.jpeg'
import Event24 from '../images/Event24.jpeg'
import Event25 from '../images/Event25.jpeg'
let event_quote = [{ message: "Moments that matter, memories that linger.", color: "text-white", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }, { message: "Our events, where every gathering becomes a celebration of shared experiences.", color: "text-red-400", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }]

export default function Event() {
  return (
    <div className="event-section flex flex-col justify-center mt-16">
      {/* Quote */}
      <div className="qoutes text-center flex flex-col items-center mb-4 mx-10">
        <Quotes msg={event_quote} />
      </div>

      {/* Flagship Event */}
      <div className="flagship-event-section flex flex-col justify-center items-center mt-20 mx-10">
        <p className="text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl uppercase text-center">Flagship Events</p>
        <div className="flagship-event-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 gap-y-20 mt-16">
          <EventBox img={Event3} />
          <EventBox img={Event4} />
          <EventBox img={Event5} />
          <EventBox img={Event6} />
          <EventBox img={Event16} />
        </div>
      </div>

      {/* Workshops */}
      <div className="workshop-section flex flex-col justify-center items-center mt-32 mx-10">
        <p className="text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl uppercase text-center">Workshops</p>
        <div className="workshop-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 gap-y-20 mt-16">
          <EventBox img={Event1} />
          <EventBox img={Event2} />
          <EventBox img={Event8} />
          <EventBox img={Event12} />
          <EventBox img={Event13} />
          <EventBox img={Event14} />
          <EventBox img={Event15} />
          <EventBox img={Event17} />
          <EventBox img={Event18} />
          <EventBox img={Event20} />
          <EventBox img={Event22} />
          <EventBox img={Event23} />
          <EventBox img={Event24} />
          <EventBox img={Event25} />
        </div>
      </div>

      {/* Hackathons */}
      <div className="hackathons-section flex flex-col justify-center items-center mt-32 mx-10 mb-10">
        <p className="text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl uppercase text-center">Hackathons</p>
        <div className="hackathons-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 gap-y-20 mt-16">
          <EventBox img={Event9} />
          <EventBox img={Event19} />
          <EventBox img={Event21} />
        </div>
      </div>

      {/* Quizzes */}
      <div className="quiz-section flex flex-col justify-center items-center mt-32 mx-10 mb-10">
        <p className="text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl uppercase text-center">Quizzes</p>
        <div className="hackathons-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 gap-y-20 mt-16">
          <EventBox img={Event7} />
        </div>
      </div>

    </div>
  )
}
