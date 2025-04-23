In CSS, **inheritance** refers to how certain properties are automatically passed down from a parent element to its child elements. It helps reduce repetition in your CSS code and ensures consistency in styling.

---

### **How Inheritance Works**
1. **Properties That Are Inherited by Default:**  
   - Text-related properties like `color`, `font`, `visibility`, and `line-height` are automatically inherited from parent elements to child elements.
   - Example:
     ```html
     <div style="color: red;">
       <p>This text will inherit the color red from the parent `div`.</p>
     </div>
     ```

2. **Non-Inherited Properties:**  
   - Properties like `margin`, `padding`, `border`, and `background` are **not inherited** by default. You can explicitly make them inheritable using the `inherit` keyword.
   - Example:
     ```css
     div {
       background: blue;
     }
     p {
       background: inherit; /* Explicitly inherits the parent's background */
     }
     ```

---

### **Inheritance Keywords**
CSS provides specific keywords to control inheritance:
- **`inherit`:** Forces child elements to inherit a property from their parent.
  ```css
  p {
    color: inherit; /* Takes the parent's color */
  }
  ```
  
- **`initial`:** Resets a property to its default value.
  ```css
  p {
    color: initial; /* Resets to browser's default color (usually black) */
  }
  ```
  
- **`unset`:** Removes the property, making it behave as either `inherit` or `initial`, depending on the property’s nature.
  ```css
  p {
    color: unset;
  }
  ```

---

### **Example: Applying Inheritance**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Inheritance Example</title>
  <style>
    /* Parent element */
    div {
      color: blue; /* Inheritable property */
      background-color: lightgray; /* Non-inheritable by default */
    }

    /* Child elements */
    p {
      color: inherit; /* Inherits color from parent */
      background-color: yellow; /* Overrides background */
    }
  </style>
</head>
<body>
  <div>
    <p>This paragraph inherits the color blue from the parent.</p>
    <p>This paragraph has a yellow background that overrides the parent.</p>
  </div>
</body>
</html>
```

---

### **Why Inheritance Matters**
- **Consistency:** Shared styles across child elements reduce redundancy.
- **Efficiency:** Reduces the need to repeatedly define styles for child elements.
- **Flexibility:** Override inheritance when needed using specific keywords.

