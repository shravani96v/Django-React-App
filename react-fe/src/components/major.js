import React, { useState, useEffect } from 'react';
import '../App.css';
import MajorList from "./major-components/major-list";
import MajorDetails from "./major-components/major-details";
import ApproverList from './approver-components/approver-list';

function Major() {
    const [majors, setMajors] = useState([]);
    const [selectedMajor, setSelectedMajor] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/major-list/", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then( resp => resp.json())
        .then( resp => setMajors(resp))
        .catch(error => console.log(error))
      }, [])
    
    const majorDetail = major => {
        setSelectedMajor(major);
    }

    return (
        <div className="list-group">
          <br/>
            <header className="App-header">
                <h2>Majors List</h2>
            </header>
            <div className="layout">
                <MajorList majors={majors} majorClicked={majorDetail}/>
                <MajorDetails major={selectedMajor}/>
            </div>
        </div>
      )

}

export default Major;