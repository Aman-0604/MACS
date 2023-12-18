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
import ImageBox from './Imagebox'
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
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
        </div>
      </div>

      {/* Senior Council */}
      <div className="senior-council-section flex flex-col justify-center mt-16 mx-8 lg:mx-16">
        <p className="text-4xl">Senior Council</p>
        <div className="senior-council-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
        </div>
      </div>

      {/* Junior Council */}
      <div className="junior-council-section flex flex-col justify-center mt-16 mx-8 lg:mx-16">
        <p className="text-4xl">Junior Council</p>
        <div className="junior-council-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
          <ImageBox img={Dummy} />
        </div>
      </div>

    </div>
  )
}
