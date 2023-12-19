import React from 'react'
import wholeTeamPhoto from '../images/wholeTeamPhoto.png'
import Dinesh from '../images/DineshUdar.jpg'
import Vivek from '../images/vivek.jpg'
import Dummy from '../images/dummy.jpg'
import Nissan from '../images/Nissan.jpg'
import Aman from '../images/Aman.jpg'
import Charvi from '../images/Charvi.jpg'
import Rahul from '../images/Rahul.jpg'
import Harshit from '../images/Harshit.jpg'
import Shivam from '../images/Shivam.jpg'
import Yash from '../images/Yash.jpg'
import Adit from '../images/Adit.jpg'
import Aditya from '../images/Aditya.jpg'
import Ayush from '../images/Ayush.jpg'
import Divyanshu from '../images/Divyanshu.jpg'
import Komal from '../images/Komal.jpg'
import Aakshat from '../images/Aakshat.jpg'
import Vishwam from '../images/Vishwam.jpg'
import Abhimanyu from '../images/Abhimanyu.jpg'
import Aryan from '../images/Aryan.jpg'
import Himesh from '../images/Himesh.jpg'
import Rishek from '../images/Rishek.jpg'
import Sahil from '../images/Sahil.jpg'
import Quotes from './Quotes'
import ImageBox from './Imagebox'
let team_quote = [{ message: "Teamwork makes the dream work.", color: "text-white", size: "text-3xl" }, { message: "Together, we achieve more than we ever could alone.", color: "text-neutral-500", size: "text-3xl" }]

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
      <div className="faculty-section flex flex-col justify-center items-center mt-16">
        <p className="text-5xl uppercase">Facutly Advisors</p>
        <div className="faculty-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-44 gap-y-20 mt-16">
          <ImageBox img={Dinesh} name={"Dr. Dinesh Udar"} post={"Coordinator"}/>
          <ImageBox img={Vivek} name={"Dr. Vivek Kumar"} post={"Co-Coordinator"} />
        </div>
      </div>

      {/* Senior Council */}
      <div className="senior-council-section flex flex-col justify-center items-center mt-32">
        <p className="text-5xl uppercase">Senior Council</p>
        <div className="senior-council-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 gap-y-20 mt-16">
          <ImageBox img={Nissan} name={"Nissan Kumar"} post={"President"}/>
          <ImageBox img={Charvi} name={"Charvi Solanki"} post={"Vice President"}/>
          <ImageBox img={Aman} name={"Aman Gupta"} post={"Vice President"} />
          <ImageBox img={Harshit} name={"Harshit Khurana"} post={"Head of Operations"} />
          <ImageBox img={Rahul} name={"Rahul Sharma"} post={"Treasurer"} />
          <ImageBox img={Shivam} name={"Shivam Mittal"} post={"Head of Research"} />
        </div>
      </div>

      {/* Junior Council */}
      <div className="junior-council-section flex flex-col justify-center items-center mt-32">
        <p className="text-5xl uppercase">Junior Council</p>
        <div className="junior-council-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 gap-y-20 mt-16">
          <ImageBox img={Yash} name={"Yash Singh"} post={"General Secreatary"} />
          <ImageBox img={Adit} name={"Adit Gupta"} post={"Joint Secreatary"} />
          <ImageBox img={Divyanshu} name={"Divyanshu"} post={"ML Head"} />
          <ImageBox img={Abhimanyu} name={"Abhimanyu"} post={"Content Head"} />
          <ImageBox img={Vishwam} name={"Vishwam"} post={"Creative Head"} />
          <ImageBox img={Dummy} name={"Ananya"} post={"Content Head"} />
          <ImageBox img={Dummy} name={"Ayan"} post={"Design Head"} />
          <ImageBox img={Dummy} name={"Jalaj"} post={"Design Head"} />
          <ImageBox img={Dummy} name={"Anshumaan"} post={"Design Head"} />
          <ImageBox img={Aditya} name={"Aditya Pratap"} post={"Tech Head"} />
          <ImageBox img={Ayush} name={"Ayush Gupta"} post={"Tech Head"} />
          <ImageBox img={Rishek} name={"Rishek Jha"} post={"Corporate Head"} />
          <ImageBox img={Aryan} name={"Aryan Garg"} post={"Corporate Head"} />
          <ImageBox img={Dummy} name={"Prashant Kaushik"} post={"PR Head"} />
          <ImageBox img={Sahil} name={"Sahil Vaccher"} post={"PR Head"} />
          <ImageBox img={Himesh} name={"Himesh Goyal"} post={"Student Coordinator"} />
          <ImageBox img={Dummy} name={"Hardik"} post={"Student Coordinator"} />
          <ImageBox img={Dummy} name={"Anshuman"} post={"Student Coordinator"} />
          <ImageBox img={Aakshat} name={"Aakshat Jindal"} post={"SIG Head"} />
          <ImageBox img={Komal} name={"Komal Garg"} post={"Photography Head"} />
        </div>
      </div>

    </div>
  )
}
