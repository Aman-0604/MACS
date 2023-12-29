import React from 'react'
import Quotes from './Quotes'
import AchievementBox from './Achievementbox'
// import Dummy from '../images/dummy.jpg'
import Achievement1 from '../images/Nissan.jpg'
import Achievement2 from '../images/Achievement2.jpg'
import Achievement3 from '../images/Ishan.png'
import Achievement4 from '../images/Shresth.png'
import Achievement5 from '../images/Aksht.png'
let achievement_quote = [{ message: "In the tapestry of success, our members weave remarkable threads.", color: "text-white", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }, { message: "Celebrating achievements, one milestone at a time,", color: "text-red-400", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }, { message: "as our society members shine brightly on their unique paths.", color: "text-red-400", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }]

export default function Achievement() {
  return (
    <div className="event-section flex flex-col justify-center mt-16">
      {/* Quote */}
      <div className="qoutes text-center flex flex-col items-center mx-10 mb-4">
        <Quotes msg={achievement_quote} />
      </div>

      {/* Achievements Wall */}
      <div className="achievement-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 mx-auto mb-10 mt-10">
        <AchievementBox img={Achievement1} msg={`"Our President Mr. Nissan Kumar is selected for ICPC Regionals Amritapuri"`} />
        <AchievementBox img={Achievement2} msg={`"Our ML Head Mr. Divyanshu Bansal is selected for SIH Grand Finale in Hyderabad"`} />
        <AchievementBox img={Achievement3} msg={`"Our former-VP Mr. Ishan Bhateja is currently serving as a Placement Coordinator of MCE Department"`} />
        <AchievementBox img={Achievement4} msg={`"Our former-President Mr. Shresth Jain served as a Placement Coordinator of MCE Department"`} />
        <AchievementBox img={Achievement5} msg={`"Our former-VP Mr. Aksht Jain achieved the feat of Candidate Master at Codeforces"`} />
      </div>
    </div>
  )
}
