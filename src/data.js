export const data = {
    HTML: [
      {
        title: "HTML HOME",
        description:
          "HTML (HyperText Markup Language) is the standard language for creating webpages. It structures content on the web and works alongside CSS and JavaScript.",
        example: `<!DOCTYPE html>
    <html>
    <head>
    <title>My First HTML</title>
    </head>
    <body>
    <h1>Hello, World!</h1>
    </body>
    </html>`,
      },
      {
        title: "HTML Introduction",
        description:
          "HTML is the foundation of web development. It defines the structure of web pages using elements represented by tags.",
        example: `<html>
    <head>
      <title>Introduction to HTML</title>
    </head>
    <body>
      <h1>Welcome to HTML</h1>
      <p>This is an introductory page.</p>
    </body>
    </html>`,
      },
      {
        title: "HTML Editors",
        description:
          "HTML code can be written in simple text editors like Notepad, VS Code, Sublime Text, or Atom.",
        example: `// Steps to write HTML in VS Code:
    // 1. Open VS Code
    // 2. Create a new file and save as index.html
    // 3. Type your HTML code
    // 4. Open in a browser to preview`,
      },
      {
        title: "HTML Basic",
        description:
          "Basic HTML consists of fundamental elements such as headings, paragraphs, links, and images.",
        example: `<h1>My First Heading</h1>
    <p>My first paragraph.</p>
    <a href="https://www.example.com">Click here</a>`,
      },
      {
        title: "HTML Elements",
        description:
          "HTML elements represent different parts of a web page. They include headings, paragraphs, tables, forms, etc.",
        example: `<h1>Heading</h1>
    <p>Paragraph</p>
    <button>Click Me</button>`,
      },
      {
        title: "HTML Attributes",
        description:
          "HTML attributes provide additional information about elements, such as style, class, or ID.",
        example: `<img src="image.jpg" alt="Image description">
    <a href="https://www.example.com" target="_blank">Visit Example</a>`,
      },
      {
        title: "HTML Headings",
        description:
          "HTML has six heading tags from h1 (largest) to h6 (smallest).",
        example: `<h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>`,
      },
      {
        title: "HTML Paragraphs",
        description: "Paragraphs in HTML are created using the <p> tag.",
        example: `<p>This is a paragraph.</p>
    <p>This is another paragraph.</p>`,
      },
      {
        title: "HTML Styles",
        description:
          "HTML styles allow you to apply CSS directly inside an element using the style attribute.",
        example: `<p style="color: blue; font-size: 20px;">This is a styled paragraph.</p>`,
      },
      {
        title: "HTML Formatting",
        description:
          "HTML provides text formatting tags such as bold, italic, and underline.",
        example: `<b>Bold Text</b>
    <i>Italic Text</i>
    <u>Underlined Text</u>`,
      },
      {
        title: "HTML Quotations",
        description:
          "HTML provides tags for quoting text such as <blockquote> and <q>.",
        example: `<blockquote> This is a long quote.</blockquote>
    <p><q>This is a short quote.</q></p>`,
      },
      {
        title: "HTML Comments",
        description:
          "HTML comments are used to add notes inside the code, which browsers ignore.",
        example: `<!-- This is a comment -->
    <p>This is visible content.</p>`,
      },
      {
        title: "HTML Colors",
        description:
          "HTML supports different ways to define colors: names, RGB, HEX, and HSL.",
        example: `<p style="color: red;">This is red text.</p>
    <p style="color: #00ff00;">This is green text.</p>`,
      },
      {
        title: "HTML Links",
        description:
          "Links are created using the <a> tag. They allow navigation to different pages.",
        example: `<a href="https://www.example.com">Visit Example</a>`,
      },
      {
        title: "HTML Images",
        description: "Images in HTML are displayed using the <img> tag.",
        example: `<img src="image.jpg" alt="Sample Image" width="200">`,
      },
      {
        title: "HTML Tables",
        description:
          "HTML tables are created using the <table> tag, which contains rows and columns.",
        example: `<table border="1">
    <tr><th>Name</th><th>Age</th></tr>
    <tr><td>Alice</td><td>25</td></tr>
    <tr><td>Bob</td><td>30</td></tr>
    </table>`,
      },
      {
        title: "HTML Forms",
        description:
          "HTML forms allow users to enter data, which is submitted to a server.",
        example: `<form>
    <label>Name:</label>
    <input type="text">
    <input type="submit" value="Submit">
    </form>`,
      },
      {
        title: "HTML Input Types",
        description:
          "HTML provides various input types for forms, such as text, email, and password.",
        example: `<input type="text" placeholder="Enter Name">
    <input type="email" placeholder="Enter Email">
    <input type="password" placeholder="Enter Password">`,
      },
      {
        title: "HTML Media",
        description: "HTML supports embedding media such as audio and video.",
        example: `<audio controls>
      <source src="audio.mp3" type="audio/mpeg">
    </audio>
    <video controls width="300">
      <source src="video.mp4" type="video/mp4">
    </video>`,
      },
      {
        title: "HTML SVG",
        description:
          "SVG (Scalable Vector Graphics) is used for creating vector graphics.",
        example: `<svg width="100" height="100">
      <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    </svg>`,
      },
      {
        title: "HTML DragDrop",
        description:
          "The Drag and Drop API allows users to drag elements around the webpage.",
        example: `<div draggable="true" style="width:100px;height:100px;background:red;">
    Drag Me
    </div>`,
      },
      {
        title: "HTML Web Storage",
        description:
          "Web Storage allows storing data in the browser using localStorage and sessionStorage.",
        example: `// Store data in localStorage
    localStorage.setItem("username", "John");
    
    // Retrieve data
    let user = localStorage.getItem("username");`,
      },
      {
        title: "HTML Web Workers",
        description:
          "Web Workers allow background tasks to run without affecting the UI.",
        example: `// Create a new worker
    var worker = new Worker('worker.js');`,
      },
    ],
    CSS: [
      {
        title: "CSS HOME",
        description:
          "CSS (Cascading Style Sheets) is used to style HTML elements and control the layout of web pages. It allows us to apply colors, fonts, spacing, and positioning to elements.",
        example: `body {
      background-color: lightgray;
    }
    
    h1 {
      color: blue;
      text-align: center;
    }
    
    p {
      font-size: 18px;
      color: darkgray;
    }`,
      },
      {
        title: "CSS Introduction",
        description:
          "CSS is a stylesheet language that describes how HTML elements should be displayed on a screen, paper, or other media. It allows web developers to create visually engaging websites.",
        example: `/* This CSS changes the background color and text color */
    body {
      background-color: #f4f4f4;
    }
    
    h1 {
      color: #333;
      font-size: 24px;
    }`,
      },
      {
        title: "CSS Syntax",
        description:
          "CSS syntax consists of a selector and a declaration block. The declaration block contains properties and their corresponding values, enclosed within curly braces {}.",
        example: `/* CSS Syntax Example */
    selector {
      property: value;
      another-property: another-value;
    }`,
      },
      {
        title: "CSS Selectors",
        description:
          "CSS selectors are used to target HTML elements and apply styles. Common types include element selectors, class selectors, ID selectors, and attribute selectors.",
        example: `/* Element Selector */
    p {
      color: red;
    }
    
    /* Class Selector */
    .my-class {
      font-size: 20px;
    }
    
    /* ID Selector */
    #my-id {
      background-color: yellow;
    }`,
      },
      {
        title: "CSS How To",
        description:
          "CSS can be applied in three ways: inline, internal, and external. External stylesheets are recommended for better maintainability.",
        example: `/* External CSS */
    <link rel="stylesheet" href="styles.css">
    
    /* Internal CSS */
    <style>
      p {
        color: green;
      }
    </style>
    
    /* Inline CSS */
    <p style="color: blue;">This is a paragraph.</p>`,
      },
      {
        title: "CSS Comments",
        description:
          "Comments in CSS help explain the code and are ignored by browsers. They are written inside /* */.",
        example: `/* This is a single-line comment */
    p {
      color: red; /* This changes text color to red */
    }`,
      },
      {
        title: "CSS Colors",
        description:
          "CSS allows specifying colors using names, HEX codes, RGB, and HSL values.",
        example: `/* Named Color */
    p {
      color: blue;
    }
    
    /* HEX Code */
    h1 {
      color: #ff5733;
    }
    
    /* RGB */
    div {
      background-color: rgb(255, 0, 0);
    }`,
      },
      {
        title: "CSS Backgrounds",
        description:
          "The background properties in CSS allow setting background colors, images, gradients, and more.",
        example: `body {
      background-color: #f0f0f0;
      background-image: url('background.jpg');
      background-size: cover;
    }`,
      },
      {
        title: "CSS Borders",
        description:
          "Borders define the outline of an element and can be solid, dashed, dotted, or double.",
        example: `div {
      border: 2px solid black;
      border-radius: 10px;
    }`,
      },
      {
        title: "CSS Margins",
        description:
          "Margins create space outside an element, separating it from other elements.",
        example: `p {
      margin: 20px;
    }`,
      },
      {
        title: "CSS Padding",
        description:
          "Padding adds space inside an element, between its content and its border.",
        example: `div {
      padding: 15px;
    }`,
      },
      {
        title: "CSS Height/Width",
        description:
          "CSS allows setting the height and width of elements using pixels, percentages, or other units.",
        example: `div {
      width: 100px;
      height: 50px;
    }`,
      },
      {
        title: "CSS Box Model",
        description:
          "The box model consists of margins, borders, padding, and the content area.",
        example: `div {
      width: 200px;
      padding: 20px;
      border: 5px solid black;
      margin: 10px;
    }`,
      },
      {
        title: "CSS Outline",
        description:
          "Outlines are similar to borders but do not take up space in the box model.",
        example: `p {
      outline: 2px dashed blue;
    }`,
      },
      {
        title: "CSS Text",
        description:
          "CSS text properties control the font, size, alignment, and decoration of text.",
        example: `h1 {
      text-align: center;
      text-decoration: underline;
    }`,
      },
      {
        title: "CSS Fonts",
        description:
          "CSS fonts allow styling text using font-family, font-size, and font-weight.",
        example: `p {
      font-family: Arial, sans-serif;
      font-size: 16px;
    }`,
      },
      {
        title: "CSS Position",
        description:
          "The position property allows elements to be positioned relative to their normal placement.",
        example: `.box {
      position: absolute;
      top: 50px;
      left: 100px;
    }`,
      },
      {
        title: "CSS Overflow",
        description:
          "The overflow property controls how content that exceeds an element’s size is handled.",
        example: `.container {
      width: 200px;
      height: 100px;
      overflow: scroll;
    }`,
      },
      {
        title: "CSS Flexbox",
        description:
          "Flexbox is a layout model that arranges elements efficiently inside a container.",
        example: `.container {
      display: flex;
      justify-content: center;
      align-items: center;
    }`,
      },
      {
        title: "CSS Grid",
        description:
          "CSS Grid is a two-dimensional layout system for organizing content.",
        example: `.grid-container {
      display: grid;
      grid-template-columns: auto auto auto;
    }`,
      },
    ],
  
    JavaScript: [
      {
        title: "Introduction",
        description:
          "JavaScript is a versatile, high-level programming language used for web development. It enables interactive elements on websites, supports object-oriented, functional, and procedural programming, and runs in the browser and on servers via Node.js.",
        example: `console.log("Welcome to JavaScript!");`,
      },
      {
        title: "Where To",
        description:
          "JavaScript can be added to an HTML document using a <script> tag. It can be written inline, inside a <script> block, or included as an external file.",
        example: `<script src="script.js"></script>`,
      },
      {
        title: "Output",
        description:
          "JavaScript provides multiple ways to display output: console.log(), alert(), document.write(), and innerHTML.",
        example: `console.log("Hello, World!");`,
      },
      {
        title: "Statements",
        description:
          "JavaScript statements are instructions executed by the browser. Each statement is terminated by a semicolon (optional in most cases).",
        example: `let x = 5; let y = 10; console.log(x + y);`,
      },
      {
        title: "Syntax",
        description:
          "JavaScript syntax defines the set of rules for writing programs. It includes variables, operators, expressions, and statements.",
        example: `let a = 10; if (a > 5) { console.log("A is greater than 5"); }`,
      },
      {
        title: "Comments",
        description:
          "Comments are used to add notes or explanations in JavaScript code. They can be single-line (//) or multi-line (/* ... */).",
        example: `// This is a single-line comment \n/* This is a multi-line comment */`,
      },
      {
        title: "Variables",
        description:
          "Variables are used to store data. JavaScript supports var (old), let (ES6), and const (constant values).",
        example: `let name = "John"; console.log(name);`,
      },
      {
        title: "Let",
        description:
          "The let keyword declares a block-scoped variable, which cannot be re-declared but can be updated.",
        example: `let age = 25; age = 30; console.log(age);`,
      },
      {
        title: "Const",
        description:
          "The const keyword declares a block-scoped variable that cannot be reassigned after initialization.",
        example: `const PI = 3.1416; console.log(PI);`,
      },
      {
        title: "Operators",
        description:
          "JavaScript operators perform operations on variables and values. They include arithmetic, assignment, comparison, logical, and bitwise operators.",
        example: `let sum = 5 + 3; console.log(sum);`,
      },
      {
        title: "Arithmetic",
        description:
          "Arithmetic operators include +, -, *, /, %, ** (exponentiation), and ++/-- (increment/decrement).",
        example: `let result = 10 * 2; console.log(result);`,
      },
      {
        title: "Assignment",
        description:
          "Assignment operators assign values to variables (e.g., =, +=, -=, *=, /=).",
        example: `let x = 10; x += 5; console.log(x);`,
      },
      {
        title: "Data Types",
        description:
          "JavaScript supports primitive data types (String, Number, Boolean, Undefined, Null, Symbol, BigInt) and objects.",
        example: `let str = "Hello"; let num = 42; let flag = true;`,
      },
      {
        title: "Functions",
        description:
          "Functions are reusable blocks of code that perform specific tasks. They can accept parameters and return values.",
        example: `function greet(name) { return "Hello, " + name; } console.log(greet("Alice"));`,
      },
      {
        title: "Objects",
        description:
          "Objects store multiple properties and methods in key-value pairs.",
        example: `const car = { brand: "Tesla", model: "Model 3", year: 2022 };`,
      },
      {
        title: "Object Properties",
        description:
          "Properties store values inside an object and can be accessed using dot or bracket notation.",
        example: `console.log(car.brand);`,
      },
      {
        title: "Object Methods",
        description: "Methods are functions defined inside an object.",
        example: `const person = { name: "John", greet() { return "Hello, " + this.name; } };`,
      },
      {
        title: "Object Display",
        description:
          "JavaScript provides various ways to display object data, including console.log(), JSON.stringify(), and loops.",
        example: `console.log(JSON.stringify(person));`,
      },
      {
        title: "Events",
        description:
          "JavaScript events respond to user interactions such as clicks, key presses, and mouse movements.",
        example: `document.getElementById("btn").addEventListener("click", function() { alert("Button clicked!"); });`,
      },
      {
        title: "String Methods",
        description:
          "JavaScript provides various methods to manipulate strings, including length, toUpperCase(), toLowerCase(), and trim().",
        example: `console.log("hello".toUpperCase());`,
      },
      {
        title: "Arrays",
        description:
          "Arrays store multiple values in a single variable and support various manipulation methods.",
        example: `const colors = ["Red", "Green", "Blue"];`,
      },
      {
        title: "Loop For",
        description:
          "The for loop executes a block of code a specific number of times.",
        example: `for (let i = 0; i < 5; i++) { console.log(i); }`,
      },
      {
        title: "Loop While",
        description: "The while loop executes as long as the condition is true.",
        example: `let i = 0; while (i < 5) { console.log(i); i++; }`,
      },
      {
        title: "Type Conversion",
        description:
          "JavaScript allows implicit and explicit type conversion between data types.",
        example: `let num = "5"; console.log(Number(num) + 10);`,
      },
      {
        title: "JSON",
        description:
          "JSON (JavaScript Object Notation) is a lightweight format for storing and exchanging data.",
        example: `const jsonString = '{"name": "Alice", "age": 25}'; console.log(JSON.parse(jsonString));`,
      },
      {
        title: "Debugging",
        description:
          "JavaScript provides debugging tools like console.log() and breakpoints in developer tools.",
        example: `console.log("Debugging message");`,
      },
      {
        title: "Best Practices",
        description:
          "Follow best practices such as using strict mode, avoiding global variables, and using meaningful variable names.",
        example: `"use strict"; let message = "Hello!"; console.log(message);`,
      },
      {
        title: "Performance",
        description:
          "Optimize JavaScript code for better performance by reducing DOM manipulations and using efficient loops.",
        example: `const arr = new Array(1000).fill(0); console.time("loop"); for (let i = 0; i < arr.length; i++) {} console.timeEnd("loop");`,
      },
    ],
    React: [
      {
        title: "React Intro",
        description:
          "React is a JavaScript library for building user interfaces, developed by Facebook. It follows a component-based architecture and allows developers to create reusable UI elements. React uses a virtual DOM to efficiently update and render UI components.",
        example: `// Basic React Component
    import React from "react";
    
    function App() {
      return <h1>Welcome to React!</h1>;
    }
    
    export default App;`,
      },
      {
        title: "React Get Started",
        description:
          "To start a React project, you can use Create React App (CRA) or set up a custom build with Webpack and Babel. The simplest way to get started is by running npx create-react-app my-app, which sets up everything you need.",
        example: `// Terminal command to create a React app
    npx create-react-app my-app
    
    // Navigate into the project directory
    cd my-app
    
    // Start the development server
    npm start`,
      },
      {
        title: "React Upgrade",
        description:
          "React frequently releases updates with new features and performance improvements. To upgrade your React app, use the command npm update react react-dom. Always check the official React changelog before upgrading.",
        example: `// Command to upgrade React
    npm update react react-dom`,
      },
      {
        title: "React ES6",
        description:
          "React relies heavily on ES6+ features like let/const, arrow functions, template literals, destructuring, spread/rest operators, modules, and promises.",
        example: `// Example of ES6 features in React
    const person = { name: "Alice", age: 25 };
    const { name, age } = person; // Destructuring
    
    const greet = () => console.log(\`Hello, \${name}!\`);
    
    greet();`,
      },
      {
        title: "React Render HTML",
        description:
          "React uses JSX to render HTML elements inside JavaScript. JSX looks like HTML but is transformed into JavaScript calls to React.createElement().",
        example: `import React from "react";
    import ReactDOM from "react-dom";
    
    const element = <h1>Hello, World!</h1>;
    
    ReactDOM.render(element, document.getElementById("root"));`,
      },
      {
        title: "React JSX",
        description:
          "JSX (JavaScript XML) allows embedding HTML-like syntax in JavaScript files. JSX expressions are converted into React.createElement calls by Babel.",
        example: `const element = <h1>Hello, JSX!</h1>;`,
      },
      {
        title: "React Components",
        description:
          "Components are the building blocks of React apps. They can be functional or class-based and help in reusing UI code efficiently.",
        example: `import React from "react";
    
    function Welcome(props) {
      return <h1>Hello, {props.name}!</h1>;
    }
    
    export default Welcome;`,
      },
      {
        title: "React Class Components",
        description:
          "Class components in React are ES6 classes that extend React.Component and use a render method to return JSX.",
        example: `import React, { Component } from "react";
    
    class Welcome extends Component {
      render() {
        return <h1>Hello, {this.props.name}!</h1>;
      }
    }
    
    export default Welcome;`,
      },
      {
        title: "React Props",
        description:
          "Props are read-only values passed from a parent component to a child component in React.",
        example: `function UserCard({ name, age }) {
      return <p>{name} is {age} years old.</p>;
    }
    
    <UserCard name="John" age={30} />`,
      },
      {
        title: "React Events",
        description:
          "React handles events using camelCase syntax and passes event handlers as functions.",
        example: `function ClickButton() {
      const handleClick = () => alert("Button clicked!");
    
      return <button onClick={handleClick}>Click Me</button>;
    }`,
      },
      {
        title: "React Conditionals",
        description:
          "Conditional rendering in React can be done using if-else, ternary operators, and logical operators.",
        example: `function UserGreeting({ isLoggedIn }) {
      return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>;
    }`,
      },
      {
        title: "React Lists",
        description:
          "React allows rendering dynamic lists using the map() function.",
        example: `const users = ["Alice", "Bob", "Charlie"];
    
    const userList = users.map(user => <li key={user}>{user}</li>);
    
    <ul>{userList}</ul>;`,
      },
      {
        title: "React Forms",
        description:
          "Forms in React use controlled components where form state is managed using React state.",
        example: `import React, { useState } from "react";
    
    function MyForm() {
      const [name, setName] = useState("");
    
      return (
        <form>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      );
    }`,
      },
      {
        title: "React Memo",
        description:
          "React.memo is a higher-order component that prevents unnecessary re-renders of functional components.",
        example: `import React, { memo } from "react";
    
    const Greeting = memo(({ name }) => {
      console.log("Rendered");
      return <h2>Hello, {name}!</h2>;
    });
    
    export default Greeting;`,
      },
      {
        title: "React CSS Styling",
        description:
          "React supports inline styles, CSS modules, and styled-components for styling applications.",
        example: `const styles = {
      color: "blue",
      fontSize: "20px"
    };
    
    function StyledText() {
      return <p style={styles}>This is styled text.</p>;
    }`,
      },
      {
        title: "React Sass Styling",
        description:
          "Sass can be used in React for better styling capabilities, including nesting and mixins.",
        example: `// styles.scss
    .button {
      background: blue;
      color: white;
      &:hover {
        background: darkblue;
      }
    }
    
    // In a React component
    import "./styles.scss";
    
    function Button() {
      return <button className="button">Click Me</button>;
    }`,
      },
      {
        title: "What is a Hook?",
        description:
          "Hooks are functions introduced in React 16.8 that allow functional components to use state and lifecycle methods.",
        example: `function Counter() {
      const [count, setCount] = useState(0);
      return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
    }`,
      },
      {
        title: "Custom Hooks",
        description:
          "Custom Hooks allow logic reuse in React components, following the naming convention useSomething.",
        example: `function useCounter(initialValue) {
      const [count, setCount] = useState(initialValue);
      const increment = () => setCount(count + 1);
      return { count, increment };
    }
    
    function Counter() {
      const { count, increment } = useCounter(0);
      return <button onClick={increment}>Count: {count}</button>;
    }`,
      },
    ],
  };