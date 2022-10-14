# Contribution Guidelines #

We welcome everyone who would like to contribute! Please make sure you adhere to our [Code of Conduct](https://github.com/carbon-design-system/carbon-motion/blob/main/.github/CODE_OF_CONDUCT)!!! 

[All Contributors](https://github.com/all-contributors/all-contributors) table coming soon! 

If you would like to contribute a new animated icon, please use the **New icon animation** template to open an issue for the icon you are working on, so we don't end up with multiple people working on the same icon. 

The icons are SVGs made into React components, using CSS keyframes for the animations.  


## Icon Motion Design Guidelines ##
### Introduction ###
Ideally, added motion gives better clarity to the action of the icon. Or, at the very least, motion is a non-intrusive piece of feedback letting the user know they have interacted with an icon. We want to avoid adding motion just for the sake of adding motion. That means many icons may not actually need to be animated and that’s OK! For a comprehensive look at the motion principles at IBM, please visit Carbon motion guidelines.


### Stroke Width ###
Avoid changing the stroke width when scaling objects. You might need to get clever with how you break apart the svg layers to accomplish this. For example, the “add” icon can be broken into two layers: the horizontal and vertical bar. By scaling the vertical bar on the y axis and the horizontal bar on the x axis, you can accomplish the “+” scaling up without scaling the actual stroke width. Or, you can implement vector-effect=“non-scaling-stroke” in your css. Both methods may require additional prep work in an image editor such as Illustrator.

![Examples of correct and incorrect stroke width](/images/StrokeWidth.gif)

### Bounding Box ###
Most icons were constructed with enough padding to allow scaling, positioning, and rotating toward the view box edge without getting cut off. However, you may find the padding limiting to the original animation you intended to make. Your svg layers need to stay in the bounding box, even if that means you have to compromise your original intent with the animation.

![Examples of correct and incorrect bounding box](/images/BoundingBox.gif)

### Opacity ###
Animating opacity can be tricky and difficult to make consistent. If possible, avoid using opacity and employ other transforms on the icon to accomplish your animation.


### Motion Curves ###
We’ve been using the productive and expressive motion curves outlined in the [Carbon motion guidelines](https://carbondesignsystem.com/guidelines/motion/overview/#easing).


Productive: cubic-bezier(0.2, 0, 0.38, 0.9) 
Expressive: cubic-bezier(0.4, 0.14, 0.3, 1)


While we consider most of the icon movements to fall under the ‘productive’ category, we’ve been going by feel for which curve to use. We suggest looking at similar icons to the one you’re working on and see what curves they use as a starting place. If neither curve works in your opinion, explore to find the right one. We do not suggest using cartoon-ish curves that bounce, wildly over-exaggerate movement, spring action, etc. We also do not suggest using a flat, linear curve. A little bit of easing can go a long way.


### Timing ###
Most animations run somewhere in the range of 0.2s - 0.4s. Avoid going over .5s, unless there’s a unique situation that calls for it.


### Review ###
Every icon will go through a design and code review so contributors can ask questions, rework motion, and have the resources they need to submit their animations.


### Conclusion ###
We hope this helps steer you in the right direction and doesn't limit the animations you come up with. There are always exceptions and we hope you find them. Have fun and when in doubt, reach out!



### Methods of submitting work ###
1. You can work on the icon in the repo directly and submit a PR when you are ready to contribute your icon. 
2. You can work on the icon in Codepen/Code Sandbox etc, put the link to it in your issue when you're ready to contribute it, and someone can get your code from there and add it to the repo for you. 


### Working in the repo ###
If you want to work in the repo directly, here are a few things you should know:

The repo contains the library of icons themselves, as well as an example app where you can import and utilize the icons to see what they look like as you are working on them.  The icons themselves are located in `src/components` and the example app is located in `/example`.  

So, for example, if you wanted to work on the animation for the **Home** icon, you would do that in `src/components/Navigation/HomeMotion`.  Then, you can see where the icon is imported and used in the example app in `example/src/App.js`. 

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

Here is the workflow for creating icon animations: 
1. Download the SVG code for the icon from [Carbon Icon Library](https://carbondesignsystem.com/guidelines/icons/library/).
2. Open the file in the text editor of your choice to see the svg code.
3. As you explore the SVG code, you will likely discover that you need to make some changes to it in Illustrator in order to execute the animations you have in mind. In many cases you may find that the icon consists of one single path or shape, when you need elements of the svg to be separated in order for them to be animated.  For example, if you wanted to animate the "Bee" icon to make it's wings flap, you would need to make sure the paths for the wings are separate from the paths for the bee body, so the wings can be animated in isolation. (CodePen examples coming soon!)
4. When you're happy with the code that is exported from Illustrator, it is best practice to use a tool to optimize the code to reduce file size and simplify the code to make it easier to work with.  I typically use [SVG OMG](https://jakearchibald.github.io/svgomg/).
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
 
You can reach out directly on Slack at #carbon-design-system with any questions you have. Please post any design questions with an in-context screen shot (i.e. screen shot of the whole UI you are designing) with background as to what you are trying to accomplish in this flow. We welcome in-progress work to get community design feedback as well.

<br />
