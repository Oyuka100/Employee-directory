import React from "react";

function Results(props) {
  return (
    <table className = "">
      <thead>
        <tr>
          <th scope="col">
            {" "}
            <a href="#first" onClick={() => props.sortByFirst()}>
              First name
            </a>
          </th>
          <th scope="col">
            <a href="#first" onClick={() => props.sortByLast()}>
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
                <img className = ""
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
