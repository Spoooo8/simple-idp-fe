const pkceLearn = [
  {
    type: 'paragraph',
    text: `The useState hook is one of the most commonly used features in React. It lets you add state to functional components. Let’s see how it works.`,
  },
  {
    type: 'code',
    code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`,
  },
  {
    type: 'paragraph',
    text: `In the example above, useState returns a pair: the current state value and a function that lets you update it.`,
  },
  {
    type: 'heading',
    text: 'Why useState is Useful',
  },
  {
    type: 'paragraph',
    text: `React components by default don’t hold state. Using hooks like useState, we can store values like user input, toggles, or anything that changes during the lifecycle.`,
  },
  {
    type: 'code',
    code: `const [name, setName] = useState('Spoorthi');`,
  },
  {
    type: 'paragraph',
    text: `This allows the component to re-render when the state updates, making it interactive and dynamic.`,
  },
];

export default pkceLearn;