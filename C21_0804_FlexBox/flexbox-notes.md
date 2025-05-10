# FlexBox

Here are some concise notes on **Flexbox**, focusing on the `justify-content` and `align-items` properties:

Practice here - [Flex Frog](https://flexboxfroggy.com/)

---

![Alt text](image.png)

---

## 🔧 **Flexbox Overview**

 Flexbox (Flexible Box Layout) is a powerful CSS layout system designed for efficient arrangement of items within a container. It provides flexibility in aligning elements, making it easier to create responsive designs. Here’s a detailed breakdown of Flexbox:

---

### **1. Flex Container vs. Flex Items**
Flexbox consists of a **flex container** and **flex items**:
- The **container** is the parent element that holds the flex items.
- The **items** are the direct children inside the flex container.

To enable Flexbox, you apply `display: flex;` to the container:
```css
.container {
    display: flex;
}
```

---

### **2. Flex Container Properties**
Flexbox provides several properties for controlling the layout of the flex container.

#### **a) `flex-direction` (Main Axis Direction)**
Defines the direction of the flex items inside the container.
```css
.container {
    flex-direction: row; /* Default: Items are arranged horizontally */
}
```
Possible values:
- `row` (default) – Left to right (horizontal)
- `row-reverse` – Right to left (horizontal)
- `column` – Top to bottom (vertical)
- `column-reverse` – Bottom to top (vertical)

---

#### **b) `justify-content` (Alignment on Main Axis)**
Controls how items are aligned along the main axis.
```css
.container {
    justify-content: center;
}
```
Possible values:
- `flex-start` – Items align to the beginning
- `flex-end` – Items align to the end
- `center` – Items are centered
- `space-between` – Space distributed between items
- `space-around` – Space distributed around items
- `space-evenly` – Space distributed evenly

---

#### **c) `align-items` (Alignment on Cross Axis)**
Controls how items align along the cross axis.
```css
.container {
    align-items: stretch;
}
```
Possible values:
- `stretch` (default) – Items stretch to fill container height
- `flex-start` – Items align at the start
- `flex-end` – Items align at the end
- `center` – Items align in the middle
- `baseline` – Items align based on their text baseline

---

#### **d) `align-content` (Multi-line Alignment)**
Used when items wrap onto multiple lines.
```css
.container {
    align-content: space-around;
}
```
Possible values:
- Same values as `justify-content`, but applies to multiple rows.

---

### **3. Flex Item Properties**
Each flex item has individual properties to control its size and position.

#### **a) `flex-grow` (Expansion)**
Defines how much an item should grow compared to others.
```css
.item {
    flex-grow: 1;
}
```
A higher value means more growth.

---

#### **b) `flex-shrink` (Contraction)**
Defines how much an item should shrink.
```css
.item {
    flex-shrink: 2;
}
```
A higher value means more shrinking.

---

#### **c) `flex-basis` (Initial Size)**
Defines the initial size of the flex item before applying `flex-grow` or `flex-shrink`.
```css
.item {
    flex-basis: 200px;
}
```

---

#### **d) `flex` (Shorthand)**
A shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`:
```css
.item {
    flex: 1 1 200px; /* flex-grow: 1, flex-shrink: 1, flex-basis: 200px */
}
```

---

### **4. `order` Property (Reordering Items)**
Allows changing the visual order of items without modifying the HTML.
```css
.item {
    order: 2;
}
```
Default value is `0`. A higher number moves the item further.

---

### **5. `gap` Property (Spacing Between Items)**
Defines space between flex items.
```css
.container {
    gap: 20px;
}
```

---

### **6. Flexbox Example**
Here’s an example using Flexbox:
```html
<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>
```
```css
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.item {
    background-color: lightblue;
    padding: 20px;
}
```

---

### **7. Advantages of Flexbox**
- Simplifies layout management, especially for responsive designs.
- Eliminates the need for complex `float` and `position` properties.
- Provides dynamic resizing and alignment control.

---

## 🎯 `justify-content`

**Purpose**: Aligns items **along the main axis** (horizontal by default).

### Values:

* `flex-start` → Items align to the start of the container (default).
* `flex-end` → Items align to the end.
* `center` → Items are centered.
* `space-between` → Equal space *between* items, none at the ends.
* `space-around` → Equal space *around* items (half-size at edges).
* `space-evenly` → Equal space between all items including edges.

```css
.container {
  justify-content: space-between;
}
```

---

## 🧭 `align-items`

**Purpose**: Aligns items **along the cross axis** (vertical by default).

### Values:

* `stretch` → Items stretch to fill the container (default).
* `flex-start` → Items align to the start of the cross axis.
* `flex-end` → Items align to the end of the cross axis.
* `center` → Items are centered along the cross axis.
* `baseline` → Items align by their text baseline.

```css
.container {
  align-items: center;
}
```

---

### Bonus: Axis Reminder

* **Main axis**: Defined by `flex-direction` (row by default).
* **Cross axis**: Perpendicular to main axis.


