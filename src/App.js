import React, {Component} from 'react';
import Header from "./Components/Header";
import Employment from "./Components/Employment";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

class App extends Component {
    constructor() {
        super();
        this.state = {
            location: "Bangalore, IN",
            name: "Chandra Prakash",
            mail: "chan@mail.com"

        }
    }

    handleClick = (e) => {
        const element = e.target;
        const tag = e.target.tagName;
        if(tag === 'DIV' || tag === 'FORM' || tag === 'INPUT') return;

        // show the input and hide the element
        const form = element.parentNode;
        const input = element.previousSibling;
        console.log(form, input);

        element.classList.add('hidden');
        input.style.display = 'block';
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
                <Header
                    onSubmit={this.onSubmit}
                    handleChange={this.handleChange}
                    location={this.state.location}
                    name={this.state.name}
                    mail={this.state.mail}
                />
                <Employment/>
                <Education/>
                <Projects/>
                <Skills/>
            </div>
        )
    }
}

export default App;
