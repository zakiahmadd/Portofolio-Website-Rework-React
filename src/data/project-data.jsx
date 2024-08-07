import project1 from "../assets/Project1.jpg";
import project2 from "../assets/Keeper Project.jpg";
import project4 from "../assets/Project4.png";
import project5 from "../assets/Project5.png";
import project6 from "../assets/Project6.png";
import project7 from "../assets/Project7.png";

const projectData = [
  {
    title: "Portofolio Website Project",
    year: "2024",
    tags: "HTML, CSS, JavaScript, PostgreSQL",
    description:
      "First ever Web Development Project. The website where i'm gonna put all my Software Development progress. This website will continue to be updated.",
    imgSrc: project1,
    more: false,
    link: "",
  },
  {
    title:
      "Data Science Project: Using ANN for Predicting the Price of a New Insured",
    year: "2024",
    tags: "Python, Data Science, NumPy, Pandas, Tensorflow",
    description:
      "Applied foundational principles of statistics and data science. Complete with data visualization using charts",
    imgSrc: project6,
    more: true,
    link: "https://github.com/zakiahmadd/Data-Science-ANN-Project",
  },
  {
    title: "Keeper App Clone",
    year: "2024",
    tags: "React.js, JavaScript, HTML, CSS, PostgreSQL",
    description:
      "This is a Keeper App clone. You can post your notes in this app. Caution when using because the app is yet to connect to database!",
    imgSrc: project2,
    more: true,
    link: "https://zakiahmadd.github.io/Keeper-App-Project/",
  },
  {
    title: "Portofolio Website Project Rework (Work In Progress)",
    year: "2024",
    tags: "React.js, JavaScript, HTML, CSS, Express, Node.js",
    description:
      "The website where i'm gonna put all my Software Development progress. This website will continue to be updated. This website is a rework of the previous Portofolio Website using React",
    imgSrc: project1,
    more: false,
    link: "",
  },
  {
    title: "Fullstack API Blog Project",
    year: "2024",
    tags: "RESTful API, Backend, CSS, Express, Node.js",
    description:
      "Creating a blog API Project complete with frontend and backend server and also the API server. Not yet connected to database",
    imgSrc: project4,
    more: true,
    link: "https://github.com/zakiahmadd/Fullstack-API-Blog-Project",
  },
  {
    title:
      "Actuarial Science Paper Publication: Estimating Benefit Reserve from Life Insurance Product",
    year: "2024",
    tags: "Paper Publication, Python, Actuarial Science, NumPy, Pandas",
    description:
      "Applied foundational principles of statistics and actuarial science, utilizing the prospective method of Benefit Reserve Estimation",
    imgSrc: project7,
    more: true,
    link: "https://prosidingsnsa.statistics.unpad.ac.id/?journal=prosidingsnsa&page=article&op=view&path%5B%5D=396",
  },
  {
    title:
      "Data Science Paper Publication: House Price Clustering using K-Means and Linear Regression",
    year: "2024",
    tags: "Paper Publication, Python, Data Science, NumPy, Pandas",
    description:
      "Applied foundational principles of statistics and data science. Integrated clustering algorithms to categorize housing data based on price and land area into distinct groups",
    imgSrc: project5,
    more: true,
    link: "https://prosidingsnsa.statistics.unpad.ac.id/?journal=prosidingsnsa&page=article&op=view&path%5B%5D=341",
  },
];

export default projectData;
