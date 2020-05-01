///in this code we using screen which replace of container

//getByLabelText,getByPlaceholderText

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';

it('',()=>{
    const exampleHTML = `
    // for/htmlFor relationship between label and form element id
<label for="username-input">Username</label>
<input id="username-input" />

// The aria-labelledby attribute with form elements
<label id="username-label">Username</label>
<input aria-labelledby="username-label" />

// The aria-labelledby attribute with non-form elements
<section aria-labelledby="section-one-header">
  <h3 id="section-one-header">Section One</h3>
  <p>some content</p>
</section>

// Wrapper labels
<label>Username <input /></label>

// aria-label attributes
// Take care because this is not a label that users can see on the page,
// so the purpose of your input must be obvious to visual users.
<input aria-label="username" />

  `
  document.body.innerHTML = exampleHTML
  const inputNode = screen.getByLabelText('username');
  expect(inputNode).toBeTruthy();

});


it('',()=>{
  const exampleHTML=`
  <label> <span>Username</span> <input /> </label>
  `
  document.body.innerHTML = exampleHTML
  const inputNode = screen.getByLabelText('Username', { selector: 'input' });
  expect(inputNode).toBeTruthy();
});

it('',()=>{
    const exampleHTML=`
    <input placeholder="Username" />
    `
    document.body.innerHTML = exampleHTML
    const inputNode = screen.getByPlaceholderText('Username')
    expect(inputNode).toBeTruthy();
  });
