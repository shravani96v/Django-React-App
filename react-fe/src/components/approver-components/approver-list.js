import React, { useState } from 'react';
import Pagination from '../../components/pagination';
import { Table, Button } from 'react-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ApproverAPI } from '../../api-services/approver-service';
import '../../App.css';

function ApproverList(props) {

  const [currentPage, setCurrentPage] = useState(1);
  const [approversPerPage] = useState(6);

  // Get current transfer evals
  const indexOfLastApprover = currentPage * approversPerPage;
  const indexOfFirstApprover = indexOfLastApprover - approversPerPage;
  const currentApprovers = props.approvers.slice(indexOfFirstApprover, indexOfLastApprover);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const approverClicked = approver => evt => {
    props.approverClick(approver);
  }

  const editClicked = approver => {
    props.editClicked(approver);
  }

  const deleteClicked = approver => {
    ApproverAPI.deleteApprover(approver.approver_id)
      .then( () => props.deleteClicked(approver))
      .catch( error => console.log(error))
  }

  const newApprover = () => {
    props.newApprover();
  }

  return (
    <>
    <Table striped border hover>
      <thead>
        <tr>
          <th onClick={() => window.location.reload(false)}>APPROVER NAME</th>
          <th />
          <th />
          <th>
            <FontAwesomeIcon icon={faPlus} alignmentBaseline='before-edge' onClick={newApprover}/>
          </th>
        </tr>
      </thead>
      <tbody>
        { currentApprovers && currentApprovers.map( approver => {
          return (
            <tr>
              <td onClick={approverClicked(approver)}>
                {approver.approver_name}
              </td>
              <td />
              <td>
              <Button variant="outline-primary" onClick={() => editClicked(approver)}>Edit</Button>
              </td>
              <td>
                <Button variant="outline-danger" onClick={() => deleteClicked(approver)}>Delete</Button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
    <Pagination elementsPerPage={approversPerPage} totalElements={props.approvers.length} paginate={paginate} url='approver/!#'/>
    </>
  )
}

export default ApproverList;
