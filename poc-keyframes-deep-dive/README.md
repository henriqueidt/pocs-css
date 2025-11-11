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

## Using multiple keyframes

If we omit `to` from a keyframe animation, it will set its value to the value of the property of the element being animated, as shown before. If we instead add another keyframe, it will transition into the values specified in that other keyframe.

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
}

@keyframes blinking {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}

.with-multiple-keyframes {
  animation: blinking 1s alternate infinite, fadeIn 5s;
}
```

In this example, the element will fade in from `0` into the changing values of the `blinking` animation, which alternates between `0.5` and `1`.
