import "./style.css";
import data from "./projects.json" assert {type: 'json'};
const projects = data.projects;

// Active buttons effect
const elements = document.querySelectorAll("nav .navigation li")

elements.forEach(element => { 
  element.addEventListener("click", (e) => { 
    document.querySelector(".active")?.classList.remove("active"); 
    e.target.classList.add("active"); 
  })
})

const addCard = () => { 
    projects.forEach((project) => { 
      const imageLink = document.createElement("a"); 
      const image = document.createElement("img"); 
      image.src = project.image; 

      const article = document.createElement("article");

      imageLink.appendChild(image); 
      article.appendChild(imageLink); 

      project.tags.forEach((tag) => { 
        let temp = document.createElement("a");
        temp.innerHTML = tag;
  
        temp.className = "tag";
        article.appendChild(temp);
      })

      const header = document.createElement("h1");
      header.innerHTML = project.description; 
      header.className = "title"; 
  
      article.appendChild(header); 
  
      
      const view = document.createElement("a");
      view.href = project.link;
      view.target = "_blank";
      view.className = "cta"; 
      
      view.innerHTML = `<p>view project</p><i class="fa-solid fa-arrow-right"></i>`;
  
      article.appendChild(view); 
  
      const projectSection = document.querySelector(".projects");
      projectSection.appendChild(article); 
    })


}

document.body.onload = addCard;
