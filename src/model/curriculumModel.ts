import portfolioData from "./curriculum.json";
// const portfolio = JSON.parse(portfolioData);  --> el "import" de arriba parsea el JSON automáticamente
// export class Portfolio {

//     projects:string;

//     constructor(projects:string){
//         this.projects = projects;
//     }
// }

export const getPortfolios = ()=> portfolioData

export const getProjects = ()=> portfolioData.user.projects

// export const addProject = (project) => {
//     portfolioData.users[0].projects.push(project);
//     JSON.stringify(portfolioData)

// } 