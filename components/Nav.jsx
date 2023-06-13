"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <header className="position-absolute w-100">
      <div className="container">
        <div className="top-header d-none d-sm-flex justify-content-between align-items-center">
          <div className="contact">
            <a href="tel:+1234567890" className="tel">
              <i className="fa fa-phone" aria-hidden="true"></i>+1234567890
            </a>
            <a href="mailto:info@yourmail.com">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              info@yourmail.com
            </a>
          </div>
          <nav className="d-flex aic">
            <a href="#" className="login">
              <i className="fa fa-user" aria-hidden="true"></i>Login
            </a>
            <ul className="nav social d-none d-md-flex">
              <li>
                <a href="https://www.facebook.com/fh5co" target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
              <img src="assets/images/logo.png" alt="Multipurpose" />
            </a>
            <div className="group d-flex align-items-center">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon "></span>
              </button>
              <a className="login-icon d-sm-none" href="#">
                <i className="fa fa-user"></i>
              </a>
              <a className="cart" href="#">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </div>
            <a className="search-icon d-none d-md-block" href="#">
              <i className="fa fa-search"></i>
            </a>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarTogglerDemo02"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              <form
                className="bg-white search-form"
                method="get"
                id="searchform"
              >
                <div className="input-group">
                  <input
                    className="field form-control"
                    id="s"
                    name="s"
                    type="text"
                    placeholder="Search"
                  />
                  <span className="input-group-btn">
                    <input
                      className="submit btn btn-primary"
                      id="searchsubmit"
                      name="submit"
                      type="submit"
                      value="Search"
                    />
                  </span>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
