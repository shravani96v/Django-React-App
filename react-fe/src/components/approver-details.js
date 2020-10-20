import React from 'react';

function ApproverDetails(props) {

    const approv = props.approver

    return (
        <div>
            {approv ? (
                <div className='approver-detail'>
                    <h4>Approver ID: {approv.approver_id}</h4>
                    <h4>Approver name: {approv.approver_name}</h4>
                </div>
            ) : null}
        </div>
    )
}

export default ApproverDetails;