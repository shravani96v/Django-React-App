import React from 'react';

function MajorList(props) {

    const majorClicked = major => evt => {
        props.majorClicked(major);
    }

    return (
        <div>
            { props.majors && props.majors.map( major => {
                return (
                    <div key={major.major_name} className="list-item">
                        <h4 onClick={majorClicked(major)}>{major.major_name}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default MajorList;