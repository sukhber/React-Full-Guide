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

     state2 = 
     {
       persons : 
      [
        {name:"rahul", age:55},
        {name:"sidhu", age:75},
        {name:"jakhad", age:49}
      ],
      otherState: 'congress'
     }

     switchNameHandler = (newName) => {
       //console.log('Was Clicked');
       this.setState( {
        persons : 
        [
          {name: newName, age:65},
          {name:"Deol", age:55},
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
  return (
    <div className="App">
      <h1>Hi!!!!!  I am a react app</h1>
      <p>This is really working</p>
      <button onClick={() => this.switchNameHandler('NaMo')}>Switch Name</button>
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Narendra Modi')}>My Hobbies: Racing</Person>
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      <strong>Aayega to.....)))</strong>
    </div>
  );
}  
}
      
     
    
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi!!!!!  I am a react app'));

export default App;
