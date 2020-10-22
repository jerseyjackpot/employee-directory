import React, { Component } from "react";
import axios from "axios";
import bootstrap, { Table } from "react-bootstrap";


class Form extends Component {
  // Setting the component's initial state
  state = {
    Name: "",
    Employee: [],
    Original: []
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=100&nat=us").then(results => {
      this.setState({
        Employee: results.data.results,
        Original: results.data.results,
      })
    })
  }

  handleFirstNameSort = event => {
    event.preventDefault();
    console.log(event.target);
    let sortedlist = [...this.state.Employee];
    sortedlist = sortedlist.sort( (employeeA, employeeB) => {
      if( employeeA.name.first > employeeB.name.first){
        return 1;
      }
      return -1;
    });
    this. setState({
      Employee: sortedlist
    })
  }

  handleInputChange = event => {

    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    console.log(event.target);
    let filteredlist = [...this.state.Original];
    filteredlist = filteredlist.filter( (employee) => {
      return employee.name.first.toLowerCase().indexOf(value.toLowerCase()) >=0;
    });
    // // /this. setState({
    //   Employee: sortedlist
    // })


    // Updating the input's state
    this.setState({
      Name: value, 
      Employee: filteredlist
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    console.log(this.state.Employee);

    return (
      <div>
        <p>
          Find Employee By Name
        </p>
        <form className="form">
          <input
            value={this.state.Name}
            name="Name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Name"
          />
        </form>

        <Table striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th> <a href="#" onClick={(event) => 
        this.handleFirstNameSort(event)
        }>First Name</a></th>
      <th>Last Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
  {this.state.Employee.map((emp, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{emp.name.first}</td> 
              <td>{emp.name.last}</td>
              <td>{emp.email}</td> 
              
            </tr>
          ))}
  </tbody>
</Table>
       

      </div>
    );
  }
}

export default Form;
