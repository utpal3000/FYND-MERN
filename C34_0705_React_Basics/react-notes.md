# React 

## Basics 

### Components
1. use CamelCase
2. First letter should be in Caps
3. It should return one element only.
4. Props is equivalent to arguments

React basics! These notes will cover setting up a project with Vite, understanding essential packages, working with components, and different styling approaches.

---

## React Basics Notes

React is a declarative, component-based JavaScript library for building user interfaces.

### 1. Setting Up a React Project with Vite

Vite is a fast and lightweight build tool that offers a quicker development experience compared to Create React App.

#### Prerequisites:

* **Node.js:** Make sure you have Node.js installed (it includes npm, the Node Package Manager). You can download it from [nodejs.org](https://nodejs.org/).

#### Steps:

1.  **Create a new Vite Project:**
    Open your terminal or command prompt and run:
    ```bash
    npm create vite@latest my-react-app -- --template react
    ```
    * `npm create vite@latest`: This command uses `npm` to execute the `create-vite` package, which scaffolds a new Vite project.
    * `my-react-app`: This will be the name of your project directory. You can replace it with your desired project name.
    * `-- --template react`: This tells Vite to use the `react` template, setting up a basic React project structure.

2.  **Navigate into your project directory:**
    ```bash
    cd my-react-app
    ```

3.  **Install Dependencies:**
    ```bash
    npm install
    ```
    This command reads the `package.json` file and installs all the necessary packages listed under `dependencies` and `devDependencies`.

4.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
    This command starts a local development server (usually at `http://localhost:5173/`). You'll see your React app running in your browser.

#### Project Structure (after setup):

```
my-react-app/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.jsx        // Main application component
│   ├── index.css
│   ├── main.jsx       // Entry point of your React application
│   └── Counter.jsx (or other components you create)
├── .eslintrc.cjs      // ESLint configuration (for code quality)
├── .gitignore
├── index.html         // The main HTML file where your React app is injected
├── package.json       // Project metadata and dependencies
├── package-lock.json  // Records the exact versions of installed packages
├── vite.config.js     // Vite configuration file
└── README.md
```

### 2. Essential Packages (Dependencies)

When you set up a React project, `package.json` lists the core dependencies.

* **`react`**: The core React library itself. It provides the `React` object and tools for defining components, managing state, and interacting with the DOM.
* **`react-dom`**: This package provides DOM-specific methods that enable React to interact with the browser's DOM. It's used to "mount" your React application onto the `index.html` file.
* **`@vitejs/plugin-react` (as a dev dependency)**: A Vite-specific plugin that enables Fast Refresh and JSX transformation for React applications.

**Common Additional Packages (Examples):**

* **`react-router-dom`**: For client-side routing within your React application (e.g., navigating between different "pages" without full page reloads).
* **`axios` or `Workspace` (built-in)**: For making HTTP requests to APIs to fetch or send data.
* **State Management Libraries**:
    * **`redux` / `react-redux`**: A predictable state container for JavaScript applications.
    * **`zustand` / `jotai` / `valtio`**: Lighter-weight alternatives for state management.
    * **`recoil`**: From Facebook, for atomic state management.
    * **Context API (built-in)**: For passing data through the component tree without having to pass props down manually at every level.
* **UI Libraries**:
    * **`material-ui` (MUI)**, **`chakra-ui`**, **`ant-design`**, **`bootstrap` (`react-bootstrap`)**: Provide pre-built, styled UI components.

To install a package:
```bash
npm install package-name
# or for a dev dependency
npm install package-name --save-dev
```

### 3. Components in React

Components are the building blocks of any React application. They are isolated, reusable pieces of code that return React elements (what you want to see on the screen).

#### Types of Components:

React applications primarily use **Functional Components**. Class Components are older and less common in modern React development.

* **Functional Components (Modern React)**:
    * These are JavaScript functions that accept an object of `props` (properties) as their argument and return JSX.
    * They are simpler to write and read.
    * They use **Hooks** (like `useState`, `useEffect`) to manage state, lifecycle, and side effects.

    **Example (`src/components/MyComponent.jsx`):**
    ```jsx
    // components/MyComponent.jsx
    import React from 'react'; // No longer strictly necessary for JSX in React 17+

    function MyComponent(props) { // u can also use de-struct if more than one props eg. {name,age}
      return (
        <div>
          <h1>Hello, {props.name}!</h1> 
          <!-- It would be {name} is using de-struct -->
          <p>This is a functional component.</p>
        </div>
      );
    }

    export default MyComponent;
    ```

    **Usage in `App.jsx`:**
    ```jsx
    // App.jsx
    import MyComponent from './components/MyComponent'; // Adjust path if needed

    function App() {
      return (
        <div>
          <MyComponent name="React Learner" />
          <MyComponent name="Vite User" />
        </div>
      );
    }

    export default App;
    ```

#### Key Concepts for Components:

* **JSX (JavaScript XML)**:
    * A syntax extension for JavaScript that allows you to write HTML-like code directly within your JavaScript files.
    * It's not HTML; it's compiled by tools like Babel (or Vite's underlying compiler) into plain JavaScript function calls.
    * **Rules:**
        * Must have a single root element (or use a `<>...</>` Fragment).
        * Use `className` instead of `class` for CSS classes.
        * Use `htmlFor` instead of `for` for form labels.
        * CamelCase for HTML attributes (e.g., `onClick`, `readOnly`).
        * JavaScript expressions within JSX are enclosed in curly braces `{}`.

    ```jsx
    const userName = "Alice";
    const element = <h1>Hello, {userName}!</h1>;
    ```

* **Props (Properties)**:
    * Read-only data passed from a parent component to a child component.
    * Allow components to be reusable and configurable.
    * Passed as attributes to a component, similar to HTML attributes.

    **Parent (`App.jsx`):**
    ```jsx
    <Greeting message="Welcome!" />
    ```
    **Child (`Greeting.jsx`):**
    ```jsx
    function Greeting(props) {
      return <h1>{props.message}</h1>;
    }
    ```

* **State**:
    * Data that belongs to a component and can change over time.
    * When state changes, the component re-renders.
    * Managed using the `useState` Hook in functional components.

    **Example (`Counter.jsx`):**
    ```jsx
    import React, { useState } from 'react';

    function Counter() {
      const [count, setCount] = useState(0); // [current_state_value, function_to_update_state]

      const increment = () => {
        setCount(count + 1);
      };

      const decrement = () => {
        setCount(count - 1);
      };

      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      );
    }

    export default Counter;
    ```

* **Lifecycle and Hooks**:
    * **Hooks** are functions that let you "hook into" React features from functional components. They allow you to manage state, side effects, and component lifecycle without writing class components.

    * **`useState`**: (Covered above) Adds state to functional components.

    * **`useEffect`**: For handling side effects (operations that affect the "outside world" or are not part of the rendering logic), such as:
        * Data fetching from APIs
        * DOM manipulation
        * Setting up subscriptions or timers
        * Updating the document title

        **Syntax:**
        ```jsx
        useEffect(() => {
          // Code to run after every render (initially and on updates)

          return () => {
            // Cleanup function (optional): runs before the component unmounts
            // or before the effect runs again due to dependency changes.
          };
        }, [dependencies]); // Dependency array (optional)
        ```
        * **No dependency array (`useEffect(() => { ... })`)**: Runs after every render.
        * **Empty dependency array (`useEffect(() => { ... }, [])`)**: Runs only once after the initial render (like `componentDidMount` in class components). Useful for initial data fetching.
        * **With dependencies (`useEffect(() => { ... }, [prop1, state2])`)**: Runs when the component mounts and whenever any value in the dependency array changes.

        **Example:**
        ```jsx
        import React, { useState, useEffect } from 'react';

        function DataFetcher() {
          const [data, setData] = useState(null);
          const [loading, setLoading] = useState(true);

          useEffect(() => {
            // This effect runs once after the initial render
            fetch('https://jsonplaceholder.typicode.com/todos/1')
              .then(response => response.json())
              .then(json => {
                setData(json);
                setLoading(false);
              });

            return () => {
              // Cleanup if needed (e.g., cancel ongoing requests)
            };
          }, []); // Empty dependency array means it runs only once on mount

          if (loading) return <p>Loading data...</p>;

          return (
            <div>
              <h2>Fetched Data:</h2>
              <p>Title: {data.title}</p>
              <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
            </div>
          );
        }

        export default DataFetcher;
        ```

    * **Other Hooks:**
        * `useContext`: For consuming values from the React Context API.
        * `useRef`: For accessing DOM elements directly or for persistent values across renders without causing re-renders.
        * `useCallback`, `useMemo`: For performance optimization (memoizing functions and values).
        * `useReducer`: An alternative to `useState` for more complex state logic.

### 4. Styling in React

You have several options for styling your React components, ranging from simple CSS to more advanced solutions.

#### a. Standard CSS / Global Styles

* **How it works:** You write regular `.css` files and import them into your components.
* **Pros:** Familiar, easy for global styles.
* **Cons:** Global scope (styles can unintentionally affect other components), potential for naming conflicts, no direct component-level encapsulation.

**Example:**
1.  Create `App.css`:
    ```css
    /* App.css */
    .App {
      text-align: center;
      padding: 20px;
    }

    .header {
      color: #333;
    }
    ```
2.  Import and use in `App.jsx`:
    ```jsx
    import React from 'react';
    import './App.css'; // Import the CSS file

    function App() {
      return (
        <div className="App">
          <h1 className="header">My React App</h1>
          <p>Styling with standard CSS.</p>
        </div>
      );
    }

    export default App;
    ```
    Vite's default setup often includes `index.css` for global styles and `App.css` for component-specific styles for the `App` component.

#### b. CSS Modules

* **How it works:** A CSS file becomes a "module," and all class names and animation names are automatically scoped locally to the component. This prevents naming conflicts.
* **File Naming Convention:** `[name].module.css` (e.g., `Button.module.css`).
* **Pros:** Localized scope (no global conflicts), easier to manage component-specific styles.
* **Cons:** Requires a build step (Vite handles this automatically).

**Example:**
1.  Create `Button.module.css`:
    ```css
    /* Button.module.css */
    .button {
      background-color: #007bff;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .button:hover {
      background-color: #0056b3;
    }
    ```
2.  Import and use in `MyComponent.jsx`:
    ```jsx
    import React from 'react';
    import styles from './Button.module.css'; // Import as a JavaScript object

    function MyComponent() {
      return (
        <div>
          <button className={styles.button}>Click Me</button>
        </div>
      );
    }

    export default MyComponent;
    ```
    Notice `styles.button` – the imported `styles` object contains the locally scoped class names.

#### c. Inline Styles

* **How it works:** Styles are applied directly to elements using a JavaScript object.
* **Pros:** Very localized, easy for dynamic styles based on component state/props.
* **Cons:** Not true CSS (no pseudo-classes, media queries), poor separation of concerns, less performant for complex styles, values are strings.

**Example:**
```jsx
import React from 'react';

function MyComponent() {
  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px',
    borderRadius: '8px',
    cursor: 'pointer'
  };

  const isWarning = true;
  const messageStyle = {
    color: isWarning ? 'red' : 'blue',
    fontSize: '16px'
  };

  return (
    <div>
      <button style={buttonStyle}>Inline Styled Button</button>
      <p style={messageStyle}>This text changes color.</p>
    </div>
  );
}

export default MyComponent;
```
**Note:** CSS properties in inline styles are camelCased (e.g., `background-color` becomes `backgroundColor`).

#### d. CSS-in-JS Libraries

* **How it works:** Write CSS directly within your JavaScript files, often using tagged template literals. Libraries like `styled-components` or `emotion`.
* **Pros:** Strong component encapsulation, dynamic styling based on props/state, colocation of styles and components, server-side rendering support.
* **Cons:** Adds a dependency, learning curve, can sometimes have a performance overhead for very large applications.

**Example (using `styled-components` - requires `npm install styled-components`):**
```jsx
import React from 'react';
import styled from 'styled-components';

// Define a styled component
const StyledButton = styled.button`
  background-color: ${props => (props.primary ? '#007bff' : '#6c757d')};
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.primary ? '#0056b3' : '#5a6268')};
  }
`;

function MyComponent() {
  return (
    <div>
      <StyledButton primary>Primary Button</StyledButton>
      <StyledButton>Secondary Button</StyledButton>
    </div>
  );
}

export default MyComponent;
```

---

This should give you a solid foundation for starting with React using Vite! As you progress, you'll naturally explore more advanced topics and libraries. Happy coding!

