In CSS, **selectors** are patterns used to target and style elements in an HTML document. Classes are one of the most commonly used selectors, allowing you to style multiple elements with the same class name.

### **Selectors in CSS**
Selectors define which elements the CSS rules apply to. Here's a quick overview:
- **Type Selector**: Targets HTML elements (e.g., `h1`, `p`).
- **Class Selector**: Targets elements with a specific class name, prefixed with a `.`.
- **ID Selector**: Targets an element with a specific ID, prefixed with a `#`.
- **Universal Selector**: Targets all elements, written as `*`.
- **Attribute Selector**: Targets elements with specific attributes (e.g., `[type="text"]`).

---

### **Class Selectors in CSS**
A class selector allows you to style multiple elements by assigning them a `class` attribute in HTML. It's written in CSS using a period (`.`) followed by the class name.

#### Example Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Selectors and Classes</title>
  <style>
    /* Class selector */
    .highlight {
      background-color: yellow;
      color: black;
      font-weight: bold;
      padding: 5px;
    }

    /* Type selector */
    p {
      font-size: 16px;
      line-height: 1.5;
    }

    /* ID selector */
    #special {
      color: red;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1>CSS Selectors Example</h1>
  
  <!-- Class applied to this element -->
  <p class="highlight">This paragraph has a yellow background because it uses the "highlight" class.</p>

  <!-- Type selector targets this element -->
  <p>This paragraph has default paragraph styles.</p>

  <!-- ID applied to this element -->
  <p id="special">This paragraph is styled using the "special" ID.</p>
</body>
</html>
```

---

### **Explanation of the Example**
1. **Class Selector `.highlight`:** 
   - Any element with the class `highlight` will have the defined styles (yellow background, bold text, etc.).
   - Multiple elements can share the same class.

2. **Type Selector `p`:**
   - Applies styles to all `<p>` tags in the document.

3. **ID Selector `#special`:**
   - Targets a specific `<p>` element with the `id="special"`.

By using classes, you can efficiently style reusable components while keeping your CSS maintainable and flexible. Would you like to dive deeper into other advanced selectors?