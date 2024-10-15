import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Intro() {
  return (
    <section className="min-h-screen max-w-7xl mx-auto flex items-center justify-center sm:px-[60px] lg:px-0 py-32" id="home">
      <div className="flex flex-col text-nowrap text-center justify-center gap-[1.5rem]">
        <div className="flex flex-col gap-[1.5rem]">
          <h3 className="text-lightest-slate font-[500] text-[1.5rem] md:text-[1.6rem] m-0 leading-none">
            Hi, it's Me
          </h3>
          <h1 className="text-lightest-slate font-[600] text-[3rem] md:text-[4rem] m-0 leading-none">
            Rahmat Prakoso
          </h1>
          <span className=" text-green-bright text-[1.6rem] md:text-[2rem] leading-none">
            Fullstack Developer
          </span>
        </div>
        <a
          href="https://drive.google.com/file/d/1z-hmDfWoArn7liayXELxlbzA215_h-Ks/view?usp=sharing"
          target="_blank"
          className="flex  gap-2 text-lightest-slate border-[2px] border-lightest-slate cursor-pointer font-[600] transition duration-400 ease-in-out px-6 py-2 rounded-[3rem] hover:bg-lightest-slate hover:text-[black] self-center"
        >
          Download CV
          <KeyboardArrowRightIcon />
        </a>
      </div>
    </section>
  );
}
