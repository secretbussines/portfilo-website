import Image from "next/image";
import "@/app/globals.css";
import MacWindow from "@/compunent/macwindow";
import NavBar from "@/compunent/navbar";
import Skills from "@/compunent/skills";
import Link from "next/link";
import { MainPageProjects } from "@/compunent/projects";
export default function Home() {
  return (
    <main className="bg-slate-900 h-full">
      <NavBar />
      {/* hole thing with pic and mac window and slam */}
      <section className="flex flex-col items-center bg-slate-900 mx-36">
        <h1 className="font-bold text-4xl p-8 bg-slate-900">
          Aslam O Alikum, I am Musa Akbar
        </h1>
        {/* mac windowo */}
        <MacWindow windowCol="bg-teal-800" barCol="bg-cyan-900" />
      </section>
      {/* more about me section */}
      <section className="border-y-2 border-lime-700 flex justify-evenly items-center p-8">
        <div className="max-w-2xl pr-5">
          <h1 className="text-4xl font-extrabold pb-8">More About me</h1>
          <p className="text-lg font-semibold tracking-wider pb-5">
            I build new projects just to tickle my brain and love teaching other
            how they are made.
          </p>
          <p className="text-lg font-semibold tracking-wider pb-5">
            While I keep busy teaching courses, I still take interviews in
            search of a great team & projects that interest me.
          </p>
          <div className="w-full border-2 border-white mb-5"></div>
          <h1 className="text-3xl font-bold pb-8">TOP EXPERTISE</h1>
          <p className="text-lg font-semibold tracking-wider pb-5">
            Fullstack developer with primar focus on Django + React:
          </p>
          {/* skill area */}
          <Skills />
        </div>
        <div className="flex flex-col items-center">
          <Image src={"meetup.png"} alt={"meetup"} className="max-w-xl"></Image>
          {/* <img src="meetup.png" alt="meetup" className="" /> */}
          <h1 className="text-xl font-bold p-4">Find me on social media</h1>
          <div>
            <Link
              className="text-sky-500"
              href={"https://twitter.com/Musa7917"}
              target="_blank"
              rel="noreferrer"
            >
              @Musa7917
            </Link>
          </div>
        </div>
      </section>
      {/* past projects section */}
      <section>
        <h1 className="text-4xl font-bold p-8 text-center">
          Some of my past projects
        </h1>
        <div className="flex flex-wrap justify-center items-center">
          <MainPageProjects />
        </div>
      </section>
    </main>
  );
}
