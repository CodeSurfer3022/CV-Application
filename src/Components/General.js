import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

function General(props) {
  return (
    <div className="general flex">
      <div>
        <div id="firstName"><h1>First Name</h1></div>
        <div><h1>Last Name</h1></div>
        <div><p>Designation</p></div>
        <div><p>City, Country</p></div>
      </div>
      <div>
        <div className="profile-pic">
          <img src='Cv-application/images/profile%20pic.jpg' alt="profile pic"/>
        </div>
      </div>
      <div id="links">
        <div>
          <FontAwesomeIcon icon={faPhoneAlt}/>
          <span>Phone</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope}/>
          <span>Email</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faLinkedin}/>
          <span>Linkedin</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faGithubSquare}/>
          <span>Github</span>
        </div>
      </div>
    </div>
  )
}

export default General;
