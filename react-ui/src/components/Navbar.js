import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      // <nav className="navbar navbar-default" role="navigation">
      //   <div className="container-fluid">
      //     <div className="navbar-header">
      //       <button
      //         type="button"
      //         className="navbar-toggle"
      //         data-toggle="collapse"
      //         data-target=".navbar-ex1-collapse"
      //       >
      //         <span className="sr-only">Toggle navigation</span>
      //         <span className="icon-bar" />
      //         <span className="icon-bar" />
      //         <span className="icon-bar" />
      //       </button>
      //       <a className="navbar-brand" href="/">
      //         NYT-React
      //       </a>
      //     </div>
      //
      //     <div className="collapse navbar-collapse navbar-ex1-collapse">
      //       <ul className="nav navbar-nav navbar-right">
      //         <li>
      //           <a href="/search">Search</a>
      //         </li>
      //         <li>
      //           <a href="/saved">Saved Articles</a>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-auto">
              <a className="nav-link" href="/saved">
                Saved Articles
              </a>
            </li>
            <li className="nav-item mx-auto">
              <a
                className="nav-link"
                href="https://github.com/rcowles3/NYT-CRA"
              >
                GitHub Source Code
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
