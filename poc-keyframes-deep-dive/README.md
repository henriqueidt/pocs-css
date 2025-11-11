# Keyframes Deep Dive

## Omitting `from` or `to` Keyframes

Usually, when writting a fade-out animation, we would write it like this:

```css
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

But, if we omit the `from` keyframe, the browser will use the element's current opacity (which is `1` by default) as the starting point and work the same way:

```css
@keyframes fadeOut {
  to {
    opacity: 0;
  }
}
```

The same applies to omitting the `to` keyframe. The browser will use the element's current opacity as the ending point.

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
}
```
