import React from 'react'
import { Link } from 'react-router-dom'
import Quotes from './Quotes'
import SponsorBox from './Sponsorbox'
import Sponsor1 from '../images/Sponsor1.png'
import Sponsor2 from '../images/Sponsor2.png'
import Sponsor3 from '../images/Sponsor3.png'
import Sponsor4 from '../images/Sponsor4.png'
let sponsor_quote = [{ message: "Gratitude in partnership, impact in support.", color: "text-white", size: "text-3xl" }, { message: "To our sponsors, thank you for being the cornerstone of our success.", color: "text-red-400", size: "text-3xl" }]

export default function Sponsor() {
  return (
    <div className="event-section flex flex-col justify-center mt-16">
      {/* Quote */}
      <div className="qoutes text-center flex flex-col items-center mb-4 mx-10">
        <Quotes msg={sponsor_quote} />
      </div>

      {/* Sponsor */}
      <div className="sponsor-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-1 gap-y-10 mx-14 mt-10">
        <SponsorBox img={Sponsor1} />
        <SponsorBox img={Sponsor2} />
        <SponsorBox img={Sponsor3} />
        <SponsorBox img={Sponsor4} />
      </div>

      {/* Sponsor Us Button */}
      <div className="flex justify-center mt-20">
        <Link to='/'><p className='w-28 border rounded p-1 hover:bg-white hover:text-black text-center'>Sponsor Us</p></Link>
      </div>
    </div>
  )
}
