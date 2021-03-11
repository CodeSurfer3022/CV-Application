import React, {Component} from "react";

function handleClick(e) {
  console.log(e.target);
  const form = document.querySelector('form[name="skills"]');
  form.classList.remove('none');
  e.target.classList.add('none');
}

function cancel(e) {
  e.preventDefault();
  const btn = document.querySelector('#addForm');
  console.log(btn);
  const form = document.querySelector('form[name="skills"]');
  form.classList.add('none');
  btn.classList.remove('none');
}

function addSkill() {

}

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    }
  }

  render() {
    return (
      <div className="skills">
        <form className="none" name="skills">
          <div>
            <label form="skills">Skills</label>
            <input placeholder="Add your top skills!" name="skills"/>
            <button onClick={cancel}>Cancel</button>
            <button onClick={addSkill}>+ skill</button>
          </div>
        </form>
        <button id="addForm" onClick={handleClick}>Add skill</button>
      </div>
    )
  }
}

export default Skills;
