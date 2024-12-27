```javascript
// In a React 19 functional component using hooks:

import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render.  The problem occurs when 
    // attempting to update count inside the setTimeout.
    const timer = setTimeout(() => {
      setCount(count + 1); // Bug: count is stale
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <div>Count: {count}</div>;
}
```