import React from 'react'
import Quotes from './Quotes'
import GalleryBox from './Gallerybox'
import GalleryImage1 from '../images/memory1.jpg'
import GalleryImage2 from '../images/memory2.jpg'
import GalleryImage3 from '../images/memory3.jpg'
import GalleryImage4 from '../images/memory4.jpg'
import GalleryImage5 from '../images/memory5.jpg'
import GalleryImage6 from '../images/memory6.jpg'
import GalleryImage7 from '../images/memory7.jpg'
import GalleryImage8 from '../images/memory8.JPG'
import GalleryImage9 from '../images/memory9.jpg'
import GalleryImage10 from '../images/memory10.JPG'
import GalleryImage11 from '../images/memory11.JPG'
import GalleryImage12 from '../images/memory12.JPG'
import GalleryImage13 from '../images/memory13.JPG'
import GalleryImage14 from '../images/memory14.JPG'
import GalleryImage15 from '../images/memory15.JPG'
import GalleryImage16 from '../images/memory16.JPG'
import GalleryImage17 from '../images/memory17.JPG'
import GalleryImage18 from '../images/memory18.JPG'
import GalleryImage19 from '../images/memory19.JPG'
import GalleryImage20 from '../images/memory20.JPG'
import GalleryImage21 from '../images/memory21.JPG'
import GalleryImage22 from '../images/memory22.jpg'
import GalleryImage23 from '../images/memory23.png'
import GalleryImage24 from '../images/memory24.JPG'
import GalleryImage25 from '../images/memory25.JPG'
import GalleryImage26 from '../images/memory26.jpg'
import GalleryImage27 from '../images/memory27.jpg'
import GalleryImage28 from '../images/memory28.jpg'
import GalleryImage29 from '../images/memory29.jpg'
import GalleryImage30 from '../images/memory30.png'
import GalleryImage31 from '../images/memory31.png'
import GalleryImage32 from '../images/memory32.jpg'
import GalleryImage33 from '../images/memory33.png'
import GalleryImage34 from '../images/memory34.png'
let gallery_quote = [{ message: "Discover the magic within frames.", color: "text-white", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }, { message: "Our gallery, where moments become memories, and every image has a story to tell.", color: "text-red-400", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }]

export default function Gallery() {
  return (
    <div className="event-section flex flex-col justify-center mt-16">
      {/* Quote */}
      <div className="qoutes text-center flex flex-col items-center mb-4 mx-10">
        <Quotes msg={gallery_quote} />
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid columns-1 md:columns-2 lg:columns-3 xl:columns-3 mx-14 mt-10 mb-10">
        <GalleryBox img={GalleryImage1} />
        <GalleryBox img={GalleryImage2} />
        <GalleryBox img={GalleryImage3} />
        <GalleryBox img={GalleryImage4} />
        <GalleryBox img={GalleryImage5} />
        <GalleryBox img={GalleryImage6} />
        <GalleryBox img={GalleryImage7} />
        <GalleryBox img={GalleryImage8} />
        <GalleryBox img={GalleryImage9} />
        <GalleryBox img={GalleryImage10} />
        <GalleryBox img={GalleryImage11} />
        <GalleryBox img={GalleryImage12} />
        <GalleryBox img={GalleryImage13} />
        <GalleryBox img={GalleryImage14} />
        <GalleryBox img={GalleryImage15} />
        <GalleryBox img={GalleryImage16} />
        <GalleryBox img={GalleryImage17} />
        <GalleryBox img={GalleryImage18} />
        <GalleryBox img={GalleryImage19} />
        <GalleryBox img={GalleryImage20} />
        <GalleryBox img={GalleryImage21} />
        <GalleryBox img={GalleryImage22} />
        <GalleryBox img={GalleryImage23} />
        <GalleryBox img={GalleryImage24} />
        <GalleryBox img={GalleryImage25} />
        <GalleryBox img={GalleryImage26} />
        <GalleryBox img={GalleryImage27} />
        <GalleryBox img={GalleryImage28} />
        <GalleryBox img={GalleryImage29} />
        <GalleryBox img={GalleryImage30} />
        <GalleryBox img={GalleryImage31} />
        <GalleryBox img={GalleryImage32} />
        <GalleryBox img={GalleryImage33} />
        <GalleryBox img={GalleryImage34} />
      </div>
    </div>
  )
}
