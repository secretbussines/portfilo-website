import Image from "next/image";
function Project(props: any) {
  return (
    <a
      href={props.link}
      rel="noreferrer"
      target="_blank"
      className="flex flex-col m-2"
    >
      <Image
        src={props.imageLink}
        alt={"image of link"}
        className="w-96 rounded"
      ></Image>
      {/* <img src={props.imageLink} alt="" className="w-96 rounded" /> */}
      <div className="bg-white p-4 shadow-sm shadow-black rounded-md">
        <h1 className="text-black text-xl font-bold">{props.projectTitle}</h1>
        <p className="text-black font-semibold w-80">
          {props.projectDescription}
        </p>
      </div>
    </a>
  );
}

export default Project;
