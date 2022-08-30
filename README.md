[![NPM](https://img.shields.io/npm/v/carbon-10-icon-animations.svg)](https://www.npmjs.com/package/carbon-10-icon-animations) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Carbon Icon Animations

This is a package of animated icons which mirrors the icons in [Carbon Design System](https://carbondesignsystem.com/guidelines/icons/library/) icons.
It enables developers to import an animated icon directly from this library, in place of importing the existing static icon from the Carbon Design System library. The animated icons are implemented as React components.  Since they do not make use of Carbon's icon components directly, they are not tied to a specific version of Carbon, and can be used in any React project.  

Check out what the animations look like in this [example app](https://pages.github.ibm.com/Krista-Starr/carbon-10-icon-animations/).

We will be adding onto this library one category at a time - the first release includes the **Navigation** icons, and the next batch will be the **Operations** icons (currently in progress).  

If you want to request an icon/category to be animated, please open an issue using the **New icon animation** template.  Working together with the Carbon team, we will prioritize the categories that will be most frequently used. 

We will do our very best to keep these icons in sync with the Carbon icons but if there is a change to the Carbon icon, it may not yet be reflected in our library- if you encounter this, please open a **Update icon animation** issue to alert us.  
<br />

## Using the icons

### Installation
To us the icons in your project, first install the package: 

```bash
npm install carbon-10-icon-animations
```

### Usage

Next, import and use the icon component and CSS file from the package. Example:

```jsx
import HomeMotion from 'carbon-10-icon-animations'
import 'carbon-10-icon-animations/dist/index.css'

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

<br />

## Contributing ##
If you would like to contribute a new animated icon, please use the **New icon animation** template to open an issue for the icon you are working on, so we don't end up with multiple people working on the same icon. 

The icons are SVGs made into React components, using CSS keyframes for the animations.  

### Methods of submitting work ###
1. You can on your icon the repo directly and submit a PR when you are ready to contribute your icon. 
2. You can work on the icon in Codepen/Code Sandbox etc, put the link to it in your issue when you're ready to contribute it, and someone can get your code from there and add it to the repo for you. 


### Working in the repo ###
If you want to work in the repo directly, here are a few things you should know:

The repo contains the library of icons themselves, as well as an example app where you can import and utilize the icons to see what they look like as you are working on them.  The icons themselves are located in `src/components` and the example app is located in `/example`.  

So, for example, if you wanted to work on the animation for the **Home** icon, you would do that in `src/components/Navigation/HomeMotion`.  Then, you can see where the icon is imported and used in the example app in `/example/src/App.js`. 

To run the app, you will want to have two separate tabs open in your terminal.

In the first tab:
1. You should be in the root directory of the project  
2. Run `npm install` to install dependencies
4. Run `npm start` which to compiles the icon code into the `dist` folder in order for the example app to consume it

In the second tab:
1. `cd example` to move into the example app 
2. Run `npm i` to install dependencies, including the icon package 
3. Run `npm start` to run the app.  Now, any changes you make to the icon repo will be reflected in the icons rendered in the example app 

<br />

## New to creating animations? ##

If you are new to working with SVGs and creating SVG animations, I recommend this tutorial series from CSS Tricks: [Everything you need to know about SVG](https://css-tricks.com/lodge/svg/). While all the information is good, #1, #7, and #22 will be good ones to focus on for working on this particular project.  

Here is the workflow for creating icon animations: 
1. Download the SVG code for the icon from [Carbon Icon Library](https://carbondesignsystem.com/guidelines/icons/library/)
2. Open the file in the text editor of your choice to see the svg code
3. As you explore the SVG code, you will likely discover that you need to make some changes to it in Illustrator in order to execute the animations you have in mind. In many cases you may find that the icon consists of one single path or shape, when you need elements of the svg to be separated in order for them to be animated.  For example, if you wanted to animate the "Bee" icon to make it's wings flap, you would need to make sure the paths for the wings are separate from the paths for the bee body, so the wings can be animated in isolation. (CodePen examples coming soon!)
4. When you're happy with the code that is exported from Illustrator, it is best practice to use a tool to optimize the code to reduce file size and simplify the code to make it easier to work with.  I typically use [SVG OMG](https://jakearchibald.github.io/svgomg/)
5. Now you are ready to animate! Check out [this Codepen example](https://codepen.io/kristastarr/pen/KKaRrzL/9dfd98d9ce8e097f08b515f3aa4e0166) of animations created using CSS keyframes. 

<br />

When it comes to designing animations, there are a few options - do whatever works best for you:
   - Design and code the animations yourself 
   - Partner with a motion designer to discuss and plan what the animation should look like, and then code it
   - Obtain reference videos and/or specs from a designer to reference as you code (Ex - an AfterEffects file) 
   - If you've created a reference video and need someone to code it, open an issue and find a developer to partner with, or we can connect you with one!
 
<br />

Make sure to adhere to existing [Carbon motion guidelines](https://carbondesignsystem.com/guidelines/motion/overview/).  Additional guidance specific to designing and using icon animations is in progress.   

<br />

## Requesting help 
Use the issue labels to request designer help or developer help: 
- Illustrator help - you need help modifying svg files in Illustrator in order to animate them with code
- Designing animations help - you want to code an animation but want someone to help you design it
- Coding animations help - you need someone to code the animation you designed
- CSS help - you need advice on creating CSS keyframes or working on code in the repo
- Add to library help - you have your animation coded in an external tool but need a developer to add it into the codebase for you 

If you can provide help in any of the above areas, feel free to assign yourself to an issue and begin collaboration! 
 
You can also reach out directly on Slack to @Krista Starr or @john-bister if you have any questions

<br />

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
This effort is lead by the Animated Icon Workgroup members: @Krista-Starr, @John-Bister, @Liz-Tremblay, @Mike-Olasov

<br />

## License

MIT © [Krista-Starr](https://github.com/Krista-Starr)
