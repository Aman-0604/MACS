import React from 'react'
import Quotes from './Quotes'
import AchievementBox from './Achievementbox'
// import Dummy from '../images/dummy.jpg'
import Achievement1 from '../images/Nissan.jpg'
import Achievement2 from '../images/Achievement2.jpg'
import Achievement3 from '../images/Ishan.png'
import Achievement4 from '../images/Shresth.png'
import Achievement5 from '../images/Aksht.png'
import Achievement6 from '../images/Vidyanshu.png'
import Achievement7 from '../images/Achievement7.png'
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
        <AchievementBox img={Achievement1} msg={`"Mr. Nissan Kumar, our President, has been selected for the ICPC Regionals Amritapuri."`} />
        <AchievementBox img={Achievement1} msg={`"Mr. Nissan Kumar, our President, along with his team, achieved AIR 5 in IEEEXtreme 17.0."`} />
        <AchievementBox img={Achievement2} msg={`"Mr. Divyanshu Bansal, our Head of Machine Learning, has emerged as a National Finalist in the Smart India Hackathon '23."`} />
        <AchievementBox img={Achievement3} msg={`"Mr. Ishan Bhateja, our former Vice President, is currently serving as the Placement Coordinator for the MCE Department."`} />
        <AchievementBox img={Achievement4} msg={`"Mr. Shresth Jain, our former President, served as the Placement Coordinator for the MCE Department."`} />
        <AchievementBox img={Achievement6} msg={`"Mr. Vidyanshu Mishra, our former Treasurer, secured an international research internship through Mitacs at the University of Windsor."`} />
        <AchievementBox img={Achievement5} msg={`"Mr. Aksht Jain, our former Vice President, attained the title of Candidate Master on Codeforces."`} />
        <AchievementBox img={Achievement7} msg={`"Mr. Sachin Duhan, our former President, was honored at the Delhi State level with the title of Best Cadet and also received National Level Appreciation."`} />
      </div>
    </div>
  )
}
