import React from 'react'
import Quotes from './Quotes'
let sponsor_quote = [{ message: "Gratitude in partnership, impact in support.", color: "white", size: "3xl" }, { message: "To our sponsors, thank you for being the cornerstone of our success.", color: "neutral-500", size: "3xl" }]

export default function Sponsor() {
  return (
    <div className="event-section flex flex-col justify-center mt-16">
      {/* Quote */}
      <div className="qoutes text-center flex flex-col items-center mb-4">
        <Quotes msg={sponsor_quote} />
      </div>
    </div>
  )
}
