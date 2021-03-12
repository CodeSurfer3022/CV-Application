import React, {Component} from 'react';
import JobComponent from "./JobComponent";

function handleClick(e) {
  console.log(e.target);
  const form = document.querySelector('form[name="jobsForm"]');
  form.classList.remove('none');
  form.querySelector('input').select();
  e.target.classList.add('none');
}

function cancel(e) {
  e.preventDefault();
  const btn = document.querySelector('.projects').querySelector('#addForm');
  console.log(btn);
  const form = document.querySelector('form[name="jobsForm"]');
  form.classList.add('none');
  btn.classList.remove('none');
}

class Employment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    }

  }

  addExperience = (e) => {
    e.preventDefault();
    const {role, name, from, to, city, description} = document.jobsForm;

    this.setState((prevState) => {
      return {
        jobs: [...prevState.jobs, {
          role: role.value,
          company: name.value,
          from: from.value,
          to: to.value,
          city: city.value,
          description: description.value
        }]
      }
    })

    const close = document.querySelector('.jobs').querySelector('#closeForm');
    close.click();
  }

  render() {
    return (
      <div className="jobs">
        <h3>Employment</h3>
        <div>
          {this.state.jobs.map(job => <JobComponent details={job}/>)}
        </div>
        <form className="none" name="jobsForm">
          <label>Role</label>
          <input placeholder="Role" name="role"/>

          <label>Company Name</label>
          <input placeholder="Company Name" name="company"/>

          <label>From</label>
          <input placeholder="DD/MM/YYYY" name="from"/>

          <label>TO </label>
          <input placeholder="DD/MM/YYYY or Present" name="to"/>

          <label>City</label>
          <input placeholder="City" name="city"/>

          <label>Description</label>
          <input placeholder="Responsibilities and achievements" name="description"/>

          <button id="closeForm" onClick={cancel}>Cancel</button>
          <button onClick={this.addExperience}>+ Experience</button>
        </form>
        <button onClick={handleClick}>Add Work experience</button>
      </div>
    )
  }
}

export default Employment;
