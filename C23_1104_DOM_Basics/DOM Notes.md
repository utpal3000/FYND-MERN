# DOM Basics

<!-- Questions.
The table with id="age-table".
All label elements inside that table (there should
be 3 of them).
The first td in that table (with the word "Age").
The form with name= "search".
The first input in that form.
The last input in that form. -->

## DOM Selectors in JavaScript: Finding HTML Elements

DOM (Document Object Model) selectors are fundamental for interacting with HTML elements using JavaScript. They allow you to target specific elements or groups of elements within the HTML structure of a web page.

**Core Concepts:**

* **The DOM Tree:** The browser parses HTML and represents it as a tree-like structure called the DOM. Each HTML element, attribute, and text node becomes a node in this tree.
* **Selecting Nodes:** DOM selectors provide ways to navigate and find specific nodes (elements) within this DOM tree.
* **NodeList:** Methods like `getElementsByClassName()`, `getElementsByTagName()`, and `querySelectorAll()` return a `NodeList`. This is a collection of nodes, similar to an array, but it's a "live" collection in some cases (meaning it updates automatically if the DOM changes). You can iterate through a `NodeList` using loops or `forEach()`.

**Detailed Selector Methods:**

1.  **`document.getElementById(id)`:**
    * **Purpose:** Selects a *single* element based on its `id` attribute.
    * **Uniqueness:** IDs are meant to be unique within an HTML document. This makes `getElementById()` a very efficient and direct way to target a specific element.
    * **Return Value:** Returns the matching HTML element object, or `null` if no element with the specified ID exists.
    * **Example:**
        ```javascript
        <div id="main-container">This is the main container.</div>
        <script>
          let mainContainer = document.getElementById('main-container');
          console.log(mainContainer); // Output: <div id="main-container">...</div>
        </script>
        ```

2.  **`document.getElementsByClassName(className)`:**
    * **Purpose:** Selects all elements that have the specified class name.
    * **Multiple Elements:** Class names can be applied to multiple elements, so this method typically returns a `NodeList` of matching elements.
    * **Return Value:** Returns a *live* `HTMLCollection` (historically, now often behaves like a `NodeList`) of matching elements. If no elements have the specified class, it returns an empty `HTMLCollection`.
    * **Example:**
        ```html
        <div class="item">Item 1</div>
        <div class="item special">Item 2</div>
        <p class="item">Item 3</p>
        <script>
          let items = document.getElementsByClassName('item');
          console.log(items); // Output: HTMLCollection(3) [div.item, div.item.special, p.item]
          for (let i = 0; i < items.length; i++) {
            items[i].style.color = 'blue';
          }
        </script>
        ```

3.  **`document.getElementsByTagName(tagName)`:**
    * **Purpose:** Selects all elements with the specified HTML tag name (e.g., 'div', 'p', 'span', 'h1').
    * **Broad Selection:** This method can return a large number of elements.
    * **Return Value:** Returns a *live* `HTMLCollection` of all elements with the specified tag name. If no matching elements exist, it returns an empty `HTMLCollection`.
    * **Example:**
        ```html
        <h1>Main Title</h1>
        <p>First paragraph.</p>
        <p>Second paragraph.</p>
        <script>
          let paragraphs = document.getElementsByTagName('p');
          console.log(paragraphs); // Output: HTMLCollection(2) [p, p]
          let headings = document.getElementsByTagName('h1');
          console.log(headings); // Output: HTMLCollection(1) [h1]
        </script>
        ```

4.  **`document.querySelector(selector)`:**
    * **Purpose:** Selects the *first* element that matches a specified CSS selector.
    * **CSS Selector Power:** This is a very versatile method as it allows you to use any valid CSS selector to target elements (e.g., IDs, classes, attributes, pseudo-classes, pseudo-elements, combinators).
    * **Return Value:** Returns the first matching HTML element object, or `null` if no match is found.
    * **Examples:**
        ```javascript
        <div id="container">
          <p class="text">First paragraph</p>
          <p class="text special">Second paragraph</p>
        </div>
        <button>Click Me</button>
        <script>
          let firstParagraph = document.querySelector('.text'); // Selects the first element with class "text"
          console.log(firstParagraph); // Output: <p class="text">First paragraph</p>

          let specialParagraph = document.querySelector('#container .special'); // Selects the first element with class "special" inside the element with ID "container"
          console.log(specialParagraph); // Output: <p class="text special">Second paragraph</p>

          let button = document.querySelector('button'); // Selects the first <button> element
          console.log(button); // Output: <button>Click Me</button>
        </script>
        ```

5.  **`document.querySelectorAll(selector)`:**
    * **Purpose:** Selects *all* elements that match a specified CSS selector.
    * **CSS Selector Power (Same as `querySelector`):** Leverages the full power of CSS selectors.
    * **Return Value:** Returns a *static* `NodeList` containing all matching elements in the order they appear in the document. If no matches are found, it returns an empty `NodeList`.
    * **Examples:**
        ```html
        <ul>
          <li class="item">Item 1</li>
          <li class="item active">Item 2</li>
          <li class="item">Item 3</li>
        </ul>
        <script>
          let allListItems = document.querySelectorAll('li'); // Selects all <li> elements
          console.log(allListItems); // Output: NodeList(3) [li.item, li.item.active, li.item]

          let activeItems = document.querySelectorAll('.item.active'); // Selects all elements with both classes "item" and "active"
          console.log(activeItems); // Output: NodeList(1) [li.item.active]

          allListItems.forEach(item => {
            item.style.fontWeight = 'bold';
          });
        </script>
        ```

**Choosing the Right Selector:**

* **Specific Unique Element:** Use `getElementById()` for efficiency and directness.
* **Multiple Elements by Class:** Use `getElementsByClassName()`.
* **Multiple Elements by Tag:** Use `getElementsByTagName()`.
* **Complex or Flexible Selection:** Use `querySelector()` to get the first match or `querySelectorAll()` to get all matches based on powerful CSS selectors. `querySelector` and `querySelectorAll` are generally preferred for their flexibility and consistency with CSS styling.

**Important Considerations:**

* **Performance:** While all selectors are generally efficient for most common use cases, `getElementById()` is often the fastest due to the uniqueness of IDs. For more complex selections, the performance difference is usually negligible.
* **Live vs. Static Collections:** Be aware that `getElementsByClassName()` and `getElementsByTagName()` return *live* `HTMLCollection`s. This means if the DOM is updated and elements matching your criteria are added or removed, the `HTMLCollection` will automatically reflect these changes. `querySelectorAll()` returns a *static* `NodeList`; it represents a snapshot of the DOM at the time the method was called and will not update automatically.
* **Scope:** Selectors are usually called on the `document` object to search the entire HTML document. However, you can also call them on other element objects to search within a specific part of the DOM (e.g., `myDiv.querySelector('.sub-item')` will only search for `.sub-item` within the `myDiv` element).

Understanding and effectively using DOM selectors is crucial for dynamically manipulating web pages with JavaScript. They are the first step in accessing and modifying the content, style, and behavior of HTML elements.


## JavaScript Events: Making Web Pages Interactive

JavaScript events are actions or occurrences that happen in the browser, such as a user clicking a button, moving the mouse, or a page finishing loading. They are the fundamental mechanism for making web pages interactive and dynamic.

**Core Concepts:**

* **Events as Signals:** An event is essentially a signal generated by the browser or the user, indicating that something interesting has happened.
* **Event Listeners:** To respond to these events, you need to "listen" for them on specific HTML elements. This is done by attaching event listeners to those elements.
* **Event Handlers:** When an event occurs on an element with an attached listener, a specific function, called an event handler, is executed to respond to that event.

**Common Event Types:**

JavaScript has a vast array of event types. Here are some of the most common categories and examples:

**1. Mouse Events:**

* `click`: Occurs when an element is clicked.
* `dblclick`: Occurs when an element is double-clicked.
* `mousedown`: Occurs when a mouse button is pressed down on an element.
* `mouseup`: Occurs when a mouse button is released over an element.
* `mousemove`: Occurs when the mouse pointer moves while it is over an element.
* `mouseover`: Occurs when the mouse pointer is moved onto an element.
* `mouseout`: Occurs when the mouse pointer is moved away from an element.
* `mouseenter`: Similar to `mouseover`, but doesn't bubble (see "Event Propagation").
* `mouseleave`: Similar to `mouseout`, but doesn't bubble.
* `contextmenu`: Occurs when the right mouse button is clicked on an element.

**2. Keyboard Events:**

* `keydown`: Occurs when a key is pressed down.
* `keyup`: Occurs when a key is released.
* `keypress` (deprecated for most non-text input): Occurs when a key that produces a character is pressed and released.

**3. Form Events:**

* `submit`: Occurs when a form is submitted.
* `change`: Occurs when the value of an input element (e.g., `<input>`, `<select>`, `<textarea>`) changes.
* `focus`: Occurs when an element gains focus (e.g., when a user clicks into an input field).
* `blur`: Occurs when an element loses focus.
* `input`: Occurs when the value of an `<input>` or `<textarea>` element is being changed.

**4. Document/Window Events:**

* `load`: Occurs when the entire page (including all resources like images and scripts) has finished loading.
* `DOMContentLoaded`: Occurs when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. This is generally preferred for attaching event listeners as it's faster.
* `unload`: Occurs when the user navigates away from the page.
* `resize`: Occurs when the browser window has been resized.
* `scroll`: Occurs when the document or an element with a scrollbar is scrolled.

**5. Touch Events (for touch devices):**

* `touchstart`: Occurs when a touch point is placed on the touch surface.
* `touchmove`: Occurs when a touch point is moved along the touch surface.
* `touchend`: Occurs when a touch point is removed from the touch surface.
* `touchcancel`: Occurs when a touch interaction is interrupted (e.g., by a system event).

**Attaching Event Listeners:**

There are several ways to attach event listeners to HTML elements:

**1. Inline HTML Attributes (Generally Discouraged):**

* You can directly specify event handlers as HTML attributes.
* **Cons:** Makes HTML less readable, mixes JavaScript with HTML, harder to manage.

    ```html
    <button onclick="alert('Button clicked!')">Click Me</button>
    ```

**2. Using the `on<event>` Property:**

* You can assign a function to the `on<event>` property of an HTML element in JavaScript.
* **Cons:** Allows only one event handler per event type per element; can overwrite existing handlers.

    ```javascript
    let button = document.querySelector('button');
    button.onclick = function() {
      console.log('Button clicked using onclick property.');
    };

    // To remove the handler:
    button.onclick = null;
    ```

**3. Using the `addEventListener()` Method (The Preferred Way):**

* This is the most flexible and recommended way to attach event listeners.
* **Syntax:** `element.addEventListener(type, listener, [options]);`
    * `type`: A string representing the event type (e.g., 'click', 'mouseover').
    * `listener`: The function to be executed when the event occurs (the event handler).
    * `options` (optional): An object that allows you to configure the event listener (e.g., `capture`, `once`, `passive`).

    ```javascript
    let button = document.querySelector('#myButton');

    function handleClick() {
      console.log('Button clicked using addEventListener.');
      // You can also remove the listener from within the handler if 'once' is not used
      // button.removeEventListener('click', handleClick);
    }

    button.addEventListener('click', handleClick);

    // You can attach multiple listeners to the same event on the same element:
    button.addEventListener('click', function() {
      console.log('Another click handler!');
    });

    // To remove a specific listener:
    button.removeEventListener('click', handleClick);
    ```

**Event Object:**

When an event occurs and its handler function is executed, an **event object** is automatically passed as an argument to the handler function. This object contains valuable information about the event, such as:

* `type`: The type of the event (e.g., 'click', 'mousemove').
* `target`: The element that triggered the event (the *event target*).
* `currentTarget`: The element to which the event listener was attached.
* `clientX`, `clientY`: The coordinates of the mouse pointer relative to the viewport.
* `pageX`, `pageY`: The coordinates of the mouse pointer relative to the entire document.
* `key`, `code`: Information about the key pressed during keyboard events.
* `preventDefault()`: A method that prevents the browser's default action associated with the event (e.g., preventing a form from submitting).
* `stopPropagation()`: A method that stops the event from propagating up the DOM tree (see "Event Propagation").

```javascript
let link = document.querySelector('a');
link.addEventListener('click', function(event) {
  console.log('Link clicked!');
  console.log('Event type:', event.type);
  console.log('Event target:', event.target);
  event.preventDefault(); // Prevent the link from navigating
});
```

**Event Propagation (Bubbling and Capturing):**

When an event occurs on an HTML element, it goes through a process called event propagation, which determines the order in which event listeners are triggered on the elements in the DOM tree. There are two main phases:

* **Bubbling (Default):** The event first triggers the handler on the innermost target element, and then "bubbles up" the DOM tree, triggering handlers on its parent elements, and so on, up to the `document` object.

    ```html
    <div id="outer">
      <div id="inner">
        <button id="myButton">Click Me</button>
      </div>
    </div>
    <script>
      document.getElementById('outer').addEventListener('click', function() {
        console.log('Outer div clicked (bubbling)');
      });
      document.getElementById('inner').addEventListener('click', function() {
        console.log('Inner div clicked (bubbling)');
      });
      document.getElementById('myButton').addEventListener('click', function() {
        console.log('Button clicked (bubbling)');
      });
    </script>
    ```

    If you click the button, you'll see the messages in this order: "Button clicked (bubbling)", "Inner div clicked (bubbling)", "Outer div clicked (bubbling)".

* **Capturing:** The event travels down the DOM tree, from the `document` to the target element, triggering handlers along the way. To use the capturing phase, you need to set the `capture` option to `true` in the `addEventListener()` method:

    ```javascript
    document.getElementById('outer').addEventListener('click', function() {
      console.log('Outer div clicked (capturing)');
    }, true); // Capture phase

    document.getElementById('inner').addEventListener('click', function() {
      console.log('Inner div clicked (capturing)');
    }, true); // Capture phase

    document.getElementById('myButton').addEventListener('click', function() {
      console.log('Button clicked (bubbling - default)');
    });
    ```

    Now, clicking the button will result in: "Outer div clicked (capturing)", "Inner div clicked (capturing)", "Button clicked (bubbling - default)".

**Event Delegation:**

A powerful technique where you attach a single event listener to a parent element to handle events that occur on its descendant elements. This can be more efficient than attaching individual listeners to many child elements, especially if the children are dynamically added or removed.

```html
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<script>
  document.getElementById('myList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      console.log('You clicked on:', event.target.textContent);
    }
  });

  // You can dynamically add more list items, and the same listener will work
  let newItem = document.createElement('li');
  newItem.textContent = 'Item 4';
  document.getElementById('myList').appendChild(newItem);
</script>
```

**Key Takeaways:**

* Events are the foundation of interactivity in web pages.
* Use `addEventListener()` as the preferred method for attaching event listeners.
* Understand the event object and its properties to get information about the event.
* Be aware of event propagation (bubbling and capturing) and how to control it using `stopPropagation()`.
* Leverage event delegation for more efficient handling of events on multiple similar elements.

By mastering JavaScript events, you can create engaging and responsive user interfaces.