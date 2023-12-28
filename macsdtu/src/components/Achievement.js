import React from 'react'
import Quotes from './Quotes'
import AchievementBox from './Achievementbox'
import Dummy from '../images/dummy.jpg'
let achievement_quote = [{ message: "In the tapestry of success, our members weave remarkable threads.", color: "text-white", smSize: "sm:text-xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }, { message: "Celebrating achievements, one milestone at a time,", color: "text-red-400", smSize: "sm:text-xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }, { message: "as our society members shine brightly on their unique paths.", color: "text-red-400", smSize: "sm:text-xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }]

export default function Achievement() {
  return (
    <div className="event-section flex flex-col justify-center mt-16">
      {/* Quote */}
      <div className="qoutes text-center flex flex-col items-center mx-10 mb-4">
        <Quotes msg={achievement_quote} />
      </div>

      {/* Achievements Wall */}
      <div className="achievement-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 mx-auto mb-10 mt-10">
        <AchievementBox img={Dummy} msg={`"Our President Mr. Nissan Kumar is selected for ICPC Regionals Amarpali"`} />
        <AchievementBox img={Dummy} msg={`"Our ML Head Mr. Divyanshu Bansal is selected for SIH Grand Finale in Hyderabad"`} />
        <AchievementBox img={Dummy} msg={`"Our Tech Head Mr. Ayush Gupta secured a perfect 10 SGPA in his 1st semester"`} />
        <AchievementBox img={Dummy} msg={`"Our ex-VP Mr. Ishan Bhateja is currently serving as a Placement Coordinator"`} />
        <AchievementBox img={Dummy} msg={`"Kuch bhi"`} />
      </div>
    </div>
  )
}
