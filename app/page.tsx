
import LinkButton from "@/components/LinkButton";
import Image from "next/image";
import Link from "next/link";

import WorkCard from "@/components/WorkCard";

//data
import aboutMeInfo from "@/data/aboutMeHome.json"
import selectedWork from "@/data/selectedWork.json"
import AboutMeCard from "@/components/AboutMeCard";

export default function Home() {


  return (
   <div className="mt-36 md:mt-64 mb-36 md:flex md:justify-center">
      <div className="w-full lg:w-3/4 max-w-6xl md:p-2">

          {/* HERO SECTION */}
          <section className="p-6 md:text-lg flex flex-col items-center md:block">
            <span className="font-bold inline-block text-2xl mb-6">
              <span className="text-darkGray">I`m </span><span className="text-4xl"> Elijah Malabuyo </span>
            </span>
            <p className=" text-darkGray max-w-xl text-center md:text-left">A Software Engineer that helps turns visions into digital realties and provides tangible solutions through technology. I specialize in building modern mobile and web-based applicaitions. </p>
            <div className="flex flex-col md:flex-row mt-2 gap-6 w-full ipadmini:items-center">
                <LinkButton dark={true} label="View my Resume" direct="" resume={true} />
                <LinkButton dark={false} label="Get in touch" direct="/Contact" resume={false}/>
            </div>
          </section>

          {/* SELECTED WORK SECTION */}
          <section className="mt-32 md:mt-48 p-8 ">
              <h1 className="font-extrabold md:text-3xl text-xl">Selected Work</h1>

              <div className="flex flex-col gap-6 mt-6 md:p-8">
                    {selectedWork.map(each => {
                      return (
                          <div key={each.title}>
                            <WorkCard {...each} />
                          </div>
                      )
                    })}
              </div>
          </section>

            {/* GET TO KNOW ME SECTION */}
          <section className="mt-16 p-8 md:p-12">
              <h1 className="font-extrabold md:text-3xl text-xl">Get To Know Me</h1>
                <div className=" ipadmini:grid ipadmini:grid-cols-2 flex flex-col gap-6 mt-4 p-6">
                    {aboutMeInfo.map(each=> {return(
                      <div key={each.title}><AboutMeCard {...each}/></div>
                    )})}
                </div>
          </section>

          {/* LET'S WORK TOGETHER */}
          <section className="mt-2 p-8 md:p-12 flex flex-col ipadmini:flex-row ipadmini:items-center ipadmini:justify-between">
            <div>
            <h1 className="font-extrabold md:text-3xl text-xl">Let`s work together</h1>
            <p className="text-sm text-darkGray">Want to discuss an opportunity to create something great?</p>
            <p className="text-sm text-darkGray">I`m ready when you are.</p>
            </div>

            <div className="mt-8 ipadmini:mt-0">
              <LinkButton dark={true} label="Get in touch -->" direct="/Contact" resume={false}/>
            </div>
          </section>

      </div>
   </div>
  );
}
