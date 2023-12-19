import React from 'react'
import Quotes from './Quotes'
let gallery_quote = [{ message: "Discover the magic within frames.", color: "text-white", size: "text-3xl" }, { message: "Our gallery, where moments become memories, and every image has a story to tell.", color: "text-neutral-500", size: "text-3xl" }]

export default function Gallery() {
  return (
    <div className="event-section flex flex-col justify-center mt-16">
      {/* Quote */}
      <div className="qoutes text-center flex flex-col items-center mb-4">
        <Quotes msg={gallery_quote} />
      </div>
    </div>
  )
}
