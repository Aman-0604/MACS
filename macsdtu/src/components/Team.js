import React from 'react'
import wholeTeamPhoto from '../images/wholeTeamPhoto.png'
import Dinesh from '../images/DineshUdar.jpg'
import Vivek from '../images/vivek.jpg'
// import Dummy from '../images/dummy.jpg'
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
import Anshuman from '../images/Anshuman.jpg'
import Ayan from '../images/Ayan.jpg'
import Ananya from '../images/Ananya.jpg'
import Hardik from '../images/Hardik.jpg'
import Prashant from '../images/Prashant.jpg'
import Anshumaan from '../images/Anshumaan.jpg'
import Jalaj from '../images/Jalaj.jpg'
import Quotes from './Quotes'
import ImageBox from './Imagebox'
let team_quote = [{ message: "Teamwork makes the dream work.", color: "text-white", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }, { message: "Together, we achieve more than we ever could alone.", color: "text-red-400", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }]

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
        <p className="text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl uppercase text-center">Facutly Advisors</p>
        <div className="faculty-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-44 gap-y-20 mt-16">
          <ImageBox img={Dinesh} name={"Dr. Dinesh Udar"} post={"Coordinator"} />
          <ImageBox img={Vivek} name={"Dr. Vivek Kumar"} post={"Co-Coordinator"} />
        </div>
      </div>

      {/* Senior Council */}
      <div className="senior-council-section flex flex-col justify-center items-center mt-32">
        <p className="text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl uppercase text-center">Senior Council</p>
        <div className="senior-council-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 gap-y-20 mt-16">
          <ImageBox img={Nissan} name={"Nissan Kumar"} post={"President"} />
          <ImageBox img={Charvi} name={"Charvi Solanki"} post={"Vice President"} />
          <ImageBox img={Aman} name={"Aman Gupta"} post={"Vice President"} />
          <ImageBox img={Harshit} name={"Harshit Khurana"} post={"Head of Operations"} />
          <ImageBox img={Rahul} name={"Rahul Sharma"} post={"Treasurer"} />
          <ImageBox img={Shivam} name={"Shivam Mittal"} post={"Head of Research"} />
        </div>
      </div>

      {/* Junior Council */}
      <div className="junior-council-section flex flex-col justify-center items-center mt-32 mb-10">
        <p className="text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl uppercase text-center">Junior Council</p>
        <div className="junior-council-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 gap-y-20 mt-16">
          <ImageBox img={Yash} name={"Yash Singh"} post={"General Secretary"} />
          <ImageBox img={Adit} name={"Adit Gupta"} post={"Joint Secretary"} />
          <ImageBox img={Divyanshu} name={"Divyanshu"} post={"ML Head"} />
          <ImageBox img={Abhimanyu} name={"Abhimanyu"} post={"Content Head"} />
          <ImageBox img={Vishwam} name={"Vishwam"} post={"Creative Head"} />
          <ImageBox img={Ananya} name={"Ananya"} post={"Content Head"} />
          <ImageBox img={Ayan} name={"Ayan"} post={"Design Head"} />
          <ImageBox img={Jalaj} name={"Jalaj"} post={"Design Head"} />
          <ImageBox img={Anshumaan} name={"Anshumaan"} post={"Design Head"} />
          <ImageBox img={Aditya} name={"Aditya Pratap"} post={"Tech Head"} />
          <ImageBox img={Ayush} name={"Ayush Gupta"} post={"Tech Head"} />
          <ImageBox img={Rishek} name={"Rishek Jha"} post={"Corporate Head"} />
          <ImageBox img={Aryan} name={"Aryan Garg"} post={"Corporate Head"} />
          <ImageBox img={Prashant} name={"Prashant Kaushik"} post={"PR Head"} />
          <ImageBox img={Sahil} name={"Sahil Vaccher"} post={"PR Head"} />
          <ImageBox img={Himesh} name={"Himesh Goyal"} post={"Student Coordinator"} />
          <ImageBox img={Hardik} name={"Hardik"} post={"Student Coordinator"} />
          <ImageBox img={Anshuman} name={"Anshuman"} post={"Student Coordinator"} />
          <ImageBox img={Aakshat} name={"Aakshat Jindal"} post={"SIG Head"} />
          <ImageBox img={Komal} name={"Komal Garg"} post={"Photography Head"} />
        </div>
      </div>

    </div>
  )
}
