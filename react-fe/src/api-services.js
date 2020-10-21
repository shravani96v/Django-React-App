
export class API {
    static updateApprover(approver_id, body) {

        const formData = new FormData();
        formData.append('approver_name', body);

        return fetch(`http://127.0.0.1:8000/approver/${approver_id}/`, {
            crossDomain: true,
            method: 'PUT',
            body: formData
        }).then(resp => resp.json())
            .then(
                resp => {
                    console.log(resp)
                    return resp.approver_name;
                },
                err => console.log(err))
    }
}