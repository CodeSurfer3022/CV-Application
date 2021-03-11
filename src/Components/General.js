import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

function General(props) {
  return (
    <div className="general flex">
      <div>
        <div id="firstName">
          <h1>{props.details.firstName}</h1>
          <input onChange={props.handleChange} value={props.details.firstName} className="none"/>
        </div>
        <div id="lastName">
          <h1>{props.details.lastName}</h1>
          <input onChange={props.handleChange} value={props.details.lastName} className="none"/>
        </div>
        <div id="designation">
          <p>{props.details.designation}</p>
          <input onChange={props.handleChange} value={props.details.designation} className="none"/>
        </div>
        <div id="city">
          <p>{props.details.city}</p>
          <input onChange={props.handleChange} value={props.details.city} className="none"/>
        </div>
      </div>
      <div>
        <div className="profile-pic">
          <img src='Cv-application/images/profile%20pic.jpg' alt="profile pic"/>
        </div>
      </div>
      <div id="links">
        <div id="phone">
          <FontAwesomeIcon icon={faPhoneAlt}/>
          <span>{props.details.phone}</span>
          <input onChange={props.handleChange} value={props.details.phone} className="none" />
        </div>
        <div id="email">
          <FontAwesomeIcon icon={faEnvelope}/>
          <span>{props.details.email}</span>
          <input onChange={props.handleChange} value={props.details.email} className="none" />
        </div>
        <div id="linkedin">
          <FontAwesomeIcon icon={faLinkedin}/>
          <span>{props.details.linkedin}</span>
          <input onChange={props.handleChange} value={props.details.linkedin} className="none" />
        </div>
        <div id="github">
          <FontAwesomeIcon icon={faGithubSquare}/>
          <span>{props.details.github}</span>
          <input onChange={props.handleChange} value={props.details.github} className="none" />
        </div>
      </div>
    </div>
  )
}

export default General;
