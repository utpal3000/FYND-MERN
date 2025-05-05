# FlexBox

Here are some concise notes on **Flexbox**, focusing on the `justify-content` and `align-items` properties:

---

## 🔧 **Flexbox Overview**

Flexbox is a CSS layout model that allows items within a container to be distributed dynamically and aligned efficiently — even when their sizes are unknown or dynamic.

To enable Flexbox:

```css
.container {
  display: flex;
}
```

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


