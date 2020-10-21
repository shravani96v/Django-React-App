import React, { useState } from 'react';
import { API } from '../api-services';

function ApproverForm(props) {

    const [ approverName, setApproverName ] = useState(props.approver.approver_name);

    const updateClicked = () => {
        API.updateApprover( props.approver.approver_id, approverName )
        .then( resp => props.updatedApprover(resp));
    };


    return(
        <React.Fragment>
            { props.approver ? (
                <div>
                    <label htmlFor="name">Approver name</label><br/>
                    <input type="text" placeholder="name" value={approverName}
                        onChange={ evt => setApproverName(evt.target.value)}/><br/>
                    <button onClick={ updateClicked }>Update</button>
                </div>
            ) : null}
        </React.Fragment>
    )
}

export default ApproverForm;