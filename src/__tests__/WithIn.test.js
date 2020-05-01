import React from 'react';
import { render, within } from '@testing-library/react';
import withIn from '../../withIn';


it('testing',()=>{
const { getByLabelText } = render(<withIn />);
const signinModal = getByLabelText('Sign In')
expect(within(signinModal).getByPlaceholderText('Username')).toBeTruthy();


});



