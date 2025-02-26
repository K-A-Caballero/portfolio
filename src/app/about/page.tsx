export default function About() {
  const aboutMe = "Accomplished Full Stack Software Engineer with proven experience architecting and developing complex, scalable web applications using proficiency in a wide range of technologies, including React, Node.js, HTML, and SQL. Demonstrated expertise in optimizing system performance, integrating interactive UI elements, and streamlining development workflows to improve user experiences.";
  return (
    <div className="min-h-screen min-w-screen flex justify-betwen items-center">
      <div className="2xl:flex justify-center max-w-[100rem] w-4/5 mx-auto items-center">
        <h3 className="text-4xl font-bold flex whitespace-nowrap mb-4 2xl:mb-0 2xl:text-6xl 2xl:w-1/2">Full Stack Developer</h3>
        <p className="text-xl flex 2xl:w-1/2">{aboutMe}</p>
      </div>
    </div>
  );
}