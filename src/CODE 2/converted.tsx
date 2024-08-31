import React, { Component } from 'react';

// Step 2: Define an interface for the component's state
interface CounterState {
  count: number; // Step 2: Ensure the count is of type number
}

// Step 3: Type the component class by extending React.Component with props and state types
class Counter extends Component<{}, CounterState> {
  // Step 3: Initialize the state with correct types
  state: CounterState = {
    count: 0
  };

  // Step 4: Explicitly type the increment method
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
