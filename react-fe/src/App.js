import React, { useState, useEffect } from 'react';
import './App.css';
import ApproverList from './components/approver-list'
import ApproverDetails from './components/approver-details'
import ApproverForm from './components/approver-form'

function App() {

  const [approvers, setApprovers] = useState([]);
  const [selectedApprover, setSelectedApprover] = useState(null);
  const [editedApprover, setEditedApprover] = useState(null);
  const [newApprovers, setNewApprovers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/approver-list/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then( resp => resp.json())
    .then( resp => setApprovers(resp))
    .catch(error => console.log(error))
  }, [])

  const loadApprover = approver => {
    setSelectedApprover(approver);
    setEditedApprover(null);
  }

 const editClicked = approver => {
    setEditedApprover(approver);
    setSelectedApprover(null);
  }

  const updatedApprover = approver => {
    const newApprovers = approvers.map( newApprover => {
      if (newApprover.approver_id === approver.approver_id) {
        return approver;
      }
      return newApprover;
    })
    console.log("Its coming here");
    setApprovers(newApprovers)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Approvers List</h2>
      </header>
      <div className="layout">
          <ApproverList approvers={approvers} approverClick={loadApprover} editClicked={editClicked} createApprover={loadApprover}/>
          <ApproverDetails approver={selectedApprover} updateApprover={loadApprover}/>
          { editedApprover ? <ApproverForm approver={editedApprover} updatedApprover={updatedApprover}/> : null}
      </div>
    </div>
  );
}

export default App;
