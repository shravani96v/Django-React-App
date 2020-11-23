import React, { useState, useEffect } from 'react';
import  { Redirect } from 'react-router-dom';


const ImportFile = () => {

    const [file, setFile] = useState('');

    const onFileChange = event => { debugger; setFile(event.target.files[0]) }


    const handleUploadfile = (event) => {
        debugger;
        event.preventDefault();
        const data = new FormData();
        data.append('file', file );
        fetch("http://127.0.0.1:8000/import", {
            redirect: 'follow',
            crossDomain: true,
             method: 'POST',
             body: data
        }).then((response) =>  {
            debugger;
            console.log(response.ok)
            if (response.ok) {
                return <Redirect to='/transfer-eval' />
            }
        })
    }

    return (
       <div>
        <form>
            <input type="file" name="document" onChange={onFileChange}/>
            <button type="submit" onClick={handleUploadfile} > Import </button>
        </form>
       </div>
    );
}
 
export default ImportFile;