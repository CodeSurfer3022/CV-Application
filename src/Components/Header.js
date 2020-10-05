import React from 'react';

function Header(props) {
    return (
        <div className="header flex">
            <form onSubmit={props.onSubmit}>
                <input
                    onChange={props.handleChange}
                    value={props.location}
                    type="name"
                    id="location"
                />
                <p>{props.location}</p>
            </form>
            <form onSubmit={props.onSubmit}>
                <input
                    onChange={props.handleChange}
                    value={props.name}
                    type="name"
                    id="name"
                />
                <h3>{props.name}</h3>
            </form>
            <form onSubmit={props.onSubmit}>
                <input
                    onChange={props.handleChange}
                    value={props.mail}
                    type="name"
                    id="mail"
                />
                <p>{props.mail}</p>
            </form>
        </div>
    )
}

export default Header;