import React from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { API } from '../../api-services/transfer-course-service';

function TransferCourseList(props) {

    const courseClicked = course => evt => {
        props.courseClicked(course);
    }

    const editClicked = course => {
        props.editClicked(course);
      }
    
    const deleteClicked = course => {
        if (window.confirm("Are you sure?")) {
            API.deleteTransferCourse(course.transfer_course_id)
            .then( () => props.deleteClicked(course))
            .catch( error => console.log(error))
        } else {
            console.log("You clicked cancel");
        }
      }

    const newTransferCourse = () => {
        props.newTransferCourse();
    }
    

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th onClick={() => window.location.reload(false)}>TRANSFER COURSE NAME</th>
                    <th>SCHOOL NAME</th>
                    <th>SUBJECT NUMBER</th>
                    <th/>
                    <th>
                        <FontAwesomeIcon icon={faPlus} alignmentBaseline='before-edge' onClick={newTransferCourse}/>
                    </th>
                </tr>
            </thead>
            <tbody>
                    { props.courses && props.courses.map( course => {
                    return (
                        <tr>
                            <td onClick={courseClicked(course)}>
                            {course.title}
                            </td>
                            <td>
                                {course.school}
                            </td>
                            <td>
                                {course.subject_number}
                            </td>
                            <td>
                                <Button variant="outline-primary" onClick={() => editClicked(course)}>Edit</Button>
                            </td>
                            <td>
                                <Button variant="outline-danger" onClick={() => deleteClicked(course)}>Delete</Button>
                            </td>
                        </tr>
                    )})}
            </tbody>
        </Table>
    )
}

export default TransferCourseList;