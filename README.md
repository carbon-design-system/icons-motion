[![NPM](https://img.shields.io/npm/v/carbon-10-icon-animations.svg)](https://www.npmjs.com/package/carbon-10-icon-animations) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Carbon Icon Animations

This is a package of animated icons which mirrors the icons in [Carbon Design System](https://carbondesignsystem.com/guidelines/icons/library/) icons.
It enables developers to import an animated icon directly from this library, in place of importing the existing static icon from the Carbon Design System library. 

Check out what the animations look like in this [example app](https://pages.github.ibm.com/Krista-Starr/carbon-10-icon-animations/).

We will be adding onto this library one category at a time - the first release includes the **Navigation** icons.  

If you want to request an icon/category to be animated, please open an issue using the **New icon animation** template.  Working together with the Carbon team, we will prioritize the categories that will be most frequently used. 

We will do our very best to keep these icons in sync with the Carbon icons but if there is a change to the Carbon icon, it may not yet be reflected in our library- if you encounter this, please open a **Update icon animation** issue to alert us.  


## Using the icons

### Install
To us the icons in your project, first install the package: 

```bash
npm install --save carbon-10-icon-animations
```

### Usage

Next, import and use the icon component and css file from the package:

```jsx
import HomeMotion from 'carbon-10-icon-animations'
import 'carbon-10-icon-animations/dist/index.css'

const myComponent = () => {
  <HomeMotion />
}
```


## Contributing
If you would like to contribute a new animated icon, please use the **New icon animation** template to open an issue for the icon you are working on, so we don't end up with multiple people working on the same icon.  When your code is complete, you may submit a PR directly, or you can put a link in your issue to a Codepen/Code Sandbox/other source, and someone can get your code from there and add it to the repo for you. 


### Working in the repo
This project repo contains the library of icons themselves, as well as an example app where you can import and utilize the icons to see what they look like as you are working on them.  The icons themselves are located in `src/components` and the example app is located in `/example`.  

So, for example, if you wanted to work on the animation for the **Home** icon, you would do that in `src/components/Navigation/HomeMotion` and then you can see where the icon is imported and used in the example app in `example/src/App.js`. 


## Feedback
This library is in constant evolution, and we welcome any feedback to help it improve! 

We'd especially love feedback in the following areas:
- New icons needed - propose additional icons you would like to see animated
- Animation feedback - too fast/slow/bouncy/whatever; conformance to existing animation guidelines
- Package feedback - improvements to code quality, efficiency, dependencies etc related to the actual package icon components
- Example app feedback - ideas on how to make the included demo app super engaging 
- Documentation feedback - Is the readme clear? Did you have the information you needed to successfully edit/create icons, or use icons in your project?
- Implementation feedback - Did the icons work for your use case? Did you need different props? 

## Contributors
This effort is lead by the Animated Icon Workgroup members: @Krista-Starr, @John-Bister, @Liz-Tremblay, Mike Olasov

## License

MIT © [Krista-Starr](https://github.com/Krista-Starr)
