# Technical Notes

## 📌 Networking / Linux

### TCP vs UDP
- **TCP (Transmission Control Protocol)** is a connection-oriented protocol that ensures reliable data transfer. It guarantees packet delivery, retransmits lost packets, and maintains order.
- **UDP (User Datagram Protocol)** is a connectionless protocol that does not guarantee delivery. It is faster than TCP and is used for real-time applications such as video streaming, VoIP, and online gaming.

### Swap Memory in Linux
- **Swap memory** is a portion of the disk space used as virtual memory when RAM is full.
- When the system runs out of RAM, inactive data is moved to swap to free up RAM for active processes.
- While swap helps prevent system crashes, it is much slower than physical RAM.

### Virtual Machines vs Containers
| Feature         | Virtual Machines       | Containers             |
|----------------|----------------------|----------------------|
| Isolation      | Full OS per VM        | Shares host OS kernel |
| Performance    | Heavier, requires more resources | Lightweight, faster  |
| Startup Time   | Slow (minutes)        | Fast (seconds)       |
| Use Cases      | Running different OS instances | Microservices, DevOps |

## 📌 Frontend / JavaScript / TypeScript  

### JavaScript is Single-Threaded
- JavaScript runs on a **single thread**, meaning it can execute only one operation at a time.
- To handle asynchronous tasks without blocking execution, JavaScript uses an **event loop** and **callback queue**.

### Event Loop, Call Stack, Callback Queue
- **Call Stack**: Stores function calls in a Last-In-First-Out (LIFO) order.
- **Callback Queue**: Holds asynchronous operations like setTimeout and fetch responses.
- **Event Loop**: Continuously checks if the call stack is empty. If it is, it takes the first callback from the queue and pushes it to the stack for execution.

### JavaScript Promises
- A **Promise** is an object that represents the eventual completion or failure of an asynchronous operation.
- Promises have three states: **Pending, Fulfilled, or Rejected**.
- They prevent **callback hell** by allowing `.then()` and `.catch()` chaining.

### Single Page Application (SPA)
- A **Single Page Application (SPA)** loads a single HTML page and dynamically updates content without requiring a full page reload.
- Uses technologies like **React, Angular, and Vue** to enhance performance and user experience.

### Cookies vs Local Storage
| Feature        | Cookies                 | Local Storage           |
|---------------|-------------------------|-------------------------|
| Storage Size  | ~4KB                     | ~5MB                    |
| Expiration    | Set manually, expires    | Persists until cleared  |
| Accessibility | Server & client          | Client-only             |
| Use Cases     | Authentication, sessions | Caching, user settings  |

### Virtual DOM in React
- **Virtual DOM** is a lightweight copy of the real DOM.
- React updates the Virtual DOM first, then applies only the necessary changes to the real DOM, improving performance.

### Shadow DOM in React
- **Shadow DOM** isolates styles and scripts of a component from the global scope.
- Prevents style conflicts in larger applications.

### React Fiber (Function Component, Hooks)
- **React Fiber** is the new rendering engine introduced in React 16, improving rendering performance and responsiveness.
- **Function Components** replaced class components, making code simpler.
- **Hooks** (e.g., `useState`, `useEffect`) allow function components to manage state and lifecycle events.

### Optimistic Update
- An **Optimistic Update** updates the UI **before** the server response is received.
- If the server confirms success, the change remains; if it fails, the UI reverts.
- Used in applications requiring **instant feedback**, such as social media likes.

### Centering an Element in HTML with CSS
```css
/* Using Flexbox */
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Using Grid */
.parent {
  display: grid;
  place-items: center;
  height: 100vh;
}
```

## 📌 Security

### CSRF (Cross-Site Request Forgery)
- **CSRF** is an attack where a user unknowingly performs an unwanted action on a trusted site.
- To prevent CSRF attacks:
  - Use **CSRF tokens** in forms and API requests.
  - Implement **SameSite cookies** to restrict cross-origin requests.

### CORS (Cross-Origin Resource Sharing)
- **CORS** is a security mechanism that restricts requests from different origins.
- By default, browsers block cross-origin requests unless the server explicitly allows them via **Access-Control-Allow-Origin** headers.

