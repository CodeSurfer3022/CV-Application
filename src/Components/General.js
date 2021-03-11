import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

function General(props) {
  return (
    <div className="general flex">
      <div>
        <div id="firstName">
          <h1>First Name</h1>
          <input value="First Name" className="none"/>
        </div>
        <div id="lastName">
          <h1>Last Name</h1>
          <input value="Last Name" className="none"/>
        </div>
        <div id="designation">
          <p>Designation</p>
          <input value="Designation" className="none"/>
        </div>
        <div id="city">
          <p>City, Country</p>
          <input value="City, Country" className="none"/>
        </div>
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
          <input value="Phone" className="none" />
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope}/>
          <span>Email</span>
          <input value="Email" className="none" />
        </div>
        <div>
          <FontAwesomeIcon icon={faLinkedin}/>
          <span>Linkedin</span>
          <input value="Linkedin" className="none" />
        </div>
        <div>
          <FontAwesomeIcon icon={faGithubSquare}/>
          <span>Github</span>
          <input value="Github" className="none" />
        </div>
      </div>
    </div>
  )
}

export default General;
