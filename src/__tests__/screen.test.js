//here we use Screen concept in dom testing library 
//if dom testing library use,then import { screen } from '@testing-library/dom';
//if react testing library use,then import {render, screen} from '@testing-library/react'

//queries used  getByLabelText,getByText,getByAltText,getByTitle,getByDisplayValue,etByTestId

import React from 'react';
//import { render, cleanup } from '@testing-library/react';
//import { screen } from '@testing-library/dom';
import {render, screen} from '@testing-library/react'
import MyComponent from '../../Mycomponent';
// NOTE: many framework-implementations of Testing Library
// re-export everything from `@testing-library/dom` so you
// may be able to import screen from your framework-implementation:
// import {render, screen} from '@testing-library/react'
it('',()=>{
    const exampleHTML = `
    <label for="example">Example</label>
    <input id="example" />
  `
  document.body.innerHTML = exampleHTML
  const exampleInput = screen.getByLabelText(/example/i);

  expect(exampleInput).toBeTruthy();
});


it('',()=>{
render(<MyComponent />)
const aboutAnchorNode = screen.getByText(/about/i);
expect(aboutAnchorNode).toBeTruthy();
})


//ByAltText
it('SUCCESS',()=>{
    const exampleHTML = `
    <img alt="Incredibles 2 Poster" src="/incredibles-2.png" />
  `
  document.body.innerHTML = exampleHTML
  const incrediblesPosterImg = screen.getByAltText(/incredibles.*? poster/i)

  expect(incrediblesPosterImg).toBeTruthy();
 
});


//ByTitle
it('TITLE',()=>{
    const exampleHTML = `
    <span title="Delete" id="2">hi</span>
    <svg>
    <title>Close</title>
    <g><path /></g>
    </svg>
  `
  
  document.body.innerHTML = exampleHTML
  const deleteElement = screen.getByTitle('Delete')
  const closeElement = screen.getByTitle('Close')

  expect(deleteElement).toBeTruthy();
 
});


it('display value',()=>{
    const exampleHTML=`
    <input type="text" id="lastName" />
    `
    
    document.body.innerHTML=exampleHTML
    document.getElementById('lastName').value = 'Norris';

    const lastNameInput = screen.getByDisplayValue('Norris')

    expect(lastNameInput).toBeTruthy();
})


//

it('display value',()=>{
    const exampleHTML=`
    <div data-testid="custom-element">welcome</div>
    `
    
    document.body.innerHTML=exampleHTML
    //document.getElementById('lastName').value = 'Norris';

    const lastNameInput = screen.getByTestId('custom-element');

    expect(lastNameInput).toBeTruthy();
})



//Text match

it('text match',()=>{
    const exampleHTML=`
    <div>Hello World</div>
    `
    
    document.body.innerHTML=exampleHTML
    //document.getElementById('lastName').value = 'Norris';

    // Matching a string:
const fullString=screen.getByText('Hello World') // full string match
const subString=screen.getByText('llo Worl', { exact: false }) // substring match
const ignore=screen.getByText('hello world', { exact: false }) // ignore case

// Matching a regex:
const substringMatch=screen.getByText(/World/) // substring match
const ignoreCase=screen.getByText(/world/i) // substring match, ignore case
const fullStringIgnore=screen.getByText(/^hello world$/i) // full string match, ignore case
const advanceRegax=screen.getByText(/Hello W?oRlD/i) // advanced regex

// Matching with a custom function:
const startsWith=screen.getByText((content, element) => content.startsWith('Hello'))

    expect(subString).toBeTruthy();
})


