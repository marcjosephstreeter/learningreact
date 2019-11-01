import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  });
  const switchNameHandler = () => {
    //console.log('Was clicked');
    // DON'T DO THIS this.state.persons[0].name='Maxmillian'
    setPersonsState({
      persons: [
        { name: 'Maxmillian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }
  return (
    <div className="App">
     <h1>Hi I'm a React App</h1>
     <p>this is reallly working!</p>
     <button onClick={switchNameHandler}>Switch Name</button>
     <Person name={personsState[0].name} age={personsState.persons[0].age}/>
     <Person name={personsState[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
     <Person name={personsState[2].name} age={personsState.persons[2].age}/>
    </div>
  );
  //return React.createElement('div', null,React.createElement('h1', {className: 'App'},'Does this work now?'));
}

export default app;
