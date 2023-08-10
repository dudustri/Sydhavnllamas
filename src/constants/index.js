import {
    energyalternative,
    backend,
    devops,
    renewableenergy,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    bodil,
    vitta,
    numerous,
    petinelli,
    novus,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];


const titleIntro = [
    "Overview .",
    "Backend Developer ☕",
    "Energy Engineer ⚡",
    "Green Transition Enthusiast 🌊",
    "Cloud and Devops ☁️",
];

const presentationText = [
    "A passionate Backend Developer and Energy Engineer, currently pursuing \
an MSc in Software Design at ITU  of Copenhagen. With a keen interest in exploring the \
intricacies of new technologies, I immerse myself in the vibrant world \
of software and hardware development. I aspire to uncover the \
synergy between technology and sustainability, discovering how these two \
forces can work hand in hand always looking from the efficiency perspective.",

    "As a Backend Developer, I thrive on crafting the unseen backbone of \
applications, ensuring seamless data management and optimal performance. \
My passion lies in learning and applying such as designing robust server-side \
architectures, meticulously handling databases, and building efficient APIs. \
Embracing the ever-evolving landscape of programming languages and frameworks, \
I am committed to delivering high-quality, scalable, and secure solutions that \
empower the frontend to shine✨",

    "As an Energy Engineer by background, I am driven by the goal of \
promoting sustainable energy practices and reducing the carbon footprint \
of modern technology. My expertise lies in designing and simulating energy-efficient \
systems, optimizing energy usage, and exploring renewable energy \
sources. I firmly believe in the transformative power of eco-conscious engineering, \
and I am dedicated to shaping a greener future through innovation, leveraging software \
tools as key allies in this endeavor.",

    "As a fervent Green Transition Enthusiast, I am deeply committed to \
advocating for environmental sustainability in every aspect of life. \
From personal habits to professional endeavors, I consistently strive to \
make eco-friendly choices and inspire others to do the same. Embracing \
the philosophy of sustainable living, I actively support and participate \
in initiatives that foster a harmonious coexistence with nature, \
acknowledging our responsibility to protect and preserve the planet for \
future generations.",

    "Fascinated by the dynamic \
world of Cloud Computing and DevOps, I am drawn to the transformative \
power of cloud technologies in modernizing software development and \
streamlining operations. I aspire one day to design and orchestrate continuous \
deployment, and automated workflows, harnessing \
the potential of cloud platforms to create agile, scalable, and reliable solutions \
as efficiently as possible. My goal is to start a project to enhance \
energy efficiency in data centers.",
];



const cardTitles = [
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Energy Engineer",
        icon: energyalternative,
    },
    {
        title: "Green Transition Enthusiast",
        icon: renewableenergy,
    },
    {
        title: "Cloud Computing & DevOps",
        icon: devops,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Backend Developer",
        companyName: "Numerous",
        icon: numerous,
        iconBg: "#E6DEDD",
        date: "February 2023 - Present",
        description: [
            "GraphQL API implementation using strawberry",
            "gRPC API implementation using protocol buffers",
            "Unit and integration tests for features implemented using test driven development",
            "Features implemented approaching the Numerous Cloud Services",
            "Google Cloud Platform utilities and log inspection"
        ],
    },
    {
        title: "Systems Engineer",
        companyName: "Bodil Energy",
        icon: bodil,
        iconBg: "#383E56",
        date: "December 2022 - Present",
        description: [
            "Development of an aggregator module to handle and process data from external sources as well as data read from devices.",
            "Digital twin.",
            "Unit tests",
            "Node.js and python"
        ],
    },
    {
        title: "Software Developer",
        companyName: "NOVUS Automation",
        icon: novus,
        iconBg: "#E6DEDD",
        date: "March 2022 - March 2023",
        description: [
            "Development and maintenance of configuration and monitoring of the company's software products for desktop/web and mobile using C++, Java, and Dart/Flutter.",
            "API tests using JavaScript and Postman. Scrum methodology application and software version control using Git/Gitlab and Sourcetree.",
            "MQTT and LoRaWAN applications (IoT).",
        ],
    },
    {
        title: "Simulation Engineer",
        companyName: "Vitta Residencial",
        icon: vitta,
        iconBg: "#383E56",
        date: "February 2021 - March 2022",
        description: [
            "Computational simulation head's engineer and in charge of the internal methodology development to measure the building's thermal, and lighting performance.",
        ],
    },
    {
        title: "Energy Engineer",
        companyName: "Petinelli",
        icon: petinelli,
        iconBg: "#E6DEDD",
        date: "July 2019 - December 2020",
        description: [
            "Design review: HVAC, electrical, automation, photovoltaic, and lighting systems.",
            "Thermal and energy building performance analysis.",
            "Computational simulations. Technical and economical diagnosis of energy efficiency measures.",
            "Building commissioning process.",
        ],
    },
    {
        title: "Intern",
        companyName: "Petinelli",
        icon: petinelli,
        iconBg: "#E6DEDD",
        date: "June 2017 - June 2019",
        description: [
            "LEED certification process and energy conservation measures application based on design reviews.",
            "Renewable energy systems design. Technical and economic feasibility reports.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { cardTitles, titleIntro, presentationText, technologies, experiences, testimonials, projects };