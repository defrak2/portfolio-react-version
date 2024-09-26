export default function AboutMePage() {
  return (
    <div className="container pt-4 text-center about-container">
            <h1 className="about-h1">About</h1>
      <div className="text-center">
        <img
          src="./assets/images/headshot.jpg"
          class="img-fluid headshot"
          alt="Responsive image"
        />
      </div>
      <div className="paragraph-container">
        <h5 className="about-paragraph text-center">
          A driven and ambitious individual with a passion for web development.
          Has a solid understanding and experience with full stack development.
          Excited to work on projects that combine creativity, functionality,
          and innovation.
        </h5>
      </div>
    </div>
  );
}
