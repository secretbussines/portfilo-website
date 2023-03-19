import Projects from "@/compunent/projects";
import Skills from "@/compunent/skills";
import NavBar from "@/compunent/navbar";
function PastWork() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col bg-gray-900">
        <h1 className="text-2xl font-bold text-center my-10">
          Here is some of my past projects
        </h1>
        <div className="border-2 border-sky-900 rounded pt-5">
          <Projects />
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-2xl font-bold p-5">
            Some of the technologies I used in these projects
          </h1>
          <div className="w-1/2 ">
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
}

export default PastWork;
