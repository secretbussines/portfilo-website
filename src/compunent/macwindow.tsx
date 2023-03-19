import Link from "next/link";

function MacWindow(props: any) {
  return (
    <div className={`border-4 border-blue-900 ${props.windowCol} w-full h-4/6`}>
      {/* mac bar */}
      <div
        className={`border-4 border-blue-700 p-2 flex ${props.barCol} justify-between font-semibold text-xl h-16`}
      >
        {/* mac close window buttons */}
        <div className="flex p-2">
          <div className="bg-red-600 w-7 rounded-full h-7 mr-5"></div>
          <div className="bg-orange-500 w-7 rounded-full h-7 mr-5"></div>
          <div className=" bg-green-600 w-7 rounded-full h-7"></div>
        </div>
        <Link href="/contact" className=" text-2xl">
          Contact
        </Link>
      </div>
      {/* pic area */}
      <div className="flex justify-evenly items-center h-full py-10">
        <div className="">
          <img src="musa.jpg" alt="musa" className="max-h-52 rounded-2xl" />
          <h1 className="text-2xl font-bold">Personalize Theme</h1>
          <div className="flex justify-between p-3">
            <button className="w-10 border-2 border-white h-10 rounded-full bg-white"></button>
            <button className="w-10 border-2 border-white h-10 rounded-full bg-black"></button>
            <button className="w-10 border-2 border-white h-10 rounded-full bg-gray-700"></button>
            <button className="w-10 border-2 border-white h-10 rounded-full bg-slate-900"></button>
          </div>
        </div>
        <div className="bg-neutral-800">
          <div className="max-w-sm relative top-5 left-5 border-2 border-green-600 p-2">
            <h1 className="text-3xl font-extrabold pb-5">What I Do</h1>
            <p className="text-xl font-medium ">
              I am a collage student. And i am a Frontend developr. and I love
              to do Coding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MacWindow;
