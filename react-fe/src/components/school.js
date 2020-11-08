import React, { useState, useEffect } from 'react';
import '../App.css';
import TransferCourseList from './transfer-course-components/transfer-course-list';
import TransferCourseDetails from './transfer-course-components/transfer-course-details';
import TransferCourseForm from './transfer-course-components/transfer-course-form';
import SchoolList from './school-components/school-list';

function School() {
    
    const [schools, setSchools] = useState([]);
    const [selectedSchool, setSelectedSchool] = useState(null);
    const [editedSchool, setEditedSchool] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/school-list/", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then( resp => resp.json())
        .then( resp => setSchools(resp))
        .catch(error => console.log(error))
      }, [])

    return (
        <div className="list-group">
          <br/>
            <header className="App-header">
                <h2>Schools list</h2>
            </header>
            <div className="layout">
                <SchoolList schools={schools}/>
            </div>
        </div>
      );


}

export default School;