In CSS, a **class** is a type of selector that allows you to define a style that can be applied to multiple HTML elements. It provides a way to group and style elements that share the same characteristics, making your code reusable and efficient.

### **How to Use a Class**
1. **In the HTML file:** You assign a `class` attribute to the elements you want to style.
2. **In the CSS file:** You define the styles for that class by prefixing the class name with a period (`.`).

---

### **Example**

Here’s a simple example:

#### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Class Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="card">This is a card</div>
  <div class="card">This is another card</div>
</body>
</html>
```

#### CSS (`styles.css`):
```css
/* Define the class */
.card {
  border: 1px solid #ccc;
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

---

### **Explanation**
1. In the HTML code:
   - The `class="card"` is applied to two `<div>` elements. Both elements will share the same styling.

2. In the CSS code:
   - `.card` is the class selector. It styles any HTML element with the class name `card`.

3. **Result:** Both `<div>` elements will have a styled border, padding, background color, and a shadow.

---

### **Why Use Classes?**
- **Reusability:** Apply the same style to multiple elements without duplicating CSS rules.
- **Maintainability:** Update the style in one place (CSS file) to reflect changes across all elements with that class.
- **Flexibility:** Combine multiple classes on one element for complex styling.

