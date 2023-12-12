# MotionPack

Simple React wrappers to add animations to your components!

## Install

```bash
npm install motion-pack
```

## Reveal

```js
import { Reveal } from "motion-pack"
  
return (
  <Reveal>
    <p>this text will be animated with reveal effect!</p>
  </Reveal>
)
```

### Reveal Props

| Name                 | Value     |
| ------------         | --------- |
| startingHeight       | number    |
| duration             | number    |
| ease                 | string    |
| fade                 | string    |
| delay                | number    |

- `startingHeight` is the initial height (in pixels) from which the animation begins.
- `duration` is the duration (in seconds) of the reveal animation.
- `ease` is the easing function for the animation, determining the motion curve.
- `fade` Controls whether the animation fades in (0 to 1 opacity) or out (1 to 0 opacity).
- `delay` is the delay (in seconds) before the animation begins.

## MORE TO COME SOON!!