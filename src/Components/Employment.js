import React from 'react';

function Employment(props) {
    return (
        <div className="employment">
            <h3>Employment</h3>
            <div className="flex">
                <form onSubmit={props.onSubmit}>
                    <input
                        onChange={props.handleChange}
                        value={props.job}
                        type="name"
                        id="job"
                    />
                    <p>{props.job}</p>
                </form>
                <form onSubmit={props.onSubmit}>
                    <input
                        onChange={props.handleChange}
                        value={props.company}
                        type="name"
                        id="company"
                    />
                    <p>{props.company}</p>
                </form>
                <form onSubmit={props.onSubmit}>
                    <input
                        onChange={props.handleChange}
                        value={props.employment}
                        type="name"
                        id="employment"
                    />
                    <p>{props.employment}</p>
                </form>
            </div>
            <div className="description">
                <ul></ul>
                <button>Add details</button>
            </div>
        </div>
    )
}

export default Employment;