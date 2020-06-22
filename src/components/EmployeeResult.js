import React, { Component } from "react";

import Api from "../utils/api";
import Table from "./Table";
import Search from "./SearchBar";

class EmployeeResult extends Component {
  state = {
    result: [],
    page: "",
    search: "",
  };
  componentDidMount() {
    this.employeeApi();
  }

  employeeApi = () => {
    Api.api()
      .then((res) => {
        this.setState({
          result: res.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handlePageChange = (currentPage) => {
    this.setState({
      page: currentPage,
    });
  };

  handleInputChange = (event) => {
    this.handlePageChange(event.target.value);
  };

  sortByFirstName = () => {
    var sorted = this.state.result.sort(sortName);

    function sortName(a, b) {
      const nameA = a.name.fisrt.toUpperCase();
      const nameB = b.name.first.toUpperCase();

      let compare = 0;

      if (nameA > nameB) {
        compare = 1;
      } else if (nameA < nameB) {
        compare = -1;
      }

      return compare;
    }
    this.setState({
      result: sorted,
    });
  };

  sortByLastName = () => {
    var sorted = this.state.result.sort(sortName);

    function sortName(a, b) {
      const nameA = a.name.last.toUpperCase();
      const nameB = b.name.last.toUpperCase();

      let compare = 0;

      if (nameA > nameB) {
        compare = 1;
      } else if (nameA < nameB) {
        compare = -1;
      }

      return compare;
    }
    this.setState({
      result: sorted,
    });
  };

  render() {
    if (this.state.result) {
      return (
        <div className="container-sm">
          <Search
            handlePageChange = {this.handlePageChange}
            page = {this.state.page}
            handleInputChange = {this.handleInputChange}
          />
          <Table
            results={this.state.result}
            handlePageChange={this.handlePageChange}
            page={this.state.page}
            sortByFirstName={this.sortByFirstName}
            sortByLastName={this.sortByLastName}
            
          />
        </div>
      );
    } else {
      return <div> No employees! </div>;
    }
  }
}
export default EmployeeResult;
