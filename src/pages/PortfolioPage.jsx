export default function PortfolioPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="card col-sm card-container" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="./assets/images/screenshot1.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">PWA Text Editor</h5>
            <p className="card-text">
              A Progressive Web Application for text editing. This web application is available on render but also can be installed on the local computer or phone to be utilized in the PWA format. It utilizes JavaScript and IndexedDB for it's logic and storage of data.
            </p>
            <div className="button-container">
              <a
                href="https://pwa-text-editor-mvdw.onrender.com/"
                className="btn btn-primary"
              >
                Go to Project
              </a>
              <a
                href="https://github.com/defrak2/pwa-text-editor"
                className="btn btn-primary"
              >
                Go to GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="card col-sm" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="./assets/images/screenshot2.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Bored Game Generator</h5>
            <p className="card-text">
              This site is designed for a user to search for games based on their mood. This group project
              utilizes JavaScript, PostgreSQL, Handlebars and Bulma.
            </p>
            <div className="button-container">
              <a
                href="https://bored-game-generator.onrender.com/"
                className="btn btn-primary"
              >
                Go to Project
              </a>
              <a
                href="https://github.com/ajwmp93/Bored-Game-Generator"
                className="btn btn-primary"
              >
                Go to GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="card col-sm" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="./assets/images/screenshot3.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">WikiBite</h5>
            <p className="card-text">
              This group project utilizes API calls and JavaScript for a front
              end application to display and search for recipes and see facts of
              the recipes country of origin.
            </p>
            <div className="button-container">
              <a
                href="https://defrak2.github.io/WikiBite/index.html"
                className="btn btn-primary"
              >
                Go to Project
              </a>
              <a
                href="https://github.com/defrak2/WikiBite"
                className="btn btn-primary"
              >
                Go to GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card col-sm" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="./assets/images/screenshot4.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Note Tracker</h5>
            <p className="card-text">
              A Web Application utilizing Express to store, display and edit
              Notes.
            </p>
            <div className="button-container">
              <a
                href="https://note-tracker-fml4.onrender.com"
                className="btn btn-primary"
              >
                Go to Project
              </a>
              <a
                href="https://github.com/defrak2/note-tracker"
                className="btn btn-primary"
              >
                Go to GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="card col-sm" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="./assets/images/screenshot5.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Task Board</h5>
            <p className="card-text">
              A site to search for games based on your mood. This group project
              utilizes JavaScript, PostgreSQL, Handlebars and Bulma.
            </p>

            <div className="button-container">
              <a
                href="https://defrak2.github.io/Task-Board/"
                className="btn btn-primary"
              >
                Go to Project
              </a>
              <a
                href="https://github.com/defrak2/Task-Board"
                className="btn btn-primary"
              >
                Go to GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="card col-sm" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="./assets/images/screenshot6.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Portfolio</h5>
            <p className="card-text">
              This portfolio web application utilizes JavaScript and React to
              create a dynamic website to see completed projects and learn more
              about the developer.
            </p>
            <div className="button-container">
              <a
                href="https://defrak2.github.io/WikiBite/index.html"
                className="btn btn-primary"
              >
                Go to Project
              </a>
              <a
                href="https://github.com/defrak2/WikiBite"
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
}
