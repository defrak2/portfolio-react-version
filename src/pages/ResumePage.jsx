export default function ResumePage() {
  return (
    <div id="resume-page">
<div className="download-btn-container">
  <a
      href="/assets/doc/DeFrancisco-Resume.pdf" // 
      download 
      className="btn btn-primary download-btn" 
    >
      Download Document
    </a>
</div>


      <h1 className="resume-h1">RESUME</h1>
      <h3 className="resume-h3">SUMMARY</h3>
      <p className="resume-p">
        A driven and ambitious web developer passionate about collaboration and
        forward thinking in the tech world with a focus on solving problems.
      </p>
      <p className="resume-p">
        Combines creativity, functionality, and innovation while creating
        user-friendly and efficient applications.
      </p>
      <p className="resume-p">
        {" "}
        Experienced problem solver, teammate, trainer and mentor in multiple
        workplace environments.
      </p>

      <h3 className="resume-h3">TECHNICAL SKILLS</h3>
      <p className="resume-p">Technical Languages: HTML5, CSS, JavaScript, SQL, React</p>
      <p className="resume-p">
        Applications: REST API, GitHub, PostgreSQL, MongoDB, Express, Node,
        jQuery, Materialize, Bootstrap
      </p>

      <h3 className="resume-h3">EDUCATION</h3>
      <h6 className="resume-h6">
        Full Stack Web Development Boot Camp Certificate: The Ohio State
        University, Columbus, OH
      </h6>
      <p className="resume-p">
        An intensive program focused on gaining technical programming skills in
        HTML5, CSS3, JavaScript, JQuery, Bootstrap, Firebase, Node.js, MySQL,
        MongoDB, Express, Handelbars.js, and ReactJS.
      </p>

      <h6 className="resume-h6">
        Bachelor’s Degree in Comparative Religious Studies: The Ohio State
        University, Columbus, OH
      </h6>
      <p className="resume-p">
        Program focused on contemplative practices across cultures and religious
        practices.
      </p>
    </div>
  );
}
