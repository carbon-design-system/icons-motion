# Carbon Icon Animations

This is a package of animated icons which mirrors the icons in [Carbon Design System](https://carbondesignsystem.com/guidelines/icons/library/) icons.
It enables developers to import an animated icon directly from this library, in place of importing the existing static icon from the Carbon Design System library. The animated icons are implemented as React components.  Since they do not make use of Carbon's icon components directly, they are not tied to a specific version of Carbon, and can be used in any React project.  

Check out what the animations look like in this [example app](https://carbon-design-system.github.io/icons-motion/).

We will be adding onto this library one category at a time - the current release includes the **Navigation** icons, and the next batch will be the **Operations** icons (currently in progress).  
If you want to request an icon/category to be animated, please open an issue using the **New icon animation** template.  Working together with the Carbon team, we will prioritize the categories that will be most frequently used. 

We will do our very best to keep these icons in sync with the Carbon icons but if there is a change to the Carbon icon, it may not yet be reflected in our library- if you encounter this, please open a **Update icon animation** issue to alert us.  
<br />

## Using the icons

### Installation
To use the icons in your project, first install the package: 

```bash
npm install @carbon/icons-motion
```

### Usage

Example:
How to import and use the icon component and CSS file from the package.


App.js
```jsx
import { HomeMotion } from '@carbon/icons-motion'
import '@carbon/icons-motion/dist/index.css'

const myComponent = () => {
  <HomeMotion 
    isAnimating={false}
    size={32}
  />
}
```

The component takes two props:
- `isAnimating` is a boolean; to trigger the animation, change this prop to `true`
- `size` is an integer which will set the width and height of the icon in px 

**Important** Your app will need to update the `isAnimating` prop to `true` in order to make the icon animate. You can decide when/how this prop change should be triggered, depending on your specific use case. 

Example:
Here's how to make an icon animate on mouseEnter of the `div` with the className of `icon-tile`, similar to the examples shown in the demo app at `./example/src/components/NavigationSection folder`.


App.js
```jsx
import React, { useState } from 'react'
import { HomeMotion } from '@carbon/icons-motion'
import '@carbon/icons-motion/dist/index.css'

const [homeAnimating, setHomeAnimating] = useState(false)

function App() {
  return (
    <div className="App">
      <div
        className='icon-tile'
        onMouseEnter={() => setHomeAnimating(true)}
        onMouseLeave={() => setHomeAnimating(false)}
      >
        <h3>Home</h3>
        <icons.HomeMotion 
          isAnimating={homeAnimating} 
          size={32} />
        </div>
    </div>)
  }

export default App;
```

Additional examples coming soon!

<br />

## Contributing
We welcome everyone who would like to contribute! Check out our [Contribution guidelines](https://github.com/carbon-design-system/icons-motion/blob/main/.github/CONTRIBUTING.md) to get started, and don't hesitate to reach out if you have any questions! 

[All Contributors](https://github.com/all-contributors/all-contributors) table coming soon!

## Feedback
This library is in constant evolution, and we welcome any feedback to help it improve! 

We'd especially love feedback in the following areas:
- New icons needed - propose additional icons you would like to see animated
- Animation feedback - too fast/slow/bouncy/whatever; conformance to existing animation guidelines
- Package feedback - improvements to code quality, efficiency, dependencies etc related to the actual package icon components
- Example app feedback - ideas on how to make the included demo app super engaging 
- Documentation feedback - Is the ReadMe clear? Did you have the information you needed to successfully edit/create icons, or use icons in your project?
- Implementation feedback - Did the icons work for your use case? Did you need different props? 

<br />

## Contributors
This effort is lead by the Animated Icon Workgroup members: @kristastarr, @johnbister, @Motion-Mike, @silvio-hajdin

<br />

## License
Licensed under the [Apache 2.0 License](https://github.com/carbon-design-system/carbon-motion/blob/main/LICENSE).
