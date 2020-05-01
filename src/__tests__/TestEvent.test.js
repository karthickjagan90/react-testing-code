import React from 'react';
import { render, cleanup, fireEvent, getByTestId } from '@testing-library/react';
import TestEvents from '../../TestEvent'

afterEach(cleanup);

it('increment counter',()=>{
    const { getByTestId }=render(<TestEvents></TestEvents>);
    fireEvent.click(getByTestId('button-up'));
    expect(getByTestId('counter')).toHaveTextContent('1');
});

it('Decrement counter',()=>{
    const { getByTestId }=render(<TestEvents></TestEvents>);
    fireEvent.click(getByTestId('button-down'));
    expect(getByTestId('counter')).toHaveTextContent('-1');
})