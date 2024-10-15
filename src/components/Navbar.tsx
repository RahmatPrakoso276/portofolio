import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Navbar() {
  let Links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#About" },
    { name: "Experience", link: "#Experience" },
    { name: "Projects", link: "#Projects" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <nav className="fixed max-w-7xl mx-auto bg-navy-dark flex items-center py-[0.5rem] top-0 left-0 right-0 sm:px-[60px] lg:px-0  z-[1000] ">
      <a
        href=""
        className="hidden xl:block text-nowrap text-xl font-[700] text-lightest-slate hover:text-green-bright"
      >
        Rahmat Prakoso
      </a>

      <div className="flex justify-between w-full items-center px-[1.5rem] pb-3 xl:pb-0">
        <i
          onClick={() => setOpen(!open)}
          className="text-3xl md:text-5xl self-end right-8 ml-auto bg-navy-dark top-6 cursor-pointer xl:hidden"
        >
          <MenuIcon
            name={open ? "close" : "menu"}
            className=" border-2 border-lightest-slate text-lightest-slate hover:text-green-bright"
          />
        </i>
        <div className="text-lightest-slate font-[700] text-nowrap">
          <ul
            className={`flex flex-col xl:justify-center xl:text-center xl:flex-row  xl:pb-0 pb-1 absolute xl:static bg-navy-dark xl:z-auto z-[1000] left-0 w-full xl:w-auto xl:pl-0 pl-6  sm:pl-10 transition-all duration-500 ease-in ${
              open ? "top-16" : "top-[-450px]"
            }`}
          >
            {Links.map((Link) => (
              <li className="my-7 text-xl md:text-2xl xl:text-base md:my-10 xl:my-0 xl:px-2">
                <a href={Link.link} className="hover:text-green-bright">
                  {Link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden xl:flex gap-4 p-[0.5rem]">
          <a
            className="hidden xl:block cursor-pointer"
            href="mailto:prakosorahmat24@gmail.com"
            target="_blank"
            data-rb-even
          >
            <MailIcon className="text-lightest-slate hover:text-green-bright" />
          </a>
          <a
            className="hidden xl:block cursor-pointer"
            href="https://github.com/RahmatPrakoso276"
            target="_blank"
          >
            <GitHubIcon className="text-lightest-slate hover:text-green-bright" />
          </a>
          <a
            className="hidden xl:block cursor-pointer"
            href="https://www.linkedin.com/in/rahmat-prakoso/"
            target="_blank"
          >
            <LinkedInIcon className="text-lightest-slate hover:text-green-bright" />
          </a>
          <a
            className="hidden xl:block cursor-pointer"
            href="https://ejournal.undiksha.ac.id/index.php/janapati/article/view/75643"
            target="_blank"
          >
            <ArticleIcon className="text-lightest-slate hover:text-green-bright" />
          </a>
        </div>
      </div>
    </nav>
  );
}
