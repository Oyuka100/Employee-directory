import React from "react";

function Table(props) {
  if (props.page === "") {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <a href="#first" onClick={() => props.sortByFirstName()}>
                First name
              </a>
            </th>
            <th scope="col">
              <a href="#first" onClick={() => props.sortByLastName()}>
                Last name
              </a>
            </th>
            <th scope="col">Phone number</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result) => (
            <tr key={result.cell}>
              <th scope="row">
                <a
                  href="#employee"
                  onClick={() => props.handlePageChange({ result })}
                >
                  <img
                    className="img-responsive"
                    src={result.picture.thumbnail}
                    alt="http://placekitten.com/200/300"
                  ></img>
                </a>
              </th>
              <td>{result.name.first}</td>
              <td>{result.name.last}</td>
              <td>{result.email}</td>
              <td>{result.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else if (typeof props.page === "string") {
    let nameMatch = props.result.filter(function (result) {
      return (
        (result.name.first + " " + result.name.last)
          .substring(0, props.page.length)
          .toLowerCase() === props.page.toLowerCase()
      );
    });
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <a href="#first" onClick={() => props.sortByFirstName()}>
                First name
              </a>
            </th>
            <th scope="col">
              <a href="#first" onClick={() => props.sortByLastName()}>
                Last name
              </a>
            </th>
            <th scope="col">Phone number</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {nameMatch.map((result) => (
            <tr key={result.cell}>
              <th scope="row">
                <a
                  href="#employee"
                  onClick={() => props.handlePageChange({ result })}
                >
                  <img
                    className="img-responsive"
                    src={result.picture.thumbnail}
                    alt="http://placekitten.com/200/300"
                  ></img>
                </a>
              </th>
              <td>{result.name.first}</td>
              <td>{result.name.last}</td>
              <td>{result.email}</td>
              <td>{result.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default Table;
