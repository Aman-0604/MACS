import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom'
import logo from '../images/macs-logo-2.svg'
import p1 from '../images/person1.svg'
import p2 from '../images/person2.svg'
import p3 from '../images/person3.svg'
import p4 from '../images/person4.svg'
import p5 from '../images/person5.svg'
import p6 from '../images/person6.svg'
import Dummy from '../images/dummy.jpg'
import arrow1 from '../images/arrow1.svg'
import arrow2 from '../images/arrow2.svg'
import arrow3 from '../images/arrow3.svg'
import arrow4 from '../images/arrow4.svg'
import arrow5 from '../images/arrow5.svg'
import arrow6 from '../images/arrow6.svg'
import Quotes from './Quotes'
import MessageBox from './Messagebox'
import clg_svg1 from '../images/college_svg1.svg';
import clg_svg2 from '../images/college_svg2.svg';
import clg_svg3 from '../images/college_svg3.svg';
let q1 = [{ message: "Empowering Minds, Shaping Future", color: "text-white", size: "text-5xl" }, { message: "Join the Mathematics And Computing Society at DTU", color: "text-red-400", size: "text-5xl" }]
let q2 = [{ message: "Where Passion Meets Precision, and Curiosity", color: "white", size: "text-2xl" }, { message: "Unlocks the Boundless Potential of Numbers And Code.", color: "text-white", size: "text-2xl" }];
let q3 = [{ message: "Why to Join", color: "text-white", size: "text-4xl" }, { message: "Mathematics And Computing Society, DTU ?", color: "text-red-400", size: "text-4xl" }];
let q4 = [{ message: "Skill Development", color: "text-white", size: "text-2xl" }, { message: "Leadership, Teamwork, Communication and what not", color: "text-neutral-400", size: "text-2xl" }];
let q5 = [{ message: "Potential Growth", color: "text-white", size: "text-2xl" }, { message: "Develop Personality and gain experience", color: "text-neutral-400", size: "text-2xl" }]
let q6 = [{ message: "Leadership Opportunities", color: "text-white", size: "text-2xl" }, { message: "Organise University Level Events", color: "text-neutral-400", size: "text-2xl" }];
let q7 = [{ message: "Networking", color: "text-white", size: "text-2xl" }, { message: "Senior-Junior Interaction", color: "text-neutral-400", size: "text-2xl" }]
let q8 = [{ message: "Resume Building", color: "text-white", size: "text-2xl" }, { message: "POR Section Sorted!!", color: "text-neutral-400", size: "text-2xl" }]
let q9 = [{ message: "Social Impact", color: "text-white", size: "text-2xl" }, { message: "Make a positive difference", color: "text-neutral-400", size: "text-2xl" }]
let q10 = [{ message: "Join the Community", color: "text-white", size: "text-2xl" }, { message: "Supported by the network of contributors and champions", color: "text-neutral-400", size: "text-xl" }]

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
        <div className="image w-full h-3/4 flex justify-center mt-16 mb-8">
          <img src={logo} alt="" />
        </div>
        <div className="qoutes text-center flex flex-col items-center mb-4">
          <Quotes msg={q1} />
          <div className="my-3">
            <Quotes msg={q2} />
          </div>
          <div className="w-full mt-4 mb-3 flex justify-center">
            <Link to="/"><p className='text-red-400 mx-3 border border-red-400 rounded p-1 w-28 hover:bg-red-400 hover:text-black'>Join Us</p></Link>
            <Link to='/'><p className='mx-3 w-28 border rounded p-1 hover:bg-white hover:text-black'>Sponsor Us</p></Link>
          </div>
        </div>
        <div className="w-full flex flex-col p-0 mx-auto justify-center mt-10">
          <div>
            <p className='text-2xl text-neutral-500 text-center'>Work with the brightest minds at DTU</p>
          </div>
          <div className="flex mx-auto justify-center items-center h-48">
            <img className='h-full' src={p1} alt="" />
            <img className='h-full' src={p2} alt="" />
            <img className='h-full' src={p3} alt="" />
            <img className='h-full' src={p4} alt="" />
            <img className='h-full' src={p5} alt="" />
            <img className='h-full' src={p6} alt="" />
          </div>
        </div>
      </div>
      {/* grid system 1 */}
      <div className="gallery-grid w-5/6 mx-auto grid grid-cols-4 gap-2 p-2 justify-center relative bg-none transition-all ease-in-out">
          <div className="relative sm:col-span-2 col-span-4 bg-gray-500 bg-opacity-10 flex justify-center rounded-2xl p-2" ref={divRef}
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
            <div className="description p-1 w-2/3 bg-transparent">
                <div className="icon p-1 w-16 bg-transparent aspect-square rounded-lg">
                  <img className="object-fill bg-transparent" src={p1} alt="" />
                </div>
                <p className="heading bg-transparent text-3xl mt-1 mb-2">
                  Department of Applied Mathematics
                </p>
                <p className="heading bg-transparent my-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid eos nihil ea iste quis numquam quam quia distinctio consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maxime fugiat, eius odit vitae nostrum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis maxime amet modi veritatis dolorem perferendis?
                </p>
            </div>
            <img className='mt-auto w-1/3 bg-transparent' src={clg_svg1} alt="" />
          </div>
          <div className="bg-gray-500 bg-opacity-10 flex flex-col items-center rounded-2xl p-2">
          <div className="description text-center p-1 w-full bg-transparent">
            <div className="icon p-1 mx-auto w-16 bg-transparent aspect-square rounded-lg">
              <img className="mx-auto object-fill bg-transparent" src={p1} alt="" />
            </div>
            <p className="heading bg-transparent text-3xl mt-1 mb-2">
              Vision
            </p>
            <p className="heading bg-transparent w-full my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid eos nihil ea iste quis numquam quam quia distinctio consectetur.
            </p>
          </div>
          <img className='w-full bg-transparent' src={clg_svg2} alt="" />
        </div>
        <div className="bg-gray-500 bg-opacity-5 flex flex-col items-center rounded-2xl p-2">
          <div className="description text-center p-1 w-full bg-transparent">
            <div className="icon p-1 mx-auto w-16 bg-transparent aspect-square rounded-lg">
              <img className="mx-auto object-fill bg-transparent" src={p1} alt="" />
            </div>
            <p className="heading bg-transparent text-3xl mt-1 mb-2">
              Mission
            </p>
            <p className="heading bg-transparent w-full my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid eos nihil ea iste quis numquam quam quia distinctio consectetur.
            </p>
          </div>
          <img className='w-full bg-transparent' src={clg_svg2} alt="" />
        </div>
        <div className="bg-gray-500 bg-opacity-5 flex flex-col items-center rounded-2xl p-2">
          <div className="description text-center p-1 w-full bg-transparent">
            <div className="icon p-1 mx-auto w-16 bg-transparent aspect-square rounded-lg">
              <img className="mx-auto object-fill bg-transparent" src={p1} alt="" />
            </div>
            <p className="heading bg-transparent text-3xl mt-1 mb-2">
              Impact
            </p>
            <p className="heading bg-transparent w-full my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid eos nihil ea iste quis numquam quam quia distinctio consectetur.
            </p>
          </div>
          <img className='w-full bg-transparent' src={clg_svg2} alt="" />
        </div>
        <div className="bg-gray-500 bg-opacity-5 flex flex-col items-center rounded-2xl p-2">
          <div className="description text-center p-1 w-full bg-transparent">
            <div className="icon p-1 mx-auto w-16 bg-transparent aspect-square rounded-lg">
              <img className="mx-auto object-fill bg-transparent" src={p1} alt="" />
            </div>
            <p className="heading bg-transparent text-3xl mt-1 mb-2">
              Expertise
            </p>
            <p className="heading bg-transparent w-full my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid eos nihil ea iste quis numquam quam quia distinctio consectetur.
            </p>
          </div>
          <img className='w-full bg-transparent' src={clg_svg2} alt="" />
        </div>
        <div className="col-span-2 bg-gray-500 bg-opacity-5 flex justify-center rounded-2xl p-2">
          <div className="description p-1 w-2/3 bg-transparent">
            <div className="icon p-1 w-16 bg-transparent aspect-square rounded-lg">
              <img className="object-fill bg-transparent" src={p1} alt="" />
            </div>
            <p className="heading bg-transparent text-3xl mt-1 mb-2">
              Mathematics and Computing Society
            </p>
            <p className="heading bg-transparent my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid eos nihil ea iste quis numquam quam quia distinctio consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, officia! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error vel illum quod harum iusto eius?
            </p>
          </div>
          <img className='mt-auto w-1/3 bg-transparent' src={clg_svg3} alt="" />
        </div>

      </div>
      <div className='w-full h-full'>
        <div className="heading w-full flex flex-col items-center text-center mb-8">
          <Quotes msg={q3}></Quotes>
        </div>
        <div className="flex w-full justify-center">
          <div className="left-pane w-1/3 flex flex-col">
            <div className="text-center mt-16">
              <div className='flex my-4'>
                <Quotes msg={q4}></Quotes>
                <img src={arrow6} alt="" />
              </div>
              <div className='flex my-4'>
                <Quotes msg={q5}></Quotes>
                <img src={arrow5} alt="" />
              </div>
              <div className='flex my-4'>
                <Quotes msg={q6}></Quotes>
                <img src={arrow4} alt="" />
              </div>
            </div>
          </div>
          <div className="mid-pane w-1/4 text-center relative">
            <img className='h-4/5 mb-0 w-full' src={p1} alt="" />
            <Quotes msg={[{ message: "MACS MEMBER", color: "text-red-400", size: "text-2xl" }]} />
          </div>
          <div className="right-pane w-1/3 flex flex-col">
            <div className="text-center mt-16">
              <div className='flex my-4'>
                <img src={arrow3} alt="" />
                <Quotes msg={q7}></Quotes>
              </div>
              <div className='flex my-4'>
                <img src={arrow2} alt="" />
                <Quotes msg={q8}></Quotes>
              </div>
              <div className='flex my-4'>
                <img src={arrow1} alt="" />
                <Quotes msg={q9}></Quotes>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="join-page w-full">
        <div className="text-center w-full p-2 m-1">
          <div className="mb-2">
            <Quotes msg={q10} />

          </div>
          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><span className='border rounded p-1 m-2 text-lg hover:text-black hover:bg-white'>Instagram</span></a>
          <a href='https://www.linkedin.com/company/mathematics-and-computing/' target='_blank' rel="noreferrer"><span className='border rounded p-1 m-2 text-lg hover:text-black hover:bg-white'>LinkedIn</span></a>
        </div>
        {/* Gallery Grid */}
        <div className="gallery-grid columns-1 md:columns-2 lg:columns-3 xl:columns-3 mx-14">
          <MessageBox img={Dummy} name={"Aditya Maurya"} role={"ex-President, MACS"} message={`"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur minima quia cumque doloremque esse eaque suscipit tempore reiciendis officia perspiciatis aliquid eveniet fuga veniam enim nulla incidunt dolores, a sit!"`} />
          <MessageBox img={Dummy} name={"Ishan Bhateja"} role={"ex-Vice President, MACS"} message={`"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur minima quia cumque doloremque esse eaque suscipit tempore reiciendis officia perspiciatis"`} />
          <MessageBox img={Dummy} name={"Nikhil Gupta"} role={"ex-Treasurer, MACS"} message={`"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur minima quia cumque doloremque esse eaque suscipit"`} />
          <MessageBox img={Dummy} name={"Md. Sahil Ansari"} role={"ex-Head of Operations, MACS"} message={`"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur minima quia cumque doloremque esse eaque suscipit tempore reiciendis officia perspiciatis aliquid eveniet fuga veniam enim nulla incidunt dolores, a sit!"`} />
          <MessageBox img={Dummy} name={"Keshav"} role={"ex-Head of Research, MACS"} message={`"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur minima quia cumque doloremque esse eaque suscipit tempore reiciendis officia perspiciatis"`} />
        </div>
      </div>
    </>
  )
}
