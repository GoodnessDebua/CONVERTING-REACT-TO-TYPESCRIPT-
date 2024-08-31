import React from 'react';

// Step 2: Define an interface for the props
interface GreetingProps {
  name: string; // Step 2: Type the name prop as a string
}

// Step 3: Convert the component to a TypeScript functional component using React.FC
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h2>Hello, {name}!</h2>;
};

export default Greeting;
