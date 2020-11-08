import React from 'react';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { API } from '../../api-services/approver-service'

function ApproverList(props) {

  const approverClicked = approver => evt => {
    props.approverClick(approver);
  }

  const editClicked = approver => {
    props.editClicked(approver);
  }

  const deleteClicked = approver => {
    API.deleteApprover(approver.approver_id)
      .then( () => props.deleteClicked(approver))
      .catch( error => console.log(error))
  }

  return (
    <div>
      { props.approvers && props.approvers.map( approver => {
          return (
            <div key={approver.approver_id} className='list-item'>
              <h4 onClick={approverClicked(approver)}>{approver.approver_name}</h4>
              <FontAwesomeIcon icon={faEdit} onClick={() => editClicked(approver)}/>
              <FontAwesomeIcon icon={faTrash} onClick={() => deleteClicked(approver)}/>
            </div>
          )
      })}
    </div>
  )
}

export default ApproverList;
