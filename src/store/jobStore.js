import { create } from "zustand";
const useJobStore = create((set, get) => ({
  //   bears: 0,
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
  jobs: [],
  loading: false,
  error: null,

  fetchJobs: () => {
    set({ loading: true });

    setTimeout(() => {
      set({
        loading: false,
        jobs: [
          {
            id: "1",
            title: "Frontend Developer",
            company: "Tech Corp India",
            location: "Bangalore,Karnataka",
            salary: "10-15LPA",
            description:
              "We are urgently looking for a skilled Frontend Developer to join our dynamic team. You will be responsible for building modern, responsive, and high-performance web interfaces using React, Tailwind CSS, and other cutting-edge technologies. Ideal candidates should have strong fundamentals in HTML, CSS, and JavaScript, and a passion for building seamless user experiences. The role offers a fast-paced work environment with significant growth potential. You'll work closely with the design and backend teams to bring mockups to life and ensure cross-browser compatibility.",
            skills: ["HTML", "CSS", "React", "Javascript", "Tailwind CSS"],
            createdAt: new Date("2025-06-21").toLocaleDateString(),
          },
          {
            id: "2",
            title: "Full Stack Developer",
            company: "Brain Mentor",
            location: "Ghaziabad,UP",
            salary: "12-16LPA",
            description:
              "We are seeking an experienced Full Stack Developer to take ownership of web application development, from concept to deployment. The ideal candidate is proficient in both frontend and backend technologies including React, Node.js, MongoDB, and AWS. You will collaborate with product teams, write scalable and maintainable code, implement best DevOps practices, and be actively involved in architecture discussions. Prior experience with RESTful APIs, CI/CD pipelines, and agile methodology will be highly valuable in this position.",
            skills: ["Node.js", "React", "Javascript", "MongoDB", "AWS"],
            createdAt: new Date("2025-06-22").toLocaleDateString(),
          },
          {
            id: "3",
            title: "Data Analyst",
            company: "InsightSphere Analytics",
            location: "Hyderabad, Telangana",
            salary: "50K",
            description:
              "As a Data Analyst at ABC Corp., you will transform raw data into meaningful insights that drive business decisions. Your primary responsibilities will include analyzing large datasets, creating dashboards, and building reports using data visualization tools. A strong grasp of Excel, SQL, and statistical techniques is essential. You'll work cross-functionally with teams to track KPIs and recommend improvements. This is a great opportunity for analytical minds looking to make an impact through data storytelling and operational excellence.",
            skills: ["HTML", "CSS"],
            createdAt: new Date("2025-06-24").toLocaleString(),
          },
          {
            id: "4",
            title: "Data Analyst",
            company: "QuantEdge Analytics",
            location: "Pune, Maharashtra",
            salary: "6-10 LPA",
            description:
              "QuantEdge Analytics is seeking a sharp and curious Data Analyst to join our analytics division. In this role, you’ll analyze complex datasets to generate insights that drive strategic business decisions. You’ll work closely with product, marketing, and finance teams to build dashboards, automate reports, and present actionable insights. Proficiency in SQL, Excel, and data visualization tools such as Tableau or Power BI is essential. If you're passionate about turning raw data into meaningful stories, this role is perfect for you.",
            skills: ["SQL", "Excel", "Power BI", "Python", "Tableau"],
            createdAt: new Date("2025-06-24").toLocaleDateString(),
          },
          {
            id: "5",
            title: "Backend Developer",
            company: "CodeNova Labs",
            location: "Chennai, Tamil Nadu",
            salary: "9-13 LPA",
            description:
              "CodeNova Labs is looking for an experienced Backend Developer to join our fast-growing product engineering team. You will be designing robust and scalable backend architectures using Node.js and PostgreSQL. Familiarity with containerization (Docker), CI/CD pipelines, and microservice patterns is highly desirable. As part of a lean and highly skilled team, you will have direct influence over architecture decisions and product strategy. Join us if you enjoy solving challenging problems and writing clean, maintainable code.",
            skills: ["Node.js", "PostgreSQL", "Docker", "CI/CD", "REST API"],
            createdAt: new Date("2025-06-25").toLocaleDateString(),
          },
          {
            id: "6",
            title: "Backend Engineer",
            company: "Nimbus CloudWorks",
            location: "Hyderabad, Telangana",
            salary: "11–14 LPA",
            description:
              "Nimbus CloudWorks is hiring a Backend Engineer to architect and develop robust server-side applications and APIs. You will work primarily with Node.js and Express, interacting with databases such as PostgreSQL and MongoDB. The ideal candidate is comfortable writing scalable microservices, implementing authentication flows, and ensuring API security and performance. Experience with Docker, RESTful APIs, and cloud infrastructure (AWS/GCP) is preferred. Join a cloud-first company that's shaping the next generation of SaaS platforms.",
            skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Docker"],
            createdAt: new Date("2025-06-25").toLocaleDateString(),
          },
          {
            id: "7",
            title: "DevOps Engineer",
            company: "OpsBridge Solutions",
            location: "Chennai, Tamil Nadu",
            salary: "13–17 LPA",
            description:
              "We are looking for a DevOps Engineer to join OpsBridge Solutions and streamline our CI/CD pipelines, infrastructure management, and deployment workflows. You’ll work with Docker, Kubernetes, Jenkins, and Terraform to ensure reliable and scalable environments. A strong understanding of Linux systems, cloud platforms (AWS/Azure), and automation scripting (Bash, Python) is essential. If you're passionate about infrastructure as code and systems observability, this is the right role for you.",
            skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS"],
            createdAt: new Date("2025-06-27").toLocaleDateString(),
          },
          {
            id: "8",
            title: "Product Manager",
            company: "NextLeap Innovations",
            location: "Gurugram, Haryana",
            salary: "18–24 LPA",
            description:
              "NextLeap Innovations is seeking a Product Manager to lead the development of customer-centric digital solutions. You will define product strategy, gather requirements, and work closely with engineering, design, and marketing teams to deliver high-impact features. Strong analytical thinking, stakeholder communication, and experience with Agile/Scrum practices are key. Familiarity with tools like JIRA, Figma, and product analytics (Mixpanel, GA) is expected. If you thrive at the intersection of tech, design, and business, apply now.",
            skills: ["Product Strategy", "Agile", "JIRA", "Figma", "Analytics"],
            createdAt: new Date("2025-06-28").toLocaleDateString(),
          },
        ],
      });
    }, 1000);
  },
  addJob: (job) => {
    const newJob = {
      ...job,
      id: Date.now().toString(),
      createdAt: new Date().toLocaleDateString(),
    };
  },

  getJobById: (id) => {
    return get().jobs.find((job) => {
      return job.id === id;
    });
  },
}));
export default useJobStore;
