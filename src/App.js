import React, { Component } from 'react';
import classes from './App.css';
//import Radium, {StyleRoot} from 'radium';
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
  /*const style = {
    backgroundColor: 'green',
    font: 'white',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    /*':hover': {
      backgroundColor: 'lightgreen',
      font: 'black'
    }
  };*/

  let persons = null;
  let btnClass = '';

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
    //style.backgroundColor = 'red';
    /*style[':hover'] = {
        backgroundColor: 'salmon',
        font: 'black'
    };*/
    btnClass = classes.Red;
  }
  //let classes = ['red', 'bold'].join(' ');   // converting to a single string("red bold")

  const assignedClasses = [];
  if(this.state.persons.length <= 2) {
    assignedClasses.push(classes.red);                  //assignedClasses = ['red'];
  }

  if(this.state.persons.length <= 1) {
    assignedClasses.push(classes.bold);                //assignedClasses = ['red', 'bold'];
  }

  return (
    //<StyleRoot>
      <div className={classes.App}>
        <p className={assignedClasses.join(' ')}> Har Har Modi!!!! Ghar Ghar Modi!!!</p>
        <button className={btnClass}/*style={style}*/ onClick={this.togglePersonsHandler}>Switch Persons</button>
          {persons}
      </div>
    //</StyleRoot>
  );
}  

}
export default App;

/*
<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'NaMo', 'Sunny Paaji')} changed={this.nameChangedHandler} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />*/