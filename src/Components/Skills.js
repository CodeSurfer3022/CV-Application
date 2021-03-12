import React, {Component} from "react";

function handleClick(e) {
  console.log(e.target);
  const form = document.querySelector('form[name="skillsForm"]');
  form.classList.remove('none');
  form.querySelector('input').select();
  e.target.classList.add('none');
}

function cancel(e) {
  e.preventDefault();
  const btn = document.querySelector('#addForm');
  console.log(btn);
  const form = document.querySelector('form[name="skillsForm"]');
  form.classList.add('none');
  btn.classList.remove('none');
}

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    }
  }

  addSkill = (e) => {
    e.preventDefault();
    const skill = document.skillsForm.skill.value;
    this.setState((prevState) => {
      return { skills: [...prevState.skills, skill]}
    })
    const close = document.querySelector('.skills').querySelector('#closeForm');
    close.click();
  }

  render() {
    return (
      <div className="skills">
        <h3>Skills</h3>
        <div className="flex">
          {this.state.skills.map(skill => <div className="skill">
            {skill}
            <button>x</button>
          </div>)}
        </div>
        <form className="none" name="skillsForm">
          <div>
            <input id="skill" placeholder="Add your top skills!" name="skill"/>
            <button id="closeForm" onClick={cancel}>Cancel</button>
            <button onClick={this.addSkill}>+ skill</button>
          </div>
        </form>
        <button id="addForm" onClick={handleClick}>Add skill</button>
      </div>
    )
  }
}

export default Skills;
