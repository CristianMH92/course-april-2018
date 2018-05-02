# Response Design
Web Server for Chrome to test a server in the local network
Page to check the compatibility [Can I Use](https://caniuse.com/)

CSS read secuencial and replace, example
```css
div {
    display: inline-block;
    display: grid;
}
```
Other options for replace and check uncompatibilities
```css
@supports (display: grid){
    div{
        display: grid;
    }
}
```
In size, border and padding are considerating
`box-sizing`: include the border and padding to total width
```css
div {
    box-sizing: border-box;
    background-color: red;
    display: inline-block;
    height: 20px;
    width: 50%:
}
```
Init standar the code
```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```
To use variable
```css
:root {
    --primary-color: #fea38d;
    --default-text-size: 16px;
}

div {
    box-sizing: border-box;
    background-color: var(--primary-color);
    display: inline-block;
    height: 20px;
    width: 50%:
}

```
Media Query to select the witdh of media
```css
@media screen and (min-width:1024px){
    div{
        width: 100%;
    }
}
```
To re-define the value of variables, use
```css
@media screen and (min-width:1024px){
    :root {
        --default-text-size: 12px;
    }
    div{
        width: 100%;
    }
}
```
Fonts google
Flex Frog
Pick Color 