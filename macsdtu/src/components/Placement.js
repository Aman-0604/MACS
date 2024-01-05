import React from 'react'
import Quotes from './Quotes'
import PlacementBox from './PlacementBox'
// import DummyWithoutBox from '../images/dummywithoutbg.png'
import Atlassian from '../logos/Atlassian.png'
import Amazon from '../logos/Amazon.jpg'
import Sprinklr from '../logos/Sprinklr.png'
import Gameskraft from '../logos/GamesKraft.jpg'
import Rippling from '../logos/Rippling.png'
import Metalbook from '../logos/Metalbook.png'
import Euler from '../logos/Euler.png'
import Fractal from '../logos/Fractal.png'
import Shresth from '../images/Shresth.png'
import Vidyanshu from '../images/Vidyanshu.png'
import Vibhor from '../images/Vibhor.png'
import Shrey from '../images/Shrey.png'
import Rahul from '../images/Rahul.png'
import Sachin from '../images/Sachin.png'
import Kunal from '../images/Kunal.png'
import Siddharth from '../images/Siddharth.png'
import Aksht from '../images/Aksht.png'
let achievement_quote = [{ message: "Turning aspirations into achievements, our members not only dream but also conquer.", color: "text-white", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }, { message: "Each placement conquered is a testament to their dedication, resilience,", color: "text-red-400", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }, { message: "and the unwavering pursuit of excellence.", color: "text-red-400", size: "text-2xl", smSize: "sm:text-2xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }]

export default function Placement() {
    return (
        <div className="event-section flex flex-col justify-center mt-16">
            {/* Quote */}
            <div className="qoutes text-center flex flex-col items-center mx-10 mb-4">
                <Quotes msg={achievement_quote} />
            </div>

            {/* Achievements Wall */}
            <div className="achievement-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 mx-auto mb-10 mt-10">
                <PlacementBox img={Shresth} name={"Shresth Jain"} company={"Gameskraft"} position={"Software Engineer"} linkedin={"https://www.linkedin.com/in/shresth-jain-2000/"} companylogo={Gameskraft} />
                <PlacementBox img={Siddharth} name={"Siddharth Bihani"} company={"Atlassian"} position={"SDE"} linkedin={"https://www.linkedin.com/in/siddharth-bihani/"} companylogo={Atlassian} />
                <PlacementBox img={Vidyanshu} name={"Vidyanshu Mishra"} company={"Sprinklr"} position={"Product Engineer"} linkedin={"https://www.linkedin.com/in/vidyanshumishra1729/"} companylogo={Sprinklr} />
                <PlacementBox img={Shrey} name={"Shrey Singh"} company={"Metalbook"} position={"Software Developer"} linkedin={"https://www.linkedin.com/in/shrey-singh-68731b197/"} companylogo={Metalbook} />
                <PlacementBox img={Aksht} name={"Aksht Jain"} company={"Rippling"} position={"Software Engineer"} linkedin={"https://www.linkedin.com/in/aksht-jain-b65175119/"} companylogo={Rippling} />
                <PlacementBox img={Rahul} name={"Rahul Sharma"} company={"Amazon"} position={"Business Analyst"} linkedin={"https://www.linkedin.com/in/therahulsharrma/"} companylogo={Amazon} />
                <PlacementBox img={Kunal} name={"Kunal Sharma"} company={"Amazon"} position={"Data Analyst"} linkedin={"https://www.linkedin.com/in/kunal-sharma-469962166/"} companylogo={Amazon} />
                <PlacementBox img={Vibhor} name={"Vibhor Saxena"} company={"Fractal"} position={"Data Scientist"} linkedin={"https://www.linkedin.com/in/vibhor-saxena-a847bb130/"} companylogo={Fractal} />
                <PlacementBox img={Sachin} name={"Sachin Duhan"} company={"Euler Motors"} position={"MTS"} linkedin={"https://www.linkedin.com/in/sachin-duhan/"} companylogo={Euler} />
            </div>
        </div>
    )
}
