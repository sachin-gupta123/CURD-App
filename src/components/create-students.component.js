import React, { Component } from 'react';
import axios from 'axios';
export default class CreateList extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeFatherName = this.onChangeFatherName.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangeCourse = this.onChangeCourse.bind(this);
        this.onChangeSemester = this.onChangeSemester.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            father_name: '',
            dob: '',
            mobile: '',
            course: '',
            semester: '',
            address: ''
        }
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeFatherName(e) {
        this.setState({
            father_name: e.target.value
        });
    }

    onChangeDOB(e) {
        this.setState({
            dob: e.target.value
        });
    }
    onChangeMobile(e) {
        this.setState({
            mobile: e.target.value
        });
    }onChangeCourse(e) {
        this.setState({
            course: e.target.value
        });
    }onChangeSemester(e) {
        this.setState({
            semester: e.target.value
        });
    }onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Fathername: ${this.state.father_name}`);
        console.log(`Dob: ${this.state.dob}`);
        console.log(`Address: ${this.state.address}`);

        const newStudent = {
            name: this.state.name,
            father_name: this.state.father_name,
            dob: this.state.dob,
            mobile: this.state.mobile,
            course: this.state.course,
            semester: this.state.semester,
            address: this.state.address
        };
        axios.post('http://localhost:4000/todos/registration', newStudent)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            father_name: '',
            dob: '',
            mobile: '',
            course: '',
            semester: '',
            address: ''
        })
    }

    render(){
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Student</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Father Name: </label>
                        <input type="text" className="form-control"
                                value={this.state.father_name}
                                onChange={this.onChangeFatherName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Dob: </label>
                        <input type="text" className="form-control"
                                value={this.state.dob}
                                onChange={this.onChangeDOB}
                                />
                    </div>
                    <div className="form-group">
                        <label>Mobile Number: </label>
                        <input type="text" className="form-control"
                                value={this.state.mobile}
                                onChange={this.onChangeMobile}
                                />
                    </div>
                    <div className="form-group">
                        <label>Course: </label>
                        <input type="text" className="form-control"
                                value={this.state.course}
                                onChange={this.onChangeCourse}
                                />
                    </div>
                    <div className="form-group">
                        <label>Semester: </label>
                        <input type="text" className="form-control"
                                value={this.state.semester}
                                onChange={this.onChangeSemester}
                                />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input type="text" className="form-control"
                                value={this.state.address}
                                onChange={this.onChangeAddress}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Student " className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
