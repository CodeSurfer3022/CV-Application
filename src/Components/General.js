import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

function General(props) {
    return (
        <div className="general flex">
          <div>
            <h1>First Name</h1>
            <h1>Last Name</h1>
            <p>Designation</p>
            <p>City, Country</p>
          </div>
          <div className="profile-pic">
            <img src='Cv-application/images/profile%20pic.jpg' alt="profile pic"/>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <p>Phone</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>Email</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faLinkedin} />
              <p>Linkedin</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faGithubSquare} />
              <p>Github</p>
            </div>
          </div>
            {/*<form onSubmit={props.onSubmit}>*/}
            {/*    <input*/}
            {/*        onChange={props.handleChange}*/}
            {/*        value={props.location}*/}
            {/*        type="name"*/}
            {/*        id="location"*/}
            {/*    />*/}
            {/*    <p>{props.location}</p>*/}
            {/*</form>*/}
            {/*<form onSubmit={props.onSubmit}>*/}
            {/*    <input*/}
            {/*        onChange={props.handleChange}*/}
            {/*        value={props.name}*/}
            {/*        type="name"*/}
            {/*        id="name"*/}
            {/*    />*/}
            {/*    <h2>{props.name}</h2>*/}
            {/*</form>*/}
            {/*<form onSubmit={props.onSubmit}>*/}
            {/*    <input*/}
            {/*        onChange={props.handleChange}*/}
            {/*        value={props.mail}*/}
            {/*        type="name"*/}
            {/*        id="mail"*/}
            {/*    />*/}
            {/*    <p>{props.mail}</p>*/}
            {/*</form>*/}
        </div>
    )
}

export default General;
