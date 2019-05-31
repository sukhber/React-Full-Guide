import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

     

     switchNameHandler = (newName1, newName2) => {
       //console.log('Was Clicked');
       this.setState( {
        persons : 
        [
          {name: newName1, age:65},
          {name: newName2, age:55},
          {name:"Irani", age:45}
        ]  
       } );
     }

     
     /* 
     const [personsState, setpersonsState] = useState({
      persons : 
     [
       {name:"modi", age:65},
       {name:"sunny", age:55},
       {name:"smriti", age:45}
     ]
    });

    const [otherState, setotherState] = useState('some other state');
    
    const switchNameHandler = () => {
      //console.log('Was Clicked');
      setpersonsState( {
       persons : 
       [
         {name:"NaMo", age:65},
         {name:"Deol", age:55},
         {name:"Irani", age:45}
       ],
      }
      );
    }

    console.log(personsState);
    console.log(otherState);
*/
togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

deletePersonHandler = (personIndex) => {
  //const persons = this.state.persons.splice();    another way of creating a copy
const persons = [...this.state.persons];   //creating a copy named persons using spread operator from original persons
persons.splice(personIndex, 1); //removes 1 element from the given index
this.setState({persons: persons});
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
 this.setState( {persons: persons} );
}

state = 
     {
       persons : 
      [
        {id:"hgfhf", name:"modi", age:65},
        {id:"hgchg", name:"sunny", age:55},
        {id:"jhryd", name:"smriti", age:45}
      ],
      otherState: 'bhajpa',
      showPersons: false
     }

render() {
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let persons = null;

  if(this.state.showPersons) {
    persons = (
        <div>
          {this.state.persons.map((person, index) => {
          return <Person 
          click={this.deletePersonHandler.bind(this, index)} 
          name={person.name} 
          age={person.age} 
          key={person.id} 
          changed={(event) => this.nameChangedHandler(event, person.id)}>Balwant Rai Ke Kutte</Person>
        })}
        </div>
    );
  }

  return (
    <div className="App">
      <button style={style} onClick={this.togglePersonsHandler}>Switch Persons</button>
        {persons}
    </div>
  );
}  
}
export default App;
/*
<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'NaMo', 'Sunny Paaji')} changed={this.nameChangedHandler} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />*/