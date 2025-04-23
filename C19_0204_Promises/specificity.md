# **Specificity in CSS**
**Specificity** is a way the browser determines which CSS rule to apply when multiple rules target the same element. It is like a "weight" system for CSS selectors. The higher the specificity, the more importance a rule has, and it will override less specific rules.

---

### **How Specificity Works**
1. **Inline Styles**: Have the highest specificity and will override other styles.
   ```html
   <p style="color: red;">This text is red.</p>
   ```

2. **ID Selectors**: More specific than classes or type selectors.
   ```css
   #example {
     color: blue;
   }
   ```

3. **Class Selectors, Attributes, and Pseudo-classes**: Less specific than IDs.
   ```css
   .highlight {
     color: green;
   }
   ```

4. **Type Selectors and Pseudo-elements**: Have the lowest specificity.
   ```css
   p {
     color: purple;
   }
   ```

5. **Universal Selector (`*`)**: Has no specificity weight and will apply styles only if no other rule conflicts.

---

### **Specificity Hierarchy**
When there are conflicting styles, specificity determines which rule "wins." Here's the specificity hierarchy from highest to lowest:
1. Inline styles (e.g., `style="..."` in HTML)
2. ID selectors
3. Class selectors, attribute selectors, and pseudo-classes
4. Type selectors and pseudo-elements
5. Universal selector

---

### **Specificity Calculations**
Specificity is calculated using a "score" system:
- Inline styles: **1000**
- ID selectors: **0100**
- Classes, attributes, pseudo-classes: **0010**
- Type selectors and pseudo-elements: **0001**

For example:
- `#id` (0100) > `.class` (0010) > `element` (0001)

If two rules have the same specificity, the one written later in the CSS (or closer to the element in case of inline styles) will take precedence.

---

### **Example of Specificity**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Specificity Example</title>
  <style>
    p {
      color: black; /* Type selector (specificity: 0001) */
    }
    .highlight {
      color: green; /* Class selector (specificity: 0010) */
    }
    #special {
      color: blue; /* ID selector (specificity: 0100) */
    }
  </style>
</head>
<body>
  <p>This paragraph is black (default type selector).</p>
  <p class="highlight">This paragraph is green (class selector overrides type selector).</p>
  <p id="special" class="highlight">This paragraph is blue (ID selector overrides class selector).</p>
</body>
</html>
```

---

### **Key Takeaways**
- Specificity ensures your CSS rules apply in a predictable way.
- Inline styles always override external styles unless marked as `!important`.
- Use IDs sparingly to avoid overly specific rules that are hard to manage.
- Combining selectors increases specificity, but keep it balanced for maintainable code.
