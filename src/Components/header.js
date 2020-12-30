import React from "react";

const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#0C2940" }}
      >
        <div className="container-fluid">
          <a href="/" className="navbar-brand" style={{ color: "white" }}>
            PopMyMovie
          </a>
          <form className="d-flex ml-3 mr-auto">
            <input
              className="form-control"
              type="search"
              placeholder="Search for a movie"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-primary ml-3" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
