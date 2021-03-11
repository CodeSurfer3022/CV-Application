import React, {Component} from 'react';
import General from "./Components/General";
import Employment from "./Components/Employment";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

function handleClick(e) {
    const element = e.target;
    const tag = e.target.tagName;
    console.log(element, tag);
    const active = (document.querySelector('.general').querySelector('input:not(.none)'));
    console.log(active)
    if(active) {
        active.classList.add('none');
        active.previousElementSibling.classList.remove('none');
    }

    if(tag === 'DIV' || tag === 'INPUT' || tag === 'IMG' || tag === 'BUTTON' ||
      tag === 'svg' || tag === 'path') return;

    // show the input and hide the element
    element.classList.add('none');
    const input = element.nextElementSibling;
    console.log(input);
    input.classList.remove('none');

}

function onSubmit (e) {
    e.preventDefault();
    console.log('ok')
    const form = e.target;
    const input = form.firstElementChild;
    const element = form.lastElementChild;
    console.log(input, element);

    // hide input and show the element
    input.style.display = 'none';
    element.classList.remove('hidden');
}

function handleChange (e) {
    const {value, id:name} = e.target;
    console.log(value, name);
    this.setState({
        [name]: value
    })
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "Bangalore, IN",
            name: "Chandra Prakash",
            mail: "chan@mail.com",
            job: "Software Engineer",
            company: "Ribbon Communications",
            employment: "July 2017 - Present",
            campus: "Vellore, IN",
            college: "VIT University",
            study: "July 2013 - May 2017",
            stream: "Computer Science and Engineering"
        }
    }

    render() {
        return (
            <div className="App" onClick={handleClick}>
                <General
                    // onSubmit={this.onSubmit}
                    // handleChange={this.handleChange}
                    // location={this.state.location}
                    // name={this.state.name}
                    // mail={this.state.mail}
                />
                <Employment
                    onSubmit={this.onSubmit}
                    handleChange={this.handleChange}
                    job={this.state.job}
                    company={this.state.company}
                    employment={this.state.employment}
                />
                <Education
                    onSubmit={this.onSubmit}
                    handleChange={this.handleChange}
                    campus={this.state.campus}
                    college={this.state.college}
                    study={this.state.study}
                />
                <Projects/>
                <Skills/>
            </div>
        )
    }
}

export default App;
