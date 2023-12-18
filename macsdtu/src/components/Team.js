import React from 'react'
import wholeTeamPhoto from '../images/wholeTeamPhoto.png'
// import Nissan from '../images/Nissan.jpg'
// import Aman from '../images/Aman.jpg'
// import Charvi from '../images/Charvi.jpg'
// import Rahul from '../images/Rahul.jpg'
// import Harshit from '../images/Harshit.jpg'
// import Shivam from '../images/Shivam.jpg'
// import Dinesh from '../images/DineshUdar.jpg'
// import Vivek from '../images/vivek.jpg'
import Dummy from '../images/dummy.jpg'
import Quotes from './Quotes'
let team_quote = [{ message: "Teamwork makes the dream work.", color: "white", size: "3xl" }, { message: "Together, we achieve more than we ever could alone.", color: "neutral-500", size: "3xl" }]

export default function Team() {
  return (
    <div className="team-section flex flex-col justify-center mt-16">
      {/* Quote */}
      <div className="qoutes text-center flex flex-col items-center mb-4">
        <Quotes msg={team_quote} />
      </div>

      {/* Whole Team Photo */}
      <div className="flex justify-center mx-8 lg:mx-16 mt-3">
        <img className="whole-team-photo" src={wholeTeamPhoto} alt="" />
      </div>

      {/* Faculty Section */}
      <div className="faculty-section flex flex-col justify-center mt-16 mx-8 lg:mx-16">
        <p className="text-4xl">Facutly Advisors</p>
        <div className="faculty-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="border-2 border-red-400 w-fit faculty-advisor"><img className="h-64" src={Dummy} alt="" /></div>
          <div className="border-2 border-red-400 w-fit faculty-co-adviser"><img className="h-64" src={Dummy} alt="" /></div>
        </div>
      </div>

      {/* Senior Council */}
      <div className="senior-council-section flex flex-col justify-center mt-16 mx-8 lg:mx-16">
        <p className="text-4xl">Senior Council</p>
        <div className="senior-council-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="border-2 border-red-400 w-fit President"><img className="h-64" src={Dummy} alt="" /></div>
          <div className="border-2 border-red-400 w-fit Vice-President"><img className="h-64" src={Dummy} alt="" /></div>
          <div className="border-2 border-red-400 w-fit Vice-President"><img className="h-64" src={Dummy} alt="" /></div>
          <div className="border-2 border-red-400 w-fit Treasurer"><img className="h-64" src={Dummy} alt="" /></div>
          <div className="border-2 border-red-400 w-fit Head-Of-Operations"><img className="h-64" src={Dummy} alt="" /></div>
          <div className="border-2 border-red-400 w-fit Head-Of-Research"><img className="h-64" src={Dummy} alt="" /></div>
        </div>
      </div>

      {/* Junior Council */}
      {/* <div className="junior-council-section flex flex-col justify-center mt-16 mx-8 lg:mx-16">
        <p className="text-4xl">Junior Council</p>
        <div className="junior-council-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="General-Secreatary"><img className="h-64" src={} alt="" /></div>
          <div className="Joint-Secreatary"><img className="h-64" src={} alt="" /></div>
          <div className="Tech-Head"><img className="h-64" src={} alt="" /></div>
          <div className="Tech-Head"><img className="h-64" src={} alt="" /></div>
          <div className="ML-Head"><img className="h-64" src={} alt="" /></div>
        </div>
      </div> */}

    </div>
  )
}
