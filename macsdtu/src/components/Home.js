import React from 'react'
import logo from '../images/macs-logo-2.svg'
import p1 from '../images/person1.svg'
import p2 from '../images/person2.svg'
import p3 from '../images/person3.svg'
import p4 from '../images/person4.svg'
import p5 from '../images/person5.svg'
import p6 from '../images/person6.svg'
import Quotes from './Quotes'
let q1 = [{message:"Empowering Minds,Shaping Future",color:"white",size:"3xl"},{message:"Join the Mathematics And Computing Society at DTU",color:"red-400",size:"4xl"}]
let q2 = [{message:"Where Passion Meets Precision, and Curiosity",color:"white",size:"l"},{message:"Unlocks the Boundless Potential of Numbers And Code.",color:"white",size:"l"}];
export default function Home() {
  return (
    <div className='flex flex-col justify-center h-full w-full'>
      <div className="image w-full h-3/4 flex justify-center mt-16 mb-8">
        <img src={logo} alt="" />
      </div>
      <div className="qoutes text-center flex flex-col items-center mb-4">
        <Quotes msg = {q1}></Quotes>
        <div className="my-3">
          <Quotes msg={q2}></Quotes>
        </div>
        <div className="w-full mt-4 mb-3 flex justify-center">
          <a href="/"><p className='text-red-400 mx-3 border border-red-400 rounded p-1 w-28 hover:bg-red-400 hover:text-black'>Join Us</p></a>
          <a href='/'><p className='mx-3 w-28 border rounded p-1 hover:bg-white hover:text-black'>Sponsor Us</p></a>
        </div>
        <p className='text-gray-300'>Work with the brightest minds at DTU</p>
      </div>
      <div className="bottom w-full flex h-52 p-0 mx-auto justify-center mt-4">
          {/* <div className="flex"> */}
            <img className='h-full' src={p1} alt="" />
            <img className='h-full' src={p2} alt="" />
            <img className='h-full' src={p3} alt="" />
            <img className='h-full' src={p4} alt="" />
            <img className='h-full' src={p5} alt="" />
            <img className='h-full' src={p6} alt="" />
          {/* </div> */}
      </div>
    </div>
  )
}
