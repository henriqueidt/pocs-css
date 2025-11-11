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

## Using multiple keyframes with omitted `from` or `to`

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

## Using dynamic values in keyframes

CSS variables can also be used in keyframes, and they will take the reference from the var defined in the element using it

```css
.ball {
  --background: rgb(186, 186, 186);

  width: 100px;
  height: 100px;
  background-color: var(--background);
  border-radius: 50%;
  position: relative;
  animation: colorCycle 2s ease-in-out infinite;
}

.first-ball {
  --blinking-color: red;
}

.second-ball {
  --blinking-color: yellow;
}

.third-ball {
  --blinking-color: green;
}

@keyframes colorCycle {
  0% {
    background-color: var(--background);
  }
  50% {
    background-color: var(--blinking-color);
  }
  100% {
    background-color: var(--background);
  }
}
```
