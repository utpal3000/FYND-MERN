## 📘 React Components – Detailed Notes

---

### 🔹 What is a Component?

A **React component** is a **reusable, independent piece of UI**. Think of components as JavaScript functions that return HTML (via JSX).

---

### 🔸 Types of Components

React has two main types of components:

#### 1. **Functional Components (Modern Standard)**

* **Simple JS functions**.
* Use **Hooks** (like `useState`, `useEffect`) for state and side effects.
* Recommended for all new React code.

```jsx
function Welcome() {
  return <h1>Hello, World!</h1>;
}
```

#### 2. **Class Components** (Older)

* Use ES6 classes.
* Use `this.state` and lifecycle methods like `componentDidMount()`.
* Still used in legacy codebases.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}
```

---

### 🔹 JSX – JavaScript + XML

JSX lets you **write HTML in JavaScript**. It looks like HTML, but it’s actually syntactic sugar for `React.createElement()`.

```jsx
const element = <h1>Welcome to React</h1>;
```

---

### 🔸 Component Naming & Syntax

* Component names **must start with a capital letter**.
* Must **return a single parent element**.
* Can accept **props** as arguments.

```jsx
function Greeting(props) {
  return <p>Hello, {props.name}!</p>;
}
```

---

### 🔹 Props – Component Inputs

**Props** are like function parameters, passed into components from the parent.

```jsx
<Greeting name="Utpal" />
```

* Props are **read-only**.
* Used to pass **data from parent to child**.

---

### 🔸 State – Component Memory

**State** is data managed inside a component, typically using `useState` in functional components.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>;
}
```

---

### 🔹 Component Composition

You can **nest components** inside others—React apps are built by composing many small components.

```jsx
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
```

---

### 🔸 Exporting Components

You need to export components to use them in other files:

```jsx
export default Header;
```

Then import where needed:

```jsx
import Header from './Header';
```

---

### 🔹 React Component Lifecycle (Class-based)

For **class components**, React provides lifecycle methods like:

* `componentDidMount()`
* `componentDidUpdate()`
* `componentWillUnmount()`

In **functional components**, use `useEffect()` for similar behavior.

---

### 🔸 Best Practices

* Keep components **small and focused**.
* Reuse components where possible.
* Use **camelCase** for props and **PascalCase** for component names.
* Group logic using **custom hooks** if it becomes complex.

---

## ✅ Summary Table

| Feature       | Functional Component | Class Component                 |
| ------------- | -------------------- | ------------------------------- |
| Syntax        | `function`           | `class extends React.Component` |
| State         | `useState` Hook      | `this.state`                    |
| Side Effects  | `useEffect` Hook     | `componentDidMount()` etc.      |
| Preferred Use | ✅ Yes                | ❌ Legacy only                   |

---


