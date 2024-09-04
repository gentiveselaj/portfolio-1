export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for building things from scratch.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building News Application for iOS and Android",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-baa",
    des: "E-commerce website with CMS built with Laravel",
    img: "/ebaaa.png",
    iconLists: ["/html.png","css.png","icons8-jquery-30.png","/icons8-javascript-30.svg", "/bootstrap.png", "/icons8-laravel-30.png", "/icons8-php-30.png"],
    link: "https://e-baa.com/new/",
  },
  {
    id: 2,
    title: "Arbresh.info - News",
    des: "A News App built with Ionic Framework for iOS and Android.",
    img: "/arbreshinfomain.png",
    iconLists: ["/ionic.png","/html.png","/angular.png",  "/ts.svg", ],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Burim Zogaj SA ",
    des: "Website design and development for a construction company based in Switzerland",
    img: "/burimzogaj.png",
    iconLists: ["/html.png","css.png","/icons8-javascript-30.svg","icons8-jquery-30.png", "/bootstrap.png","/icons8-php-30.png"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "News Consulting Agency",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/newsconsulting.png",
    iconLists: ["/html.png","css.png","/icons8-javascript-30.svg","icons8-jquery-30.png", "/bootstrap.png"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Genti was a pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. He designed and developed the website for my construction company exactly the way i had in mind. I highly recommend him",
    name: "Burim Zogaj",
    title: "Director @ Burim Zogaj SA",
  },
  {
    quote:
      "As a senior developer, I had the pleasure of working closely with Genti for 4 years, and I highly recommend him to any company seeking top-tier talent. He consistently demonstrated strong technical skills, a proactive approach to problem-solving, and a commitment to delivering high-quality code. Beyond his technical expertise, Genti is a great team player, always willing to collaborate and mentor others. His work ethic and ability to adapt to challenges make him a valuable asset to any development team.",
    name: "Alban Hetemi ",
    title: "Head of Development @ ElkosGroup",
  },
  {
    quote:
<<<<<<< HEAD
      "As a client, I had the privilege of working with Genti on our App for Arbresh.info, and I was thoroughly impressed with his skills and professionalism. He consistently exceeded our expectations, delivering exceptional results on time and with great attention to detail. Genti’s innovative solutions and clear communication made him an invaluable partner. I highly recommend him to any company seeking a talented and reliable developer.",
=======
      "As a client, I had the privilege of working with Genti on our App for Arbresh.info, and I was thoroughly impressed with his skills and professionalism. He consistently exceeded our expectations, delivering exceptional results on time and with great attention to detail. Gentis innovative solutions and clear communication made him an invaluable partner. I highly recommend him to any company seeking a talented and reliable developer.",
>>>>>>> ec4fa95969ac45f0e61d33ec8d1e6d73f280a837
    name: "Bleriant Syla  ",
    title: "Project Coordinator @ Arbresh.info",
  }
  
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    desc: "Assisted in the development of websites for companies under the umbrella of Elkos Group .",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev ",
    desc: "Designed and developed a news mobile app for both iOS & Android platforms using Ionic Framework.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Projects",
    desc: "Designed and developed several websites for various clients, enhancing their online presence",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead  Developer",
    desc: "Overseeing technical development, guiding the development team, and ensuring project success through code quality, innovation, and alignment with company goals",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/gentiveselaj/"
  },

  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/genti-veselaj-404b61172/"
  },
];
