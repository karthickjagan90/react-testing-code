// CheckboxWithLabel.js

import React from 'react';

export default class withIn extends React.Component {
  constructor(props) {
    super(props);
   

    // bind manually because React class components don't auto-bind
 
  }

  

  render() {
    return (
      
        <label >Sign In 
             <input placeholder="Username">welcome</input>
         </label>
      
    
    );
  }
}

/*

<form>
       <label >Sign In
            <input placeholder="Username">welcome</input>
      </label>
      </form>*/