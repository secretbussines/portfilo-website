import Project from "./project";
function MainPageProjects() {
  return (
    <div>
      <Project
        imageLink="meetup.png"
        link="#"
        projectTitle="Meetup Website"
        projectDescription="A dummy website for meetup"
      />
      <Project
        imageLink="pig-game.png"
        link="https://pig-game-v2.netlify.app/"
        projectTitle="Pig Game"
        projectDescription="I build this game for learing javascipt"
      />
      <Project
        imageLink="meetup.png"
        link="#"
        projectTitle="Meetup Management System"
        projectDescription="Designed bulid & mantained the Meeting Management system"
      />
    </div>
  );
}
function Projects() {
  return (
    <section className="flex flex-col items-center pb-10 bg-slate-900">
      <div className="flex flex-wrap justify-center items-center">
        <MainPageProjects />
        <Project
          imageLink="meetup.png"
          link="#"
          projectTitle="Meetup Management System"
          projectDescription="Designed bulid & mantained the Meeting Management system"
        />
        <Project
          imageLink="meetup.png"
          link="#"
          projectTitle="Meetup Management System"
          projectDescription="Designed bulid & mantained the Meeting Management system"
        />
      </div>
    </section>
  );
}

export { MainPageProjects };
export default Projects;
