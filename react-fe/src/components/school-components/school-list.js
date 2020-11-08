import React from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { API } from '../../api-services/approver-service'

function SchoolList(props) {
    
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>SCHOOL NAME</th>
                    <th />
                    <th>
                        <FontAwesomeIcon icon={faPlus} alignmentBaseline='before-edge'/>
                    </th>
                </tr>
            </thead>
            <tbody>
                { props.schools && props.schools.map( school => {
                return (
                    <tr>
                        <td>
                        {school.school_name}
                        </td>
                        <td>
                            <Button variant="outline-primary">Edit</Button>
                        </td>
                        <td>
                            <Button variant="outline-danger">Delete</Button>
                        </td>
                    </tr>
                )})}
            </tbody>
        </Table>
    )
}

export default SchoolList;