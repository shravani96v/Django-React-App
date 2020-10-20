import ApproverForm from "./components/approver-form";

export class API {
    static updateApprover(approver_id, body) {

        {console.log(body)}

        const formData = new FormData();
        formData.append('approver_name', body);
        console.log();

        return fetch(`http://127.0.0.1:8000/approver/${approver_id}/`, {
            crossDomain:true,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData
        }).then( resp => resp.json())
        .then( resp => {return resp;})
    }
}