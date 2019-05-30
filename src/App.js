import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

     state = 
     {
       persons : 
      [
        {name:"modi", age:65},
        {name:"sunny", age:55},
        {name:"smriti", age:45}
      ],
      otherState: 'bhajpa'
     }

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

     nameChangedHandler = (event) => {
      this.setState( {
        persons : 
        [
          {name: 'NaMo', age:65},
          {name: event.target.value, age:55},
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
render() {
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <button style={style} onClick={this.switchNameHandler.bind(this, 'NaMo', 'Deol')}>Switch Name</button>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'NaMo', 'Sunny Paaji')} changed={this.nameChangedHandler} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
    </div>
  );
}  
}

export default App;
