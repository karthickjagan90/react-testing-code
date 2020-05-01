import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'

const TestComponent = () => {
  const [count, setCounter] = useState(0)

  return (
    <button onClick={() => setCounter(count => count + 1)}>
      Click to increase: {count}
    </button>
  )
}

it('matchdiff',()=>{
    const { getByText, asFragment } = render(<TestComponent />)
    const firstRender = asFragment()
    
    fireEvent.click(getByText(/Click to increase/))
    
    // This will snapshot only the difference between the first render, and the
    // state of the DOM after the click event.
    // See https://github.com/jest-community/snapshot-diff
    //expect(firstRender).toMatchDiffSnapshot(asFragment())
});

