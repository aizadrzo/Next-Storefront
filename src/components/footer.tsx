import Link from "next/link";
import React from "react";

const Footer = () => (
  <section className="py-10 px-8 bg-base-300 text-base-content">
    <footer className="footer grid grid-cols-2 lg:grid-cols-5 gap-4 mx-auto max-w-[1110px] px-5">
      <aside className="col-span-2 lg:col-span-3">
        <h2 className="footer-title">Aizad Ridzo</h2>
        <p className="lg:w-2/3">
          This project is created using NextJS and Fake Store API, styled with
          TailwindCSS and deployed on Vercel.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Links</h6>
        <Link
          href="https://github.com/aizadrzo/Next-Storefront"
          className="link link-hover underline-offset-2"
        >
          Github Repo
        </Link>
        <Link
          href="https://fakestoreapi.com/docs"
          className="link link-hover underline-offset-2"
        >
          Fake Store API
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Contact</h6>
        <Link
          href="mailto:aizadridzoo@gmail.com"
          className="link link-hover underline-offset-2"
        >
          aizadridzoo@gmail.com
        </Link>
        <Link
          href="https://www.linkedin.com/in/aizadridzo/"
          className="link link-hover underline-offset-2"
        >
          Linkedin
        </Link>
        <Link
          href="https://github.com/aizadrzo"
          className="link link-hover underline-offset-2"
        >
          Github
        </Link>
      </nav>
    </footer>
  </section>
);

export default Footer;
