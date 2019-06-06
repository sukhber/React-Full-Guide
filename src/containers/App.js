import React, { Component } from 'react';
import classes from './App.css';
//import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
//import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  switchNameHandler = (newName1, newName2) => {
    this.setState({
      persons:
        [
          { name: newName1, age: 65 },
          { name: newName2, age: 55 },
          { name: "Irani", age: 45 }
        ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.splice();    another way of creating a copy
    const persons = [...this.state.persons];   //creating a copy named persons using spread operator from original persons
    persons.splice(personIndex, 1); //removes 1 element from the given index
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    //const person = Object.assign({}, this.state.persons[personIndex]);    other way of creating person
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  state =
    {
      persons:
        [
          { id: "hgfhf", name: "modi", age: 65 },
          { id: "hgchg", name: "sunny", age: 55 },
          { id: "jhryd", name: "smriti", age: 45 }
        ],
      otherState: 'bhajpa',
      showPersons: false
    }

    //static getDerived

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
    };
    
    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}></Cockpit>
        {persons}
      </div>
    );
  }
}
export default App;