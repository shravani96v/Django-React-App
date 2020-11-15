import React, { useState, useEffect } from 'react';
import { API } from '../../api-services/transfer-eval-service';
import { Form, Modal, Button } from 'react-bootstrap';
import '../../App.css';
import TransferEvaluationList from './transfer-eval-list';

function TransferEvaluationForm(props) {

    const [major_req_id, setMajorReqId] = useState('');
    const [majorReqs, setMajorReqs] = useState('');
    const [transfer_course_id, setTransferCourseId] = useState('');
    const [approver_id, setApproverId] = useState('');
    const [major_id, setMajorId] = useState('');
    const [majors, setMajors] = useState('');
    const [school_id, setSchoolId] = useState('');
    const [schools, setSchools] = useState('');
    const [subjectNumber, setSubjectNumber] = useState('');
    const [title, setTitle] = useState('');
    const [unhmEq, setUnhmEq] = useState('');
    const [approverName, setApproverName] = useState('');
    const [approvedStatus, setApprovedStatus] = useState('');
    const [expirationDate, setExpirationDate] = useState('');

    useEffect(() => {
        setSchoolId(props.transferEval.school_id)
        setMajorId(props.transferEval.major_id)
        setMajorReqId(props.transferEval.major_req_id);
        setTransferCourseId(props.transferEval.transfer_course_id);
        setApproverId(props.transferEval.approver_id);
        setSubjectNumber(props.transferEval.course_number);
        setTitle(props.transferEval.course_title);
        setUnhmEq(props.transferEval.unhm_eq);
        setApproverName(props.transferEval.approver);
        setApprovedStatus(props.transferEval.approved_status);
        setExpirationDate(props.transferEval.expiration_date)
    }, [props.transferEval])

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

    const updateClicked = () => {
        API.updateTransferEvaluation(props.transferEval.transfer_eval_id, 
                                        {
                                            major_id: major_id,
                                            school_id: school_id,
                                            course_number: subjectNumber,
                                            course_title: title,
                                            unhm_eq: unhmEq,
                                            approver: approverName,
                                            approved_status: approvedStatus
                                        })
            .then(resp => {
                 props.updatedTransferEvaluation(resp) });
    };

    const createClicked = () => {
        API.createTransferEvaluation({
                                        major_id: major_id,
                                        school_id: school_id,
                                        course_number: subjectNumber,
                                        course_title: title,
                                        unhm_eq: unhmEq,
                                        approver: approverName,
                                        approved_status: approvedStatus
                                    })
            .then(resp => props.transferEvaluationCreated(resp));
    };

    return (
        <div>
            {props.transferEval ? (
                <Form id='form-css'>
                    <Form.Label htmlFor="major">Major</Form.Label>
                    <select id="major"
                            className='form-control'
                            value={major_id}
                            onChange={evt => setMajorId(evt.target.value)}>
                                {majors && majors.map( major => {
                                    return (
                                        <option key={major.major_id} value={major.major_id}>{major.major_name} </option>
                                    )
                                })}
                    </select>
                    <Form.Label htmlFor="school">School</Form.Label>
                    <select id="school"
                            className='form-control'
                            value={school_id}
                            onChange={evt => setSchoolId(evt.target.value)}>
                                {schools && schools.map( school => {
                                    return (
                                        <option key={school.school_id} value={school.school_id}>{school.school_name} </option>
                                    )
                                })}
                    </select><br />
                    <Form.Label htmlFor="tcnumber">Transfer course number</Form.Label>
                    <Form.Control id="tcnumber" type="text" placeholder="Enter subject number"
                        value={subjectNumber} onChange={evt => setSubjectNumber(evt.target.value)}/><br/>
                    <Form.Label htmlFor="tctitle">Transfer course title</Form.Label>
                    <Form.Control id="tctitle" type="text" placeholder="Enter subject title"
                        value={title} onChange={evt => setTitle(evt.target.value)}/><br/>
                    <Form.Label htmlFor="unhm">UNH M Equivalent</Form.Label>
                    <Form.Control id="unhm" type="text" placeholder="Enter unhm equivalent"
                        value={unhmEq} onChange={evt => setUnhmEq(evt.target.value)}/><br/>
                    <Form.Label htmlFor="approver">Approver name</Form.Label>
                    <Form.Control id="approver" type="text" placeholder="Enter approver name"
                        value={approverName} onChange={evt => setApproverName(evt.target.value)}/><br/>
                    <Form.Label htmlFor="approved_status">Approved status</Form.Label>
                    <Form.Control id="approved_status" type="select" placeholder=" "
                        value={approvedStatus} onChange={evt => setApprovedStatus(evt.target.value)}/><br/>
                    <Form.Label htmlFor="expiration">Expiration date</Form.Label>
                    <Form.Control id="expiration" type="date" placeholder=" "
                        value={expirationDate} onChange={evt => setExpirationDate(evt.target.value)}/><br/>

                    { props.transferEval.transfer_eval_id ?
                            <Button variant="outline-success" type="submit" onClick={updateClicked}>
                                Update
                            </Button> :
                            <Button variant="outline-success" type="submit" onClick={createClicked}>
                                Create
                            </Button>
                        }
                </Form>
            ) : null }
        </div>
    )
}

export default TransferEvaluationForm;