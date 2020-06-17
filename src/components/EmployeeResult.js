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
    Api.api().then((res) => {
      this.setState({
        result: res.data.results,
      });
    });
  };
}
