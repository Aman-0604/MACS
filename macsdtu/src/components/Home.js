import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { AcademicCapIcon, BoltIcon, BuildingLibraryIcon, CodeBracketIcon, LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'
import Marquee from "react-fast-marquee";
import Sponsor1 from '../images/Sponsor1.png'
import Sponsor2 from '../images/Sponsor2.png'
import Sponsor3 from '../images/Sponsor3.png'
import Sponsor4 from '../images/Sponsor4.png'
import Sponsor5 from '../images/Sponsor5.png'
import Sponsor6 from '../images/Sponsor6.png'
import SponsorBox from './Sponsorbox'
import logo from '../images/macs-logo-2.svg'
import p1 from '../images/person1.svg'
import p2 from '../images/person2.svg'
import p3 from '../images/person3.svg'
import p4 from '../images/person4.svg'
import p5 from '../images/person5.svg'
import p6 from '../images/person6.svg'
// import Dummy from '../images/dummy.jpg'
import arrow1 from '../images/arrow1.svg'
import arrow2 from '../images/arrow2.svg'
import arrow3 from '../images/arrow3.svg'
import arrow4 from '../images/arrow4.svg'
import arrow5 from '../images/arrow5.svg'
import arrow6 from '../images/arrow6.svg'
import Quotes from './Quotes'
import MessageBox from './Messagebox'
import clg_svg1 from '../images/college_svg1.svg';
import clg_gate from '../images/college_gate.svg';
import clg_svg3 from '../images/college_svg3.svg';
import expertise from '../images/expertise.svg';
import impact from '../images/impact.svg';
import mission from '../images/mission.svg';
import AdityaMaurya from '../images/AdityaMaurya.jpg';
import Ishan from '../images/Ishan.png';
import Nikhil from '../images/Nikhil.jpg';
import Keshav from '../images/Keshav.jpg';
import SahilAnsari from '../images/SahilAnsari.jpg';
import Shrey from '../images/Shrey2.jpg'
let q1 = [{ message: "Empowering Minds, Shaping Future", color: "text-white", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-5xl", lgSize: "lg:text-5xl", xlSize: "xl:text-5xl" }, { message: "Join the Mathematics And Computing Society at DTU", color: "text-red-400", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-5xl", lgSize: "lg:text-5xl", xlSize: "xl:text-5xl" }]
let q2 = [{ message: "Where Passion Meets Precision, and Curiosity", color: "text-white", size: "text-xl", smSize: "sm:text-xl", mdSize: "md:text-2xl", lgSize: "lg:text-2xl", xlSize: "xl:text-2xl" }, { message: "Unlocks the Boundless Potential of Numbers And Code.", color: "text-white", size: "text-xl", smSize: "sm:text-xl", mdSize: "md:text-2xl", lgSize: "lg:text-2xl", xlSize: "xl:text-2xl" }];
let q3 = [{ message: "Why to Join", color: "text-white", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-4xl", lgSize: "lg:text-4xl", xlSize: "xl:text-4xl" }, { message: "Mathematics And Computing Society, DTU ?", color: "text-red-400", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-4xl", lgSize: "lg:text-4xl", xlSize: "xl:text-4xl" }];
let q4 = [{ message: "Skill Development", color: "text-white", size: "text-xl", smSize: "extra-small sm:text-xl", mdSize: "md:text-2xl", lgSize: "lg:text-2xl", xlSize: "xl:text-2xl" }, { message: "Leadership, Teamwork, Communication and what not", color: "text-neutral-400", size: "text-xl", smSize: "extra-small sm:text-xl", mdSize: "md:text-2xl", lgSize: "lg:text-2xl", xlSize: "xl:text-2xl" }];
let q5 = [{ message: "Potential Growth", color: "text-white", size: "text-xl", smSize: "extra-small sm:text-xl", mdSize: "md:text-2xl", lgSize: "lg:text-2xl", xlSize: "xl:text-2xl" }, { message: "Develop Personality and gain experience", color: "text-neutral-400", size: "text-xl", smSize: "extra-small sm:text-xl", mdSize: "md:text-2xl", lgSize: "lg:text-2xl", xlSize: "xl:text-2xl" }]
let q6 = [{ message: "Leadership Opportunities", color: "text-white", size: "text-xl", smSize: "extra-small sm:text-xl", mdSize: "md:text-2xl", lgSize: "lg:text-2xl", xlSize: "xl:text-2xl" }, { message: "Organise University Level Events", color: "text-neutral-400", size: "text-xl", smSize: "extra-small sm:text-xl", mdSize: "md:text-2xl", lgSize: "lg:text-2xl", xlSize: "xl:text-2xl" }];
let q7 = [{ message: "Networking", color: "text-white", size: "text-xl", smSize: "extra-small sm:text-xl", mdSize: "md:text-2xl", lgSize: "lg:text-2xl", xlSize: "xl:text-2xl" }, { message: "Senior-Junior Interaction", color: "text-neutral-400", size: "text-xl", smSize: "extra-small sm:text-xl", mdSize: "md:text-2xl", lgSize: "lg:text-2xl", xlSize: "xl:text-2xl" }]
let q8 = [{ message: "Resume Building", color: "text-white", size: "text-xl", smSize: "extra-small sm:text-xl", mdSize: "md:text-2xl", lgSize: "lg:text-2xl", xlSize: "xl:text-2xl" }, { message: "POR Section Sorted!!", color: "text-neutral-400", size: "text-xl", smSize: "extra-small sm:text-xl", mdSize: "md:text-2xl", lgSize: "lg:text-2xl", xlSize: "xl:text-2xl" }]
let q9 = [{ message: "Social Impact", color: "text-white", size: "text-xl", smSize: "extra-small sm:text-xl", mdSize: "md:text-2xl", lgSize: "lg:text-2xl", xlSize: "xl:text-2xl" }, { message: "Make a positive difference", color: "text-neutral-400", size: "text-xl", smSize: "extra-small sm:text-xl", mdSize: "md:text-2xl", lgSize: "lg:text-2xl", xlSize: "xl:text-2xl" }]
let q10 = [{ message: "Join the Community", color: "text-white", size: "text-xl", smSize: "sm:text-xl", mdSize: "md:text-2xl", lgSize: "lg:text-2xl", xlSize: "xl:text-2xl" }, { message: "Supported by the network of contributors and champions", color: "text-neutral-400", size: "text-xl", smSize: "sm:text-xl", mdSize: "md:text-2xl", lgSize: "lg:text-2xl", xlSize: "xl:text-2xl" }]
let sponsor_quote = [{ message: "Gratitude in partnership, impact in support.", color: "text-white", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }, { message: "To our sponsors, thank you for being the cornerstone of our success.", color: "text-red-400", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }]

export default function Home() {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <>
      <div className='flex flex-col justify-center h-full w-full'>
        <div className="image w-full h-3/4 flex justify-center mt-8 md:mt-16 mb-4 md:mb-8">
          <img src={logo} alt="" />
        </div>
        <div className="qoutes text-center flex flex-col items-center mb-4">
          <Quotes msg={q1} />
          <div className="my-3">
            <Quotes msg={q2} />
          </div>
          <div className="w-full mt-4 mb-3 flex justify-center">
            <Link to='mailto:macs@dtu.ac.in' target="_blank"><p className='stylish-1 text-red-400 mx-3 border border-red-400 rounded p-1 w-28 hover:bg-red-400 hover:text-black'>Join Us</p></Link>
            <Link to='mailto:macs@dtu.ac.in' target="_blank"><p className='stylish-2 mx-3 w-28 border rounded p-1 hover:bg-white hover:text-black'>Sponsor Us</p></Link>
          </div>
        </div>
        <div className="w-full flex flex-col p-0 mx-auto justify-center md:mt-10 overflow-x-hidden">
          <div>
            <p className='text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl text-neutral-500 text-center'>Work with the brightest minds at DTU</p>
          </div>
          <div className="flex mx-auto justify-center items-center h-48">
            <img className='left l-3 h-full w-1/6' src={p1} alt="" />
            <img className='left l-2 h-full w-1/6' src={p2} alt="" />
            <img className='left l-1 h-full w-1/6' src={p3} alt="" />
            <img className='right r-1 h-full w-1/6' src={p4} alt="" />
            <img className='right r-2 h-full w-1/6' src={p5} alt="" />
            <img className='right r-3 h-full w-1/6' src={p6} alt="" />
          </div>
        </div>
      </div>

      {/* About Us Grid */}
      <div className="gallery-grid w-5/6 mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 p-2 justify-center relative bg-none transition-all ease-in-out">
        {/* Box - 1 */}
        <div className="relative md:col-span-2 bg-gray-500 bg-opacity-5 flex md:justify-center rounded-2xl p-2 flex-col md:flex-row" ref={divRef}
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <div
            className="spotlight rounded-2xl"
            style={{
              opacity,
              background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,0,0,.16), transparent 40%)`,
            }}
          />
          <div className="description p-1 md:w-2/3 bg-transparent">
            <BuildingLibraryIcon className='h-10 mx-auto md:ml-0 w-10 p-1 rounded-lg stroke-red-400 fill-none' />
            <p className="heading bg-transparent text-3xl mt-1 mb-2">
              Department of Applied Mathematics
            </p>
            <p className="heading bg-transparent my-1 text-justify">
              The Department of Applied Mathematics is the pride of DTU. The department strives to impart sound knowledge of Mathematics, Statistics and Computing to the students through teaching and analysis. The department is attaining its goals with the help of highly entitled faculty. The research outcome of the department is very remarkable and speaks clearly for the quality of work.
            </p>
          </div>
          <img className='mt-auto md:w-1/3 bg-transparent w-1/2 mx-auto' src={clg_svg1} alt="" />
        </div>

        {/* Box - 2 */}
        <div className="glower bg-gray-500 bg-opacity-5 flex flex-col justify-between items-center rounded-2xl p-2">
          <div className="description text-center p-1 w-full bg-transparent">
            <LightBulbIcon className='h-10 w-10 p-1 mx-auto rounded-lg stroke-red-400 fill-none' />
            <p className="heading bg-transparent text-3xl mt-1 mb-2">
              Vision
            </p>
            <p className="heading bg-transparent w-full my-1">
              MACS envisions a dynamic hub where learners passionate about math, computing, and finance collaborate, explore, and excel. The vision is to make a positive impact through applied mathematical and computational principles.
            </p>
          </div>
          <img className='w-full p-3 bg-transparent' src={clg_gate} alt="" />
        </div>

        {/* Box - 3 */}
        <div className="glower bg-gray-500 bg-opacity-5 flex flex-col justify-between items-center rounded-2xl p-2">
          <div className="description text-center p-1 w-full bg-transparent">
            <RocketLaunchIcon className='h-10 w-10 p-1 mx-auto rounded-lg stroke-red-400 fill-none' />
            <p className="heading bg-transparent text-3xl mt-1 mb-2">
              Mission
            </p>
            <p className="heading bg-transparent w-full my-1">
              MACS is dedicated to imparting knowledge, creating a conducive learning environment, and nurturing persistent growth through a platform that integrates theoretical and pragmatic applications in mathematics and computing.
            </p>
          </div>
          <img className='w-1/2 bg-transparent p-2' src={mission} alt="" />
        </div>

        {/* Box - 4 */}
        <div className="glower impact bg-gray-500 bg-opacity-5 flex flex-col justify-between items-center rounded-2xl p-2">
          <div className="description text-center p-1 w-full bg-transparent">
            <BoltIcon className='thunder h-10 w-10 p-1 mx-auto rounded-lg stroke-red-400 fill-none' />
            <p className="heading bg-transparent text-3xl mt-1 mb-2">
              Impact
            </p>
            <p className="heading bg-transparent w-full my-1">
              MACS, with over 250 active members, profoundly influences DTU's academic and professional landscape. Through events and workshops, it equips students for real-world challenges, fostering a vibrant community immersed in mathematics, computing, and finance.
            </p>
          </div>
          <img className='w-1/2 bg-transparent p-2' src={impact} alt="" />
        </div>

        {/* Box - 5 */}
        <div className="glower bg-gray-500 bg-opacity-5 flex flex-col justify-between items-center rounded-2xl p-2">
          <div className="description text-center p-1 w-full bg-transparent">
            <AcademicCapIcon className='h-10 w-10 p-1 mx-auto rounded-lg stroke-red-400 fill-none' />
            <p className="heading bg-transparent text-3xl mt-1 mb-2">
              Expertise
            </p>
            <p className="heading bg-transparent w-full my-1">
              MACS focuses on learning through workshops, SIGs, seminars, guest lessons and various seminars. MACS organizes various events every year with the consortium of Invictus i.e., the tech fest organised by the DTU.
            </p>
          </div>
          <img className='w-1/2 p-2 bg-transparent' src={expertise} alt="" />
        </div>

        {/* Box - 6 */}
        <div className="bord-grad bg-gray-500 bg-opacity-5 flex flex-col md:flex-row md:col-span-2 md:justify-center rounded-2xl p-2">
          <div className="description p-1 md:w-2/3 bg-transparent">
            <CodeBracketIcon className='h-10 mx-auto md:ml-0 w-10 p-1 rounded-lg stroke-red-400 fill-none' />
            <p className="heading bg-transparent text-3xl mt-1 mb-2">
              Mathematics and Computing Society
            </p>
            <p className="heading bg-transparent my-1 text-justify">
              MACS stands for the Mathematics and Computing Society at Delhi Technological University (DTU). It serves as a vibrant community where pupils, passionate about applied mathematics, computer science, and finance come together to scour, learn, and thrive. Through events, workshops, and a dynamic online presence, MACS contributes to the intellectual and proficient growth of its members.
            </p>
          </div>
          <img className='mt-auto md:w-1/3 bg-transparent w-1/2 mx-auto' src={clg_svg3} alt="" />
        </div>

      </div>

      {/* Why to join MACS Seciton */}
      <div className='join-sec m-8'>
        <div className="heading flex flex-col items-center text-center mb-8">
          <Quotes msg={q3}></Quotes>
        </div>
        <div className="why-join flex justify-center">
          <div className="left-pane w-1/3 flex flex-col">
            <div className="text-center mt-4 sm:mt-8">
              <div className='flex my-4'>
                <Quotes msg={q4}></Quotes>
                <img className="arrow arr-1 bg-transparent" src={arrow6} alt="" />
              </div>
              <div className='flex my-4'>
                <Quotes msg={q5}></Quotes>
                <img className="arrow" src={arrow5} alt="" />
              </div>
              <div className='flex my-4'>
                <Quotes msg={q6}></Quotes>
                <img className="arrow" src={arrow4} alt="" />
              </div>
            </div>
          </div>
          <div className="mid-pane w-1/3 text-center flex flex-col justify-center relative bg-transparent">
            <img className='macs-mem mx-auto h-2/5 md:h-3/5 mb-0 bg-transparent' src={p1} alt="" />
            <Quotes msg={[{ message: "MACS MEMBER", color: "text-red-400", smSize: "sm:text-xl", mdSize: "md:text-2xl", lgSize: "lg:text-2xl", xlSize: "xl:text-2xl" }]} />
          </div>
          <div className="right-pane w-1/3 flex flex-col">
            <div className="text-center mt-12 sm:mt-20">
              <div className='flex my-4'>
                <img className="arrow" src={arrow3} alt="" />
                <Quotes msg={q7}></Quotes>
              </div>
              <div className='flex my-4'>
                <img className="arrow" src={arrow2} alt="" />
                <Quotes msg={q8}></Quotes>
              </div>
              <div className='flex my-4'>
                <img className="arrow" src={arrow1} alt="" />
                <Quotes msg={q9}></Quotes>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Join the community Section */}
      <div className="join-page w-full">
        {/* Quotes and Button */}
        <div className="text-center p-2 m-1">
          <div className="mb-2">
            <Quotes msg={q10} />
          </div>
          <div className="flex justify-center">
            <Link className="flex gap-1 stylish-2 border rounded p-1 m-2 text-sm md:text-lg hover:bg-white items-center" to='https://www.instagram.com/macs_dtu/' target='_blank' rel="noreferrer"><span className='bg-transparent'>Instagram</span>
              <svg className="w-5 h-5 bg-transparent" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 243.05666076030911 243.05666076030911" width="486.11332152061823" height="486.11332152061823">
                <g transform="translate(10 10) rotate(0 111.52833038015456 111.52833038015456)"><svg role="img" height="223.05666076030911" width="223.05666076030911" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" fill="white" stroke-width="0.1569108041010714"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path></svg></g></svg>

            </Link>
            <Link className="flex gap-1 stylish-2 border rounded p-1 m-2 text-sm md:text-lg hover:bg-white items-center" to='https://www.linkedin.com/company/mathematics-and-computing/' target='_blank' rel="noreferrer"><span className='bg-transparent'>LinkedIn</span>
              <svg className="w-5 h-5 bg-transparent" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 223.77734375 223.77734375" width="447.5546875" height="447.5546875">
                <g transform="translate(10 10) rotate(0 101.888671875 101.888671875)"><svg role="img" height="203.77734375" width="203.77734375" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" fill="white" stroke-width="0.17175609101539288"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></g></svg></Link>

          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid columns-1 md:columns-2 lg:columns-3 xl:columns-3 mx-14 mt-10 mb-10">
          <MessageBox img={AdityaMaurya} name={"Aditya Maurya"} role={"Former-President, MACS"} message={`"A society which most people think is for students from the MCE branch, but is not. MACS gives you quality exposure to Mathematics, Technology and Brain-games. You get great seniors having experience and interest in almost everything. Tech, non-tech, data science, Core or Research, we have everything that you can think of."`} />
          <MessageBox img={Ishan} name={"Ishan Bhateja"} role={"Former-Vice President, MACS"} message={`"I was told by someone that graduated from DTU a few years ago that societies have nothing useful to give to you and I just want to say that he could not have been more wrong. I have been a part of MACS for all 4 years of my B. Tech and trust me when I say that I owe parts of my success entirely to this society. Whether it would be the skills I learned organizing three days of events or the connections I made of wise, reliable seniors and super-seniors, supportive and competitive peers, and kind-hearted and endearing juniors, I have a lot to thanks MACS for. To conclude, all I'm going to say are the lines of a famous TV show, 'But no matter how you get there or where you end up, human beings have this miraculous gift of making that place home.'"`} />
          <MessageBox img={Nikhil} name={"Nikhil Gupta"} role={"Former-Treasurer, MACS"} message={`"During college, forming connections with seniors and welcoming juniors is utmost important. MACS has been instrumental in my four-year journey, facilitating numerous internships, orchestrating workshops, and organizing events. As my departmental society, MACS not only contributed to my academics but also played a pivotal role in my personal development. From overcoming shyness to coordinating entire events and being invited as a speaker at inter-college events, MACS has been a transformative experience. For those seeking a supportive peer group and unforgettable college memories, MACS is the best choice. All in all, I got the best seniors, I got the most lovely juniors and the best experiences of my college life."`} />
          <MessageBox img={SahilAnsari} name={"Md. Sahil Ansari"} role={"Former-Head of Operations, MACS"} message={`"khane ka, peene ka, batti bujhane ka, sojane ka, kya?"`} />
          <MessageBox img={Keshav} name={"Keshav Nath"} role={"Former-Head of Research, MACS"} message={`"MACS is home. MACS introduced me to hackathons, research, ML, and developed my skills beyond all measure. MACS also gave me support, papers, and most importantly, friends. No other society could feel so comfortable and chill while also having such high-performing members and incredible output. Being part of MACS is like a cheat code for college."`} />
          <MessageBox img={Shrey} name={"Shrey Singh"} role={"Software Developer, Metalbook"} message={`"MACS seniors have answered my 'bhaiya help chahiye/ bhaiya notes/ bhaiya subject konsa lu/ bhaiya coding kaha se karu and many more' questions everytime."`} />
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="sponsors my-16">
        <div className="qoutes text-center flex flex-col items-center mb-5 mx-10">
          <Quotes msg={sponsor_quote} />
        </div>
        <Marquee autoFill="true">
          <SponsorBox img={Sponsor1} />
          <SponsorBox img={Sponsor2} />
          <SponsorBox img={Sponsor5} />
          <SponsorBox img={Sponsor3} />
          <SponsorBox img={Sponsor4} />
          <SponsorBox img={Sponsor6} />
        </Marquee>
      </div>
    </>
  )
}
