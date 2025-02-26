export default function Contact() {
  const email = "kevincaballero@outlook.com"
  const contactBlurb = "Hey and thanks for visiting! I’m a Fullstack Developer who is passionate about creating refined digital solutions. I hope you enjoyed scrolling through my site; I created it not only to showcase my experience, but also to demonstrate a little bit my capabilities. If you have a position available that you think would be a good fit, or would just like to swap coffee recommendations, send an email."
  return (
    <div className="min-h-screen min-w-screen flex justify-betwen items-center">
      <div className="2xl:flex justify-center max-w-[100rem] w-4/5 mx-auto items-center">
        {/* insert image in div below  */}
        <div className="2xl:w-2/5"></div>
        <div className="2xl:w-3/5 justify-center">
          <p className="text-xl flex mb-4">{contactBlurb}</p>
          <a 
            className="text-3xl font-bold uLine"
            href="mailto:kevincaballero@outlook.com"
            target="_blank"
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}