import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import "bootstrap/dist/css/bootstrap.min.css";
import {Table, Button } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default class StudentsList extends Component {
   
    constructor(props) {
        super(props);
        this.state = {todos: []};
        this.componentDidMount();
    }
    myDelete(id) {
        axios.delete('http://localhost:4000/todos/delete-student/' + id)
            .then((res) => {
                this.componentDidMount();
                console.log('Student successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }
    
    render() {
    
        return (
            <div>
                 <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Father Name</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Semester</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       { this.state.todos.map((currentTodo, i) => (
            <TableRow>
        <TableCell>{currentTodo.name}</TableCell>
        <TableCell>{currentTodo.father_name}</TableCell>
        <TableCell>{currentTodo.dob}</TableCell>
        <TableCell>{currentTodo.mobile}</TableCell>
        <TableCell>{currentTodo.course}</TableCell>
        <TableCell>{currentTodo.semester}</TableCell>
        <TableCell>{currentTodo.address}</TableCell>
        <TableCell>
            
            <Link to={"/edit/"+currentTodo._id}>Edit</Link>               
            <Button onClick = {() => this.myDelete(currentTodo._id)}
            style={{marginLeft: "8px"}} variant="outlined" color="primary">Delete</Button>
        </TableCell>

    </TableRow>
           ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        )
    }
}
