import React from 'react'
import Quotes from './Quotes'
import AchievementBox from './Achievementbox'
// import Dummy from '../images/dummy.jpg'
import Achievement1 from '../images/Nissan.jpg'
import Achievement2 from '../images/Achievement2.jpg'
import Achievement3 from '../images/Ishan.png'
import Achievement4 from '../images/Shresth2.jpg'
import Achievement5 from '../images/Aksht2.jpg'
import Achievement6 from '../images/Vidyanshu2.jpg'
import Achievement7 from '../images/Achievement7.png'
import Achievement8 from '../images/Achievement8.jpg'
import Achievement9 from '../images/Achievement9.jpg'
import Achievement10 from '../images/Keshav.jpg'
import Achievement11 from '../images/Achievement11.jpg'
import Achievement12 from '../images/Achievement12.jpg'
import Achievement13 from '../images/Achievement13.jpg'
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
        <AchievementBox img={Achievement8} msg={`"Mr. Hardik, our Student Coordinator, an institute-level winner made it to the Solving for India Hackathon regionals."`} />
        <AchievementBox img={Achievement9} msg={`"Mr. Ayush Gupta, our Tech Head, an institute-level winner made it to the Solving for India Hackathon regionals."`} />
        <AchievementBox img={Achievement3} msg={`"Mr. Ishan Bhateja, our former Vice President, is currently serving as the Placement Coordinator for the MCE Department."`} />
        <AchievementBox img={Achievement12} msg={`"Mr. Nikhil Gupta, our former Treasurer, was invited as a guest speaker at Ambedkar DSEU Shakarpur Campus-I."`} />
        <AchievementBox img={Achievement10} msg={`"Mr. Keshav Nath, our former Head of Research, secured an international research internship through Mitacs at the Ryerson University, Toronto."`} />
        <AchievementBox img={Achievement13} msg={`"Mr. Nikhil Gupta, our former Treasurer, was invited as a guest speaker for Git and Github workshop at Manav Rachna University."`} />
        <AchievementBox img={Achievement4} msg={`"Mr. Shresth Jain, our former President, served as the Placement Coordinator for the MCE Department."`} />
        <AchievementBox img={Achievement6} msg={`"Mr. Vidyanshu Mishra, our former Treasurer, secured an international research internship through Mitacs at the University of Windsor."`} />
        <AchievementBox img={Achievement5} msg={`"Mr. Aksht Jain, our former Vice President, attained the title of Candidate Master on Codeforces."`} />
        <AchievementBox img={Achievement11} msg={`"Mr. Keshav Nath, our former Head of Research, was honoured with the title of Best Freshman Performer in the Viral Tweets Prediction Challenge."`} />
        <AchievementBox img={Achievement7} msg={`"Mr. Sachin Duhan, our former President, was honored at the Delhi State level with the title of Best Cadet and also received National Level Appreciation."`} />
      </div>
    </div>
  )
}
