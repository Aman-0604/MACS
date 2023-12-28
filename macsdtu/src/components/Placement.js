import React from 'react'
import Quotes from './Quotes'
import PlacementBox from './PlacementBox'
import DummyWithoutBox from '../images/dummywithoutbg.png'
let achievement_quote = [{ message: "Turning aspirations into achievements, our members not only dream but also conquer.", color: "text-white", smSize: "sm:text-xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }, { message: "Each placement conquered is a testament to their dedication, resilience,", color: "text-red-400", smSize: "sm:text-xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }, { message: "and the unwavering pursuit of excellence.", color: "text-red-400", smSize: "sm:text-xl", mdSize: "md:text-3xl", lgSize: "lg:text-3xl", xlSize: "xl:text-3xl" }]

export default function Placement() {
    return (
        <div className="event-section flex flex-col justify-center mt-16">
            {/* Quote */}
            <div className="qoutes text-center flex flex-col items-center mx-10 mb-4">
                <Quotes msg={achievement_quote} />
            </div>

            {/* Achievements Wall */}
            <div className="achievement-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 mx-auto mb-10 mt-10">
                <PlacementBox img={DummyWithoutBox} name={"Shresth Jain"} company={"Gameskraft"} position={"SDE"} linkedin={""} companylogo={""} />
                {/* <PlacementBox img={DummyWithoutBox} name={"Siddharth Bihani"} company={"Atlassian"} linkedin={""} companylogo={""} />
                <PlacementBox img={DummyWithoutBox} name={"Vidyanshu Mishra"} company={"Sprinklr"} linkedin={""} companylogo={""} />
                <PlacementBox img={DummyWithoutBox} name={"Shrey Singh"} company={"Metalbook"} linkedin={""} companylogo={""} />
                <PlacementBox img={DummyWithoutBox} name={"Lakshita Singh"} company={"SAP"} linkedin={""} companylogo={""} />
                <PlacementBox img={DummyWithoutBox} name={"Aksht Jain"} company={"Rippling"} linkedin={""} companylogo={""} />
                <PlacementBox img={DummyWithoutBox} name={"Rahul Sharma"} company={"Amazon"} linkedin={"https://www.linkedin.com/in/therahulsharrma/"} companylogo={""} />
                <PlacementBox img={DummyWithoutBox} name={"Kunal Sharma"} company={"Amazon"} linkedin={"https://www.linkedin.com/in/kunal-sharma-469962166/"} companylogo={""} />
                <PlacementBox img={DummyWithoutBox} name={"Vibhor Saxena"} company={"Fractal"} linkedin={"https://www.linkedin.com/in/vibhor-saxena-a847bb130/"} companylogo={""} />
                <PlacementBox img={DummyWithoutBox} name={"Sachin Duhan"} company={"Euler Motors"} linkedin={"https://www.linkedin.com/in/sachin-duhan/"} companylogo={""} /> */}
            </div>
        </div>
    )
}
