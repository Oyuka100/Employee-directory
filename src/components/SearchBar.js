import React from "react";

export default function Search(props) {
  if (typeof props.page === "string") {
    return (
      <nav className="navbar-light navbar">
        <a
          className="navbar-brand"
          href="#Home"
          onClick={() => props.handlePageChange("")}
        >
          Home
        </a>
        <form className="form">
          <input
            value={props.page}
            name="page"
            onChange={props.handleInputChange}
            type="text"
            placeholder="search name"
          />
        </form>
      </nav>
    );
  } else {
    return (
      <nav className="navbar-light navbar">
        <a
          className="navbar-brand"
          href="#Home"
          onClick={() => props.handlePageChange("")}
        >
          Home
        </a>
      </nav>
    );
  }
}
