
import LinkButton from "@/components/LinkButton";
import Image from "next/image";
import Link from "next/link";
import selectedWork from "@/data/selectedWork.json"
import WorkCard from "@/components/WorkCard";
export default function Home() {


  return (
   <div className=" mt-36 md:mt-64 mb-36  md:flex md:justify-center">
      <div className="md:w-3/4 md:max-w-6xl md:p-2">

          {/* HERO SECTION */}
          <section className="p-6 md:text-lg ">
            <span className="font-bold inline-block md:text-5xl text-3xl mb-6"><span className="text-darkGray">I`m </span><span> Elijah Malabuyo </span></span>
            <p className=" text-darkGray max-w-xl">A Software Engineer that helps turns visions into digital realties and provides tangible solutions through technology. I specialize in building modern mobile and web-based applicaitions. </p>
            <div className="flex flex-col md:flex-row mt-2 gap-6">
                <LinkButton dark={true} label="View my Resume" direct="" resume={true} />
                <LinkButton dark={false} label="Get in touch" direct="/Contact" resume={false}/>
            </div>
          </section>

          {/* SELECTED WORK SECTION */}
          <section className="mt-32 md:mt-36 p-4">
              <h1 className="font-extrabold md:text-3xl text-xl">Selected Work</h1>

              <div className="flex flex-col gap-6 mt-6">
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
          <section>

          </section>

      </div>
   </div>
  );
}
