# My test in ReactJS to XLR8
<Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png" alt="react logo" height="100px" align="right" />

[![react](https://img.shields.io/badge/react-%5E17.0.2-blue?logo=React)](https://reactjs.org/)
[![typescript](https://img.shields.io/badge/typescript-%5E4.4.2-blue?logo=Typescript)](https://www.typescriptlang.org/)
[![styled-components](https://img.shields.io/badge/styled--components-%5E5.3.3-ff69b4?logo=styled-components)](https://styled-components.com/)

## Description of that project

This was a challenge I solved for a job vacancy. I got carried away and went a little beyond the test requirements and I really liked the result. Basically I received a JSON file and a pdf with the requirements and so I structured this project.

## Requirements

For development, you will need some software installed in your environment.

- [NodeJS](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)


### How start this project?
First install all dependencies with **yarn**, then run the command:

```code
yarn start
```
You can also run JSON files locally through Json-Server. If so, start the JSON server first.
```code
yarn json
```
After the server starts successfully, start the project.
## Assignment Details:
The task consists of a simple single page with a gallery component, written in ReactJS (any version).
The images can be found here: on attached json file images.json

### Requirements:
[x] A1) Display the images as 300x272 boxes. You can simply display the provided images in rows, with uniform vertical spaces between each row (at least 10px).
[x] A2) The image files provided by the api (JSON file) can vary in size. Ensure they aren't shown off center or stretched out, and that they fill the whole 300x272 box.
[x] A3) There should be uniform horizontal spaces between each image (at least 20px).
[x] A4) The image layout should maintain perfect vertical symmetry regardless of screen size (just the box layout of course, not the contents such as the pictures themselves)

[x] B1) Underneath every image/box, add the following:
   - On the left side, a small arrow icon, centered vertically with the title
   - On the right, the title of the image. Make sure that the title doesn't occupy more than 3 lines, otherwise truncate it and show an ellipsis at the end.
[x] B2) The title of the image should be highlighted if the image is bookmarked. You can do that for example by changing it to a different color.

[x] C1) When the user clicks on an image that they haven't bookmarked yet, should save the state of the bookmark and change the icon to filled

[x] D1) Add a basic tabs system above the images, in order to display ALL Images or Bookmarked Images.
[x] D2) If you scroll the page, once you get past the tabs and they're no longer visible, they should show up fixed at the bottom of the page instead. This alternate navbar should vanish once you scroll back up and can see the original, static tabs again.


### Important Notes:
[x] E1) You don't need to waste time making the component pretty, as long as it hits all requirements. We won't be judging the design as long as it's not clearly broken.
[x] E2) You can handle any issue that isn't explicitly mentioned above in the way you find most expedient.
[x] E3) For testing convenience only, the image ids are always sequential and start from 1. The code should not rely on that.
[x] E4) The page should be reasonably compatible with various, non obsolete devices/browsers.

Obrigado!

