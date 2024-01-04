import React from 'react'
import { Link } from 'react-router-dom'
import Quotes from './Quotes'
import EventBox from './Eventbox'
// import Dummy from '../images/dummy.jpg'
import p7 from '../images/person7.svg'
import Event1 from '../images/event1.jpeg'
import Event2 from '../images/event2.jpeg'
import Event3 from '../images/event3.jpeg'
import Event4 from '../images/event4.jpeg'
import Event5 from '../images/event5.jpeg'
import Event6 from '../images/event6.jpeg'
import Event7 from '../images/event7.jpeg'
import Event8 from '../images/event8.jpeg'
import Event9 from '../images/event9.png'
import Event12 from '../images/Event12.jpeg'
import Event13 from '../images/Event13.jpeg'
import Event14 from '../images/Event14.jpeg'
import Event15 from '../images/Event15.jpeg'
import Event16 from '../images/Event16.jpeg'
import Event17 from '../images/Event17.jpeg'
import Event18 from '../images/Event18.jpeg'
import Event19 from '../images/Event19.jpeg'
import Event20 from '../images/Event20.jpeg'
import Event21 from '../images/Event21.jpeg'
import Event22 from '../images/Event22.jpeg'
import Event23 from '../images/Event23.jpeg'
import Event24 from '../images/Event24.jpeg'
import Event25 from '../images/Event25.jpeg'
let event_quote = [{ message: "Moments that matter, memories that linger.", color: "text-white", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }, { message: "Our events, where every gathering becomes a celebration of shared experiences.", color: "text-red-400", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }]
let contact_us = [{ message: "Contact Us", color: "text-white", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }, { message: "For collaborations and organisation of events.", color: "text-red-400", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }]

export default function Event() {
  return (
    <div className="event-section flex flex-col justify-center mt-16">
      {/* Quote */}
      <div className="qoutes text-center flex flex-col items-center mb-4 mx-10">
        <Quotes msg={event_quote} />
      </div>

      {/* Flagship Event */}
      <div className="flagship-event-section flex flex-col justify-center items-center mt-20 mx-10">
        <p className="text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl uppercase text-center">Flagship Events</p>
        <div className="flagship-event-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 gap-y-20 mt-16">
          <EventBox textcolor={"text-white"} img={Event3} desc={"MACS DTU hosted Decyber at INVICTUS '23, where cyber warriors decrypted passwords, neutralized communications, and emerged victorious."} />
          <EventBox textcolor={"text-white"} img={Event4} desc={"MACS DTU presented Greedy Knights, challenging participants to collect coins by maneuvering knights, showcasing tactical brilliance in one minute."} />
          <EventBox textcolor={"text-white"} img={Event5} desc={"Coming Soon"} />
          <EventBox textcolor={"text-white"} img={Event6} desc={"Matheletics by MACS DTU, a thrilling math competition with absorbing rounds and a grand finale, providing unique learning opportunities."} />
          <EventBox textcolor={"text-white"} img={Event16} desc={"Mathemapics offered a heavenly extravaganza, challenging participants to uncover mathematical patterns, history, and cultures in pictures."} />
        </div>
      </div>

      {/* Workshops */}
      <div className="workshop-section flex flex-col justify-center items-center mt-32 mx-10">
        <p className="text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl uppercase text-center">Workshops</p>
        <div className="workshop-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 gap-y-20 mt-16">
          <EventBox textcolor={"text-black"} img={Event1} desc={"MACS-DTU hosted online SIG, aiding students in acing MA101, covering topics like series convergence and definite integrals."} />
          <EventBox textcolor={"text-black"} img={Event2} desc={"MACS-DTU hosted online SIG, aiding students in acing C0101 mid-semester exams by covering programming fundamentals."} />
          <EventBox textcolor={"text-white"} img={Event8} desc={"MACS-DTU provided pivotal GSoC preparation tips, supporting participants in understanding and navigating GSOC."} />
          <EventBox textcolor={"text-white"} img={Event12} desc={"Last year, MACS DTU hosted an Orientation and Python workshop by Mr. Mohit Uniyal, exploring CS concepts, data science, and DSA."} />
          <EventBox textcolor={"text-black"} img={Event13} desc={"MACS DTU hosted 'A Walk through MITACS Canada' by Mr. Vidyanshu Mishra, offering valuable insights for aspiring Mitacs scholars and future researchers."} />
          <EventBox textcolor={"text-white"} img={Event14} desc={"MACS DTU, with the Department of Mathematics, hosted a session on Process Mining by Monika Gupta from IBM Research."} />
          <EventBox textcolor={"text-white"} img={Event15} desc={"MACS DTU and Mathematics Dept. hosted a seminar on ML with Tejas Dhamecha from IBM Research, exploring theory, industry, and live examples."} />
          <EventBox textcolor={"text-white"} img={Event17} desc={"MACS DTU and Coding Ninjas collaborated for a dynamic and engaging, free workshop on DSA and CP with Facebook SDE Mr. Rajat Saxena."} />
          <EventBox textcolor={"text-black"} img={Event18} desc={"MACS DTU, SIAM DTU, BITGRIT in association with MLSA presented a webinar on Full Stack Development and DevOps with Azure."} />
          <EventBox textcolor={"text-black"} img={Event20} desc={"MACS-DTU, SIAM, Bitgrit, and Data Gateway hosted a webinar on Data Science & ML featuring Mr. Siddhant Gupta from Amazon."} />
          <EventBox textcolor={"text-black"} img={Event22} desc={"MACS-DTU concluded its ML webinar series with 'Hands-on ML Coding' featuring Tanay Singhania, now an SDE at Amazon."} />
          <EventBox textcolor={"text-black"} img={Event23} desc={"MACS hosted Code Talks on Programming featuring Sachin Duhan, a DTU 4th-year MCE student with extensive experience and projects."} />
          <EventBox textcolor={"text-white"} img={Event24} desc={"MACS DTU, in collaboration with Career Launcher, presented a webinar on GMAT vs CAT guided by Mr. Arks Srinivas."} />
          <EventBox textcolor={"text-black"} img={Event25} desc={"MACS DTU, in collaboration with PrepBytes organized a free online workshop on competitive coding and placements, featuring Mrs Mamta Kumari."} />
        </div>
      </div>

      {/* Hackathons */}
      <div className="hackathons-section flex flex-col justify-center items-center mt-32 mx-10 mb-10">
        <p className="text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl uppercase text-center">Hackathons</p>
        <div className="hackathons-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 gap-y-20 mt-16">
          <EventBox textcolor={"text-white"} img={Event9} desc={"Coming Soon"} />
          <EventBox textcolor={"text-white"} img={Event19} desc={"Coming Soon"} />
          <EventBox textcolor={"text-white"} img={Event21} desc={"Coming Soon"} />
        </div>
      </div>

      {/* Quizzes */}
      <div className="quiz-section flex flex-col justify-center items-center mt-32 mx-10 mb-10">
        <p className="text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl uppercase text-center">Quizzes</p>
        <div className="hackathons-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 gap-y-20 mt-16">
          <EventBox textcolor={"text-white"} img={Event7} desc={"Coming Soon"} />
        </div>
      </div>

      {/* Contact Us */}
      <div className="contact-us flex flex-row justify-between mx-auto">
        <div className="flex justify-center items-center">
          <img className="h-96" src={p7} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <Quotes msg={contact_us} />
          <Link to='mailto:macs@dtu.ac.in' target="_blank"><p className='stylish-2 mx-3 w-28 border rounded p-1 hover:bg-white hover:text-black text-center mt-5'>Mail Us</p></Link>
        </div>
      </div>

    </div>
  )
}
