```javascript
import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Solution: Use functional update
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <div>Count: {count}</div>;
}
```