let info = {
  name: "Wassim Mriri",
  logo_name: "mriri",
  flat_picture: require("./src/assets/potrait.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    " I'm a Full-Stack Developer. Actually, I have a Bachelor's degree (BAC+3) in IT from the Higher Institute of Technology Studies in Nabeul. IT is not only my professional background, it is also and above all a passion that has grown since I was 14 years old.<br><br>I am a detail oriented person and I keep my goals and tasks organized to maintain productivity. I would bring to table a wide range of software skills, ranging from design and development to writing scripts for intelligent agents. I believe that the skills that I have attained from the dynamic environment and competitive university life define me, and I am looking forward to implementing and polishing them in any opportunity that I receive. ",
  links: {
    linkedin: "https://www.linkedin.com/in/wassim-mriri/",
    github: "https://github.com/mririi",
    resume:
      "https://github.com/mririi/Portfolio-Wassim-Mriri"
  },
  education: [
    {
      name: "Higher Institute of Technology Studies",
      place: "Nabeul",
      date: "Aug, 2019 - May, 2022",
      degree: "Licence in Computer Technology",
      description:
        "Graduated after 3 years of hard work and commitment. I have learned alot of usefull skills from my studies and internships during the three years",
      skills: [
        "Java",
        "Symfony",
        "Android Native",
        "Flutter",
        "Mongo DB",
        ,
        "UX Design"
      ]
    },
    {
      name: "Highschool Dar Chabenne el Fehri",
      place: "Nabeul",
      date: "Aug, 2018 - July, 2019",
      degree: "Bachelors in Computer Science",
      gpa: "13.68/20",
      description:
        "Got my bachelors in Computer Science from Highschool Dar Chabenne el Fehri, Nabeul and loved programming even more.",
      skills: [
        "HTML",
        "CSS",
        "MYSQL",
        "PHP",
        "Network",
        "Maths",
        "Algorithms"
      ]
    }
  ],
  experience: [
    {
      name: "MAISON DU WEB",
      place: "Dar Chabenne, Nabeul",
      date: "Dec, 2021 - Jun, 2022",
      position: "Full Stack Developer",
      description:
        "Worked as a Software Developer, building a plateform of question responses on cars.",
      skills: ["VueJs", "Django", "Postgres", "Python", "Javascript","SCRUM"]
    },
    {
      name: "AFTER CODE",
      place: "Dar Chabenne, Nabeul",
      date: "Jun, 2021 - Sept, 2021",
      position: "Full Stack Web Developer",
      description:
        "Worked as a full stack web developer, building a website for medicale center that help them manage their data",
      skills: ["MongoDB", "Django", "VueJS"]
    },
    {
      name: "AIESEC Nabel",
      place: "Tunisia",
      date: "May, 2018 - Jun, 2018",
      position: "Team Leader",
      description:
        "This was a great experience managing a team in a non-government organization. Making international relations and self development",
      skills: ["Self Development", "Team management", "Time management", "Stress management", "Team work", "Help others", "Public Communications"]
    },
  ],
  skills: [
    {
      title: "languages",
      info: [
        "Python",
        "Javascript",
        "PHP",
        "Java",
        "C",
        "C#",
        "SQL",
        "NoSQL",
        "Flutter"
      ],
      icon: "fa fa-code"
    },
    {
      title: "data frameworks",
      info: [
        "Hadoop",
        "Pillow"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["React JS", "React Native","Vue JS","Laravel", "Angular","Spring Boot", "Django", "Node"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["MongoDB", "MySQL", "OracleSQL", "PostgresDB"],
      icon: "fa fa-database"
    },
    {
      title: "Tools",
      info: [
        "Android",
        "Agile",
        "Scrum",
        "JIRA",
        "Heroku",
        "Firebase",
        "Cloudinary"
      ],
      icon: "fas fa-tools"
    },
    {
      title: "design",
      info: ["Canva", "XD", "Figma"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [
    {
      name: "Car Geeks",
      pictures: [
        {
          img: require("./src/assets/portfolio/msr/one.png")
        },
        {
          img: require("./src/assets/portfolio/msr/two.png")
        },
      ],
      technologies: ["PostgresDB", "BootstrapVue", "Django", "Vue JS"],
      category: "Programming",
      date: "Jan, 2022 - Mar, 2022",
      github:
        "https://github.com/mririi",
      visit: "https://cargeeksjs.herokuapp.com/",
      description:
        "Collection of question and replies for cars, with alot of features like a place for posting services, a place for entreprises, a place for groups to grow the community and also we have a chat for users to talk to each other."
    },
    {
      name: "Comming Soon..",
      pictures: [

      ],
      technologies: ["Node", "Angular", "Express", "MySQL", "Facebook API"],
      category: "Web App",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "Sep, 2017 - Nov, 2017",
      visit: "https://github.com/hrishikeshpaul/clumpr",
      description:
        'Clumpr is an online social event planning assistant that - using information about similar events happening in similar locations around the same time, friends who frequently attend the same events, and mutual friends - helps users to collaborate, combine, and attend events together, effectively "clumping" people and activities in a way that makes intuitive sense.'
    },
    {
      name: "Nutricare",
      pictures: [
        
      ],
      technologies: ["Node", "Angular", "Express", "MongDB", "Medical"],
      category: "Website",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "May, 2017 - Aug, 2017",
      visit: "https://angel.co/projects/576300-nutricare",
      description:
        "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc)."
    }
  ],
};

export default info;
