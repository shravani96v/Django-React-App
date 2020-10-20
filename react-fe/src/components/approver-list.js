import React from 'react';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function ApproverList(props) {

  const approverClicked = approver => evt => {
    props.approverClick(approver);
  }

  const editClicked = approver => {
    props.editClicked(approver);
  }

  const addNewApprover = () => evt => {
    fetch("http://127.0.0.1:8000/approver-list/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {approver_name: 'test'} )
    })
    .then( resp => newApproverView(resp))
    .catch(error => console.log(error))
  }

  const newApproverView = newapprover => {
    fetch("http://127.0.0.1:8000/approver-list/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then( resp => resp.json())
    .then( resp => props.createApprover(resp))
    .catch(error => console.log(error))
  }

  return (
    <div>
      <div>
        { props.approvers && props.approvers.map( approver => {
            return (
              <div key={approver.approver_id} className='approver-item'>
                <h2 onClick={approverClicked(approver)}>{approver.approver_name}</h2>
                <FontAwesomeIcon icon={faEdit} onClick={() => editClicked(approver)}/>
                <FontAwesomeIcon icon={faTrash}/>
              </div>
            )
        })}
      </div>
      <div>
        <button onClick={addNewApprover()}>Add a new approver</button>
      </div>
    </div>
  )
}

export default ApproverList;
