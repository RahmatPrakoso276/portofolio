import CodeOffIcon from "@mui/icons-material/CodeOff";

export default function Experience() {
  return (
    <section
      className="min-h-screen max-w-7xl mx-auto text-center relative w-full  px-[20px] sm:px-[8%] lg:px-[60px]  py-2 md:py-32"
      id="Experience"
    >
      <h1 className="text-center text-5xl font-semibold mb-12 text-lightest-slate">
        Experience
      </h1>
      <div className="grid grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] gap-8 ">
        <div className="flex flex-col relative items-start  cursor-pointer transition-[0.3s] duration-[ease-in-out] p-8 xl:p-14 rounded-[3rem] border-2 border-solid border-lightest-slate hover:bg-lightest-slate text-lightest-slate hover:text-[black] hover:scale-[1.02]">
          <CodeOffIcon fontSize="large" className="absolute right-[30px] " />

          <span className=" text-2xl">Frontend Development</span>
          <h2 className="text-xl">1 Years</h2>
          <p className="text-justify pt-2">
            I use HTML, CSS, and JavaScript, along with frameworks like Laravel
            and React, to create responsive, dynamic, and interactive user
            interfaces. To facilitate the development of reusable UI components,
            I am also proficient in using existing UI libraries such as Shadcn
            UI and Material UI. During my studies, I was supported by coursework
            in web programming.
          </p>
        </div>
        <div className="flex flex-col relative items-start  cursor-pointer transition-[0.3s] duration-[ease-in-out] p-8 xl:p-14 rounded-[3rem] border-2 border-solid border-lightest-slate hover:bg-lightest-slate text-lightest-slate hover:text-[black] hover:scale-[1.02]">
          <CodeOffIcon fontSize="large" className="absolute right-[30px] " />

          <span className=" text-2xl">Backend Development</span>
          <h2 className="text-xl">1 Years</h2>
          <p className="text-justify pt-2">
            I have designed and implemented server-side applications using
            technologies such as Laravel and Node.js. My focus on creating
            efficient APIs and optimizing database interactions has enhanced
            application performance and user experience. My studies included
            database courses, where I learned about MySQL and other database
            systems.
          </p>
        </div>
        <div className="flex flex-col relative items-start  cursor-pointer transition-[0.3s] duration-[ease-in-out] p-8 xl:p-14 rounded-[3rem] border-2 border-solid border-lightest-slate hover:bg-lightest-slate text-lightest-slate hover:text-[black] hover:scale-[1.02]">
          <CodeOffIcon fontSize="large" className="absolute right-[30px] " />

          <span className=" text-2xl">Machine Learning</span>
          <h2 className="text-xl">1.5 Years</h2>
          <p className="text-justify pt-2">
            I have studied machine learning, focusing on algorithms and their
            applications. I gained hands-on experience with libraries like
            Scikit-learn and TensorFlow, particularly in building classification
            and prediction models. Additionally, I have published a national
            journal on this topic in SINTA 2, showcasing my research and
            developed a search engine utilizing cosine similarity for effective
            information retrieval. .
          </p>
        </div>
        <div className="flex flex-col relative items-start  cursor-pointer transition-[0.3s] duration-[ease-in-out] p-8 xl:p-14 rounded-[3rem] border-2 border-solid border-lightest-slate hover:bg-lightest-slate text-lightest-slate hover:text-[black] hover:scale-[1.02]">
          <CodeOffIcon fontSize="large" className="absolute right-[30px] " />

          <span className=" text-2xl">Mobile Development</span>
          <h2 className="text-xl">6 Months</h2>
          <p className="text-justify pt-2">
            I have experience in mobile development using Flutter, supported by
            coursework in mobile programming. I developed a full-stack project
            utilizing Firebase, incorporating features like push notifications
            for enhanced user engagement. Leveraging my machine learning
            knowledge, I integrated a classification model into a mobile
            application for skin disease detection.
          </p>
        </div>
      </div>
    </section>
  );
}
