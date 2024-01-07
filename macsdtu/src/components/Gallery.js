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
import GalleryImage35 from '../images/memory35.jpg'
import GalleryImage36 from '../images/memory36.jpg'
import GalleryImage37 from '../images/memory37.png'
import GalleryImage38 from '../images/memory38.jpg'
import GalleryImage39 from '../images/memory39.png'
import GalleryImage40 from '../images/memory40.png'
import GalleryImage41 from '../images/memory41.png'
import GalleryImage42 from '../images/memory42.png'
import GalleryImage43 from '../images/memory43.png'
import GalleryImage44 from '../images/memory44.png'
import GalleryImage45 from '../images/memory45.png'
import GalleryImage46 from '../images/memory46.jpg'
import GalleryImage47 from '../images/memory47.png'
import GalleryImage48 from '../images/memory48.png'
import GalleryImage49 from '../images/memory49.jpg'
import GalleryImage50 from '../images/memory50.jpg'
import GalleryImage51 from '../images/memory51.jpg'
import GalleryImage52 from '../images/memory52.jpg'
import GalleryImage53 from '../images/memory53.jpg'
import GalleryImage54 from '../images/memory54.jpg'
import GalleryImage55 from '../images/memory55.jpg'
import GalleryImage56 from '../images/memory56.jpg'
import GalleryImage57 from '../images/memory57.jpg'
import GalleryImage58 from '../images/memory58.jpg'
import GalleryImage59 from '../images/memory59.jpg'
import GalleryImage60 from '../images/memory60.jpg'
import GalleryImage61 from '../images/memory61.jpg'
import GalleryImage62 from '../images/memory62.jpg'
import GalleryImage63 from '../images/memory63.jpg'
import GalleryImage64 from '../images/memory64.jpg'
import GalleryImage65 from '../images/memory65.jpg'
import GalleryImage66 from '../images/memory66.jpg'
import GalleryImage67 from '../images/memory67.jpg'
import GalleryImage68 from '../images/memory68.jpg'
import GalleryImage69 from '../images/memory69.jpg'
import GalleryImage70 from '../images/memory70.jpg'
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
        <GalleryBox img={GalleryImage35} />
        <GalleryBox img={GalleryImage36} />
        <GalleryBox img={GalleryImage37} />
        <GalleryBox img={GalleryImage38} />
        <GalleryBox img={GalleryImage39} />
        <GalleryBox img={GalleryImage40} />
        <GalleryBox img={GalleryImage41} />
        <GalleryBox img={GalleryImage42} />
        <GalleryBox img={GalleryImage43} />
        <GalleryBox img={GalleryImage44} />
        <GalleryBox img={GalleryImage45} />
        <GalleryBox img={GalleryImage46} />
        <GalleryBox img={GalleryImage47} />
        <GalleryBox img={GalleryImage48} />
        <GalleryBox img={GalleryImage49} />
        <GalleryBox img={GalleryImage50} />
        <GalleryBox img={GalleryImage51} />
        <GalleryBox img={GalleryImage52} />
        <GalleryBox img={GalleryImage53} />
        <GalleryBox img={GalleryImage54} />
        <GalleryBox img={GalleryImage55} />
        <GalleryBox img={GalleryImage56} />
        <GalleryBox img={GalleryImage57} />
        <GalleryBox img={GalleryImage58} />
        <GalleryBox img={GalleryImage59} />
        <GalleryBox img={GalleryImage60} />
        <GalleryBox img={GalleryImage61} />
        <GalleryBox img={GalleryImage62} />
        <GalleryBox img={GalleryImage63} />
        <GalleryBox img={GalleryImage64} />
        <GalleryBox img={GalleryImage65} />
        <GalleryBox img={GalleryImage66} />
        <GalleryBox img={GalleryImage67} />
        <GalleryBox img={GalleryImage68} />
        <GalleryBox img={GalleryImage69} />
        <GalleryBox img={GalleryImage70} />
      </div>
    </div>
  )
}
