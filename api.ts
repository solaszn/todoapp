import { ITask } from "./types/tasks";

// const baseUrl = "http://localhost:3001";

// export const getAllTodos = async (): Promise<ITask[]> => {
//     const res = await fetch(`${baseUrl}/tasks`);
//     const todos = await res.json();
//     return todos;
// }



// ** From Ebenezer **

// import React, { useState, useEffect } from 'react';

// function Example() {
//   const [count, setCount] = useState(0);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   }, [count]);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }