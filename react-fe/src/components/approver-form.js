import React, { useState, useEffect } from 'react';
import { API } from '../api-services';

function ApproverForm(props) {

    const [approverName, setApproverName] = useState('');

    useEffect(() => {
        setApproverName(props.approver.approver_name);
    }, [props.approver])

    const updateClicked = () => {
        API.updateApprover(props.approver.approver_id, approverName)
            .then(resp => {
                 props.updatedApprover(resp) });
    };

    const createClicked = () => {
        API.createApprover(approverName)
            .then(resp => props.approverCreated(resp));
    };


    return (
        <React.Fragment>
            { props.approver ? (
                <div>
                    <label htmlFor="name">Approver name: </label><br />
                    <input type="text" placeholder="name" value={approverName}
                        onChange={evt => setApproverName(evt.target.value)} /><br />
                    { props.approver.approver_id ?
                        <button onClick={updateClicked}>Update</button> :
                        <button onClick={createClicked}>Create</button>
                    }
                </div>
            ) : null}
        </React.Fragment>
    )
}

export default ApproverForm;