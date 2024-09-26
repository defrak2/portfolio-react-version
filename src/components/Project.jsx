import React from 'react';
// import './WorkGrid.css';

const WorkItems = () => {
  const works = [
    {
      title: "PWA Text Editor",
      image: "./assets/images/screenshot1.png",
      description: "A Progressive Web Application for text editing. This web application is available on render but also can be installed on the local computer or phone to be utilized in the PWA format. It utilizes JavaScript and IndexedDB for it's logic and storage of data.",
      deployedLink: "https://pwa-text-editor-mvdw.onrender.com/",
      repoLink: "https://github.com/defrak2/pwa-text-editor"
    },
    {
      title: "Bored Game Generator",
      image: "./assets/images/screenshot2.png",
      description: "              This site is designed for a user to search for games based on their mood. This group project utilizes JavaScript, PostgreSQL, Handlebars and Bulma.",
      deployedLink: "https://bored-game-generator.onrender.com/",
      repoLink: "https://github.com/ajwmp93/Bored-Game-Generator"
    },
    {
      title: "WikiBite",
      image: "./assets/images/screenshot3.png",
      description: "This group project utilizes API calls and JavaScript for a front end application to display and search for recipes and see facts of the recipes country of origin.",
      deployedLink: "https://defrak2.github.io/WikiBite/index.html",
      repoLink: "https://github.com/defrak2/WikiBite"
    },
    {
      title: "Note Tracker",
      image: "./assets/images/screenshot4.png",
      description: "A Web Application utilizing Express to store, display and edit notes.",
      deployedLink: "https://note-tracker-fml4.onrender.com",
      repoLink: "https://github.com/defrak2/note-tracker"
    },
    {
      title: "Task Board",
      image: "./assets/images/screenshot5.png",
      description: "A site to search for games based on your mood. This group project utilizes JavaScript, PostgreSQL, Handlebars and Bulma.",
      deployedLink: "https://defrak2.github.io/Task-Board/",
      repoLink: "https://github.com/defrak2/Task-Board"
    },
    {
      title: "Portfolio",
      image: "./assets/images/screenshot6.png",
      description: "This portfolio web application utilizes JavaScript and React to create a dynamic website to see completed projects and learn more about the developer.",
      deployedLink: "https://defrak2.github.io/WikiBite/index.html",
      repoLink: "https://github.com/defrak2/WikiBite"
    }
  ];

  return (
    <section className="work-grid">
      {works.map((work, index) => (
        <div key={index} className="grid-item grid-custom">
          <WorkItem {...work} />
        </div>
      ))}
    </section>
  );
};

const WorkItem = ({ title, image, description, deployedLink, repoLink }) => (
  <div className="container ">
      <div className="row ">
  <div className="card col-sm bg-custom-ltblue" style={{ width: "18rem" }}>
  <img
    className="card-img-top"
    src={image}
    alt={title}
  />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}
    </p>
    <div className="button-container">
      <a
        href={deployedLink}
        className="btn btn-primary"
      >
        Go to Project
      </a>
      <a
        href={repoLink}
        className="btn btn-primary"
      >
        Go to GitHub
      </a>
    </div>
  </div>
</div>
</div>
</div>
);

export default WorkItems;