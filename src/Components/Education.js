import React from 'react';

function Education(props) {
    return (
        <div className="education">
            <h3>Education</h3>
            <div className="flex">
                <form onSubmit={props.onSubmit}>
                    <input
                        onChange={props.handleChange}
                        value={props.campus}
                        type="name"
                        id="campus"
                    />
                    <p>{props.campus}</p>
                </form>
                <form onSubmit={props.onSubmit}>
                    <input
                        onChange={props.handleChange}
                        value={props.college}
                        type="name"
                        id="college"
                    />
                    <h4>{props.college}</h4>
                </form>
                <form onSubmit={props.onSubmit}>
                    <input
                        onChange={props.handleChange}
                        value={props.study}
                        type="name"
                        id="study"
                    />
                    <p>{props.study}</p>
                </form>
            </div>
            <div className="description">
                <button>Add education</button>
            </div>
        </div>
    )
}

export default Education;
