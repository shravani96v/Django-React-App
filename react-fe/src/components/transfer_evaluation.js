import React, { Modal, useState, useEffect } from 'react';
import '../App.css';
import TransferEvaluationList from './transfer-eval-components/transfer-eval-list';
import TransferEvaluationDetails from './transfer-eval-components/transfer-eval-details';
import TransferEvaluationForm from './transfer-eval-components/transfer-eval-form';


function TransferEvaluation() {

    const [transferEvals, setTransferEvals] = useState([]);
    const [selectedTransferEval, setSelectedTransferEval] = useState(null);
    const [editedTransferEval, setEditedTransferEval] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/transfer-evaluation-list/", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then( resp => resp.json())
        .then( resp => setTransferEvals(resp))
        .catch(error => console.log(error))
      }, [])
    
    const loadTransferEval = transferEval => {
        setSelectedTransferEval(transferEval);
        setEditedTransferEval(null);
    }

    const newTransferEval = () => {
      setEditedTransferEval({transfer_course_id: '', major_req_id:'', sem_year_taken:'', expiration_date: '', approved_status: '', notes:'', approver_id:''});
      setSelectedTransferEval(null);
    }

    const editClicked = transferEval => {
      setEditedTransferEval(transferEval);
      setSelectedTransferEval(null);
    }

    const deleteClicked = transferEval => {
      const newTransferEvals = transferEvals.filter( te => te.transfer_eval_id !== transferEval.transfer_eval_id);
      setTransferEvals(newTransferEvals);
    }

    const updatedTransferEval = transferEval => {
      const newTransferEvals = transferEvals.map( newTransferEval => {
        if (newTransferEval.transfer_eval_id === transferEval.transfer_eval_id) {
          return transferEval;
        }
        return newTransferEval;
      })
      setTransferEvals(newTransferEvals);
    }

    const transferEvalCreated = transferEval => {
      const newTransferEvals = [...transferEvals, transferEval];
      setTransferEvals(newTransferEvals);
    }

    const openList = () => {
        setSelectedTransferEval(false);
    }

    return (
        <div>
          <br/>
            <header>
                <h2>Transfer evaluations</h2>
            </header>
            <div className="transfereval">
                {!selectedTransferEval && !editedTransferEval ?
                <TransferEvaluationList
                  transferEvals={transferEvals}
                  transferEvalClicked={loadTransferEval}
                  editClicked={editClicked}
                  deleteClicked={deleteClicked}
                  newTransferEval={newTransferEval}
                />
                    : null }
                {selectedTransferEval ?
                    <TransferEvaluationDetails
                    openList={openList}
                    transferEval={selectedTransferEval}
                    updateTransferEval={loadTransferEval}
                    />
                    : null }
                {editedTransferEval ?
                    <TransferEvaluationForm
                    transferEval={editedTransferEval}
                    updatedTransferEval={updatedTransferEval}
                    transferEvalCreated={transferEvalCreated}
                    />
                    : null}
            </div>
        </div>
      )

}

export default TransferEvaluation;

/*
{selectedTransferEval ?
                <TransferEvaluationDetails 
                  transferEval={selectedTransferEval}
                  updateTransferEval={loadTransferEval}
                />
                : null }
                {editedTransferEval ?
                <TransferEvaluationForm
                  transferEval={editedTransferEval}
                  updatedTransferEval={updatedTransferEval}
                  transferEvalCreated={transferEvalCreated}
                />
                : null}
*/