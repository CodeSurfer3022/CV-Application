import React, {Component} from "react";

function handleClick(e) {
  console.log(e.target);
  const form = document.querySelector('form[name="projectsForm"]');
  form.classList.remove('none');
  form.querySelector('input').select();
  e.target.classList.add('none');
}

function cancel(e) {
  e.preventDefault();
  const btn = document.querySelector('.projects').querySelector('#addForm');
  console.log(btn);
  const form = document.querySelector('form[name="projectsForm"]');
  form.classList.add('none');
  btn.classList.remove('none');
}

class Projects extends Component{
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  addProject = (e) => {
    e.preventDefault();
    const title = document.projectsForm.title.value;
    const description = document.projectsForm.description.value;

    this.setState((prevState) => {
      return { projects: [...prevState.projects, {title, description}]}
    })
    const close = document.querySelector('.projects').querySelector('#closeForm');
    close.click();
  }

  render() {
    return (
      <div className="projects">
        <h3>Projects</h3>
        <div>
          {this.state.projects.map(project => <div>
            {project.title}
            {project.description}
            <button>x</button>
          </div>)}
        </div>
        <form className="none" name="projectsForm">
          <div>
            <label>Title</label>
            <input placeholder="Title of your project" name="title"/>
            <label>Description</label>
            <input placeholder="A brief description of your project" name="description"/>

            <button id="closeForm" onClick={cancel}>Cancel</button>
            <button type="submit" onClick={this.addProject}>+ project</button>
          </div>
        </form>
        <button id="addForm" onClick={handleClick}>Add Projects</button>
      </div>
    )
  }
}

export default Projects;
