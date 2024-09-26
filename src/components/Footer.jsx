import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p className="mb-0">Created by Kendra</p>
        <div className="social-links">
          <a
            href="https://github.com/defrak2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            GitHub
          </a>
          |
          <a
            href="https://www.linkedin.com/in/kendra-defrancisco-772439214/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            LinkedIn
          </a>
          |
          <a
            href="mailto:defranciscok22@gmail.com"
            className="text-white mx-2"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}