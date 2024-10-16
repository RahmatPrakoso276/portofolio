import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Projects() {
  return (
    <section
      className="min-h-screen max-w-7xl mx-auto text-center relative w-full  px-[20px] sm:px-[8%] lg:px-[60px]  py-10 md:py-32"
      id="Projects"
    >
      <h1 className="text-center text-5xl font-semibold mb-12 text-lightest-slate">
        Projects
      </h1>

      {/* Use responsive flex classes */}
      <div className="flex flex-col  gap-8 md:gap-2 xl:flex-row justify-center ">
        <Card
          sx={{ maxWidth: 1000 }}
          className="w-full xl:w-[350px] mx-auto flex flex-col"
        >
          <CardMedia
            sx={{ height: 250 }}
            image="/project/project1.png"
            title="porto website"
          />
          <CardContent
            className="bg-[#0d1d3b] flex-grow"
            sx={{ paddingBottom: 0 }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-lightest-slate"
            >
              Portofolio Website
            </Typography>
            <div className="flex flex-col gap-6">
              <Typography
                variant="body2"
                className="text-lightest-slate text-justify"
                style={{ minHeight: "100px" }} // Fixed height for paragraph
              >
                This project is part of my portfolio aimed at creating a website
                that allows me to showcase my personal information, experiences,
                and the projects I have worked on in an attractive way.{" "}
              </Typography>
              <Typography
                className="text-left text-lightest-slate"
                variant="body2"
              >
                Tech Stack Used :
              </Typography>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128 "
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                height="20"
                width="20"
              >
                <g fill="#61DAFB">
                  <circle cx="64" cy="64" r="11.4" />
                  <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                height="20"
                width="20"
              >
                <path
                  fill="#E44D26"
                  d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                />
                <path
                  fill="#F16529"
                  d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                />
                <path
                  fill="#EBEBEB"
                  d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                />
                <path
                  fill="#fff"
                  d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                height="20"
                width="20"
              >
                <path
                  d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                  fill="#38bdf8"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                height="20"
                width="20"
              >
                <path
                  fill="#1FA6CA"
                  d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6z"
                />
                <path
                  fill="#1C7FB6"
                  d="M48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z"
                />
                <path fill="#1FA6CA" d="M48 77.8v18.4l32 18.4V96.2L48 77.8z" />
                <path
                  fill="#1C7FB6"
                  d="M80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z"
                />
              </svg>
            </div>
          </CardContent>
          <CardActions className="bg-[#0d1d3b] justify-end">
            <Button size="small">View</Button>
          </CardActions>
        </Card>
        <Card
          sx={{ maxWidth: 1000 }}
          className="w-full xl:w-[350px] mx-auto flex flex-col"
        >
          <CardMedia
            sx={{
              height: 250,
              objectFit: "contain", // Menampilkan seluruh gambar tanpa terpotong
              display: "block", // Pastikan gambar diatur sebagai elemen blok
              width: 570,
            }}
            image="/project/project2.png"
            title="CRUD website"
          />
          <CardContent
            className="bg-[#0d1d3b] flex-grow "
            sx={{ paddingBottom: 0 }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-lightest-slate"
            >
              Dashboard Mahasiswa
            </Typography>
            <div className="flex flex-col gap-6">
              <Typography
                variant="body2"
                className="text-lightest-slate text-justify"
                style={{ minHeight: "100px" }} // Fixed height for paragraph
              >
                A website that can perform CRUD operations on two relational
                tables, mahasiswa and prodi. It includes fully functional CRUD
                features, validation, and more, using Laravel as the full-stack
                framework and MySQL for the database.
              </Typography>
              <Typography
                className="text-left text-lightest-slate"
                variant="body2"
              >
                Tech Stack Used :
              </Typography>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <img src="/stack/laravel.svg" alt="Logo" height={20} width={20} />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                height="20"
                width="20"
              >
                <path
                  fill="#E44D26"
                  d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                />
                <path
                  fill="#F16529"
                  d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                />
                <path
                  fill="#EBEBEB"
                  d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                />
                <path
                  fill="#fff"
                  d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                height={20}
                width={20}
              >
                <defs>
                  <linearGradient
                    id="a"
                    x1="76.079"
                    x2="523.48"
                    y1="10.798"
                    y2="365.95"
                    gradientTransform="translate(1.11 14.613) scale(.24566)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#9013fe" />
                    <stop offset="1" stop-color="#6610f2" />
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="193.51"
                    x2="293.51"
                    y1="109.74"
                    y2="278.87"
                    gradientTransform="translate(0 52)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#fff" />
                    <stop offset="1" stop-color="#f1e5fc" />
                  </linearGradient>
                  <filter
                    id="c"
                    width="197"
                    height="249"
                    x="161.9"
                    y="135.46"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="8" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                    <feBlend
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
                <path
                  fill="url(#a)"
                  d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z"
                />
                <path
                  fill="url(#b)"
                  d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z"
                  filter="url(#c)"
                  transform="translate(1.494 2.203) scale(.24566)"
                />
              </svg>
            </div>
          </CardContent>
          <CardActions className="bg-[#0d1d3b] justify-end">
            <Button
              size="small"
              href="https://github.com/RahmatPrakoso276/crud-mhs-dot"
              target="_blank"
            >
              View
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{ maxWidth: 1000 }}
          className="w-full xl:w-[350px] mx-auto flex flex-col"
        >
          <CardMedia
            sx={{ height: 250 }}
            image="/project/project3.png"
            title="porto website"
          />
          <CardContent
            className="bg-[#0d1d3b] flex-grow "
            sx={{ paddingBottom: 0 }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-lightest-slate"
            >
              Todo APP
            </Typography>
            <div className="flex flex-col gap-6">
              <Typography
                variant="body2"
                className="text-lightest-slate text-justify"
                style={{ minHeight: "100px" }} // Fixed height for paragraph
              >
                The Todo List Website allows users to manage tasks with CRUD
                functionality, track completion status done or not done, and
                search tasks easily. Built with Laravel and MySQL, it offers a
                user-friendly interface for efficient task management.
              </Typography>
              <Typography
                className="text-left text-lightest-slate"
                variant="body2"
              >
                Tech Stack Used :
              </Typography>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <img src="/stack/laravel.svg" alt="Logo" height={20} width={20} />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                height="20"
                width="20"
              >
                <path
                  fill="#E44D26"
                  d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                />
                <path
                  fill="#F16529"
                  d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                />
                <path
                  fill="#EBEBEB"
                  d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                />
                <path
                  fill="#fff"
                  d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                height={20}
                width={20}
              >
                <defs>
                  <linearGradient
                    id="a"
                    x1="76.079"
                    x2="523.48"
                    y1="10.798"
                    y2="365.95"
                    gradientTransform="translate(1.11 14.613) scale(.24566)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#9013fe" />
                    <stop offset="1" stop-color="#6610f2" />
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="193.51"
                    x2="293.51"
                    y1="109.74"
                    y2="278.87"
                    gradientTransform="translate(0 52)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#fff" />
                    <stop offset="1" stop-color="#f1e5fc" />
                  </linearGradient>
                  <filter
                    id="c"
                    width="197"
                    height="249"
                    x="161.9"
                    y="135.46"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="8" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                    <feBlend
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
                <path
                  fill="url(#a)"
                  d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z"
                />
                <path
                  fill="url(#b)"
                  d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z"
                  filter="url(#c)"
                  transform="translate(1.494 2.203) scale(.24566)"
                />
              </svg>
            </div>
          </CardContent>
          <CardActions className="bg-[#0d1d3b] justify-end">
            <Button
              size="small"
              href="https://github.com/RahmatPrakoso276/todo-app"
              target="_blank"
            >
              View
            </Button>
          </CardActions>
        </Card>
      </div>
      <p className="text-lightest-slate font-bold text-xl pt-6">
        View more Project on my{" "}
        <a
          href="https://github.com/RahmatPrakoso276"
          target="_blank"
          className="underline"
        >
          Github
        </a>
      </p>
    </section>
  );
}
