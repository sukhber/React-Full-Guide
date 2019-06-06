import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

  if(props.persons.length <= 2) {
    assignedClasses.push(classes.red);                  //assignedClasses = ['red'];
  }

  if(props.persons.length <= 1) {
    assignedClasses.push(classes.bold);                //assignedClasses = ['red', 'bold'];
  }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}> Har Har Modi!!!! Ghar Ghar Modi!!!</p>
            <button 
                className={btnClass} 
                onClick={props.clicked}>Switch Persons
            </button>
      </div>
    );
};

export default cockpit;