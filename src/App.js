import React, {Component} from 'react';
import General from "./Components/General";
import Employment from "./Components/Employment";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

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

    handleClick = (e) => {
        const element = e.target;
        const tag = e.target.tagName;
        console.log(tag)
        if(tag === 'DIV' || tag === 'INPUT' || tag === 'IMG' || tag === 'BUTTON') return;
        //
        // show the input and hide the element
        const div = element.parentNode;
        console.log(div.id);

        const input = document.createElement('input');
        input.value = element.textContent;
        input.id = div.id;

        div.removeChild(div.lastElementChild);
        div.appendChild(input);
    }

    onSubmit = (e) => {
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

    handleChange = (e) => {
        const {value, id:name} = e.target;
        console.log(value, name);
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="App" onClick={this.handleClick}>
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
