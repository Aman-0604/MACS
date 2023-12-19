import React from 'react'
import Quotes from './Quotes'
import MessageBox from './Messagebox'
import Dummy from '../images/dummy.jpg'
let gallery_quote = [{ message: "Discover the magic within frames.", color: "text-white", size: "text-3xl" }, { message: "Our gallery, where moments become memories, and every image has a story to tell.", color: "text-neutral-500", size: "text-3xl" }]

export default function Gallery() {
  return (
    <div className="event-section flex flex-col justify-center mt-16">
      {/* Quote */}
      <div className="qoutes text-center flex flex-col items-center mb-4 mx-10">
        <Quotes msg={gallery_quote} />
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid columns-1 md:columns-2 lg:columns-3 xl:columns-3 mx-14">
        <MessageBox img={Dummy} name={"SRK"} role={"Software Engineer, Amazon"} message={`"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur minima quia cumque doloremque esse eaque suscipit tempore reiciendis officia perspiciatis aliquid eveniet fuga veniam enim nulla incidunt dolores, a sit!"`} />
        <MessageBox img={Dummy} name={"SRK"} role={"Software Engineer, Amazon"} message={`"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur minima quia cumque doloremque esse eaque suscipit tempore reiciendis officia perspiciatis"`} />
        <MessageBox img={Dummy} name={"SRK"} role={"Software Engineer, Amazon"} message={`"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur minima quia cumque doloremque esse eaque suscipit"`} />
        <MessageBox img={Dummy} name={"SRK"} role={"Software Engineer, Amazon"} message={`"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur minima quia cumque doloremque esse eaque suscipit tempore reiciendis officia perspiciatis aliquid eveniet fuga veniam enim nulla incidunt dolores, a sit!"`} />
        <MessageBox img={Dummy} name={"SRK"} role={"Software Engineer, Amazon"} message={`"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur minima quia cumque doloremque esse eaque suscipit tempore reiciendis officia perspiciatis"`} />
        <MessageBox img={Dummy} name={"SRK"} role={"Software Engineer, Amazon"} message={`"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur minima quia"`} />
      </div>
    </div>
  )
}
