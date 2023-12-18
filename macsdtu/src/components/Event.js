import React from 'react'
import Quotes from './Quotes'
let event_quote = [{ message: "Moments that matter, memories that linger.", color: "white", size: "3xl" }, { message: "Our events, where every gathering becomes a celebration of shared experiences.", color: "neutral-500", size: "3xl" }]

export default function Event() {
  return (
    <div className="event-section flex flex-col justify-center mt-16">
      {/* Quote */}
      <div className="qoutes text-center flex flex-col items-center mb-4">
        <Quotes msg={event_quote} />
      </div>
    </div>
  )
}
