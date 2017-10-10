import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(response => {
      this.setState({ students: response.data })
    })
  }

  render() {

    const students = this.state.students.map((e, i) => {
      return <Link key={i} to={`/student/${e.id}`}><h3 >{ e.first_name } { e.last_name }</h3></Link>
    })
    return (
      <div className="box">
        <h1>{ this.props.match.params.class }</h1>
        <h2>ClassList:</h2>
        {students}
        <Link to='/' ><button>Back to Home</button></Link>
      </div>
    )
  }
    
}