import React from "react";

const Footer = () => (
  <footer className="footer py-10 px-8 bg-base-300 text-base-content grid grid-cols-2 lg:grid-cols-5 gap-4">
    <aside className="col-span-2 lg:col-span-3">
      <h2 className="footer-title">Aizad Ridzo</h2>
      <p>
        This project is created using NextJS and Fake Store API, styled with
        TailwindCSS and deployed on Vercel.
      </p>
    </aside>
    <nav>
      <h6 className="footer-title">Links</h6>
      <a className="link link-hover underline-offset-2">Github Repo</a>
      <a className="link link-hover underline-offset-2">Fake Store API</a>
    </nav>
    <nav>
      <h6 className="footer-title">Contact</h6>
      <a className="link link-hover underline-offset-2">
        aizadridzoo@gmail.com
      </a>
      <a className="link link-hover underline-offset-2">LinkedIn</a>
      <a className="link link-hover underline-offset-2">View other projects</a>
    </nav>
  </footer>
);

export default Footer;
