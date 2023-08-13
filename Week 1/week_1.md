# Week 1

## Lesson 01

- JavaScript is a programming (scripting) language that works on both client side (browser) and server side (backend).
- It adds interactivity to the website.

### Key Goals:

- [ ] Dynamically update content
- [ ] Manipulating HTML & CSS
- [ ] Animate Images and create Image Gallery
- [ ] Validate Data
- [ ] Control Multimedia
- [ ] Web Browser Games
- [ ] Mobile & Desktop Apps

### Content of the course

- [ ] JS Core Language
- [ ] DOM
- [ ] BOM
- [ ] Ecma Script 6 + 7
- [ ] OOP
- [ ] AJAX
- [ ] JSON

## Lesson 02

### How to study the course?

- Focus
- Always Search
- Ask how to fix not fix
- Store Ideas to do it later
- Check Lesson Code
- **ASSIGNMENTS**

### Problem Solving Sites

1. LeetCode
2. Edabit
3. HackerRank
4. CodeWars

## Lesson 03

### VS Code Extensions

- Bracket Pair Colorizer
- Editor Config for VS Code
- ES Lint
- indent-rainbow
- Live Server
- Material Icon Theme
- Path Intellisense
- Prettier

---

- You can add code in `<script>` tage ar by adding `<script src="main.js">`

## Lesson 04 & 05

- The best practice is to put the `<script>` tag is before the closing tag of body `</body>`
- If you want to put it in head you can use the property `window.onload` and then assign functio to it

## Lesson 6 (Comments)

### Syntax

`// This is a comment` (single line comment)

```
/*
This
is
a
comment
*/
```

(Multiple line comment)

## Lesson 07

There are several ways to output the results to screen, such as:

1. `window.alert()`
   Not recommend because it's annoying and stops the flow of the website
2. `document.write()`
   Not the best way
3. `console.log()`
   :100: Perfecto

## Lesson 08

### Console Methods

1. `console.log()`
   Output normal text to the screen
2. `console.error()`
   output error with custom message from you
3. `console.table()`
   Dispalys any tabular data such as: array, list and so on in a table view.

### Console Styling

You can style outputed text in the console by using Directives (%c) as the following.

```
console.log("I %cLove JS", "color:red;");
```

## Lesson 09

You can know what differes from other version of js using [es6-features.org](https:\www.es6-features.org)

## Assignments

### Assignment 1

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning JS</title>
    <link rel="stylesheet" href="style.css">
    <script>
        // Will not work cause of the element isn't loaded yet
        document.getElementById("el").style.color = "red";
    </script>
    <script>
        // Will work because it will wait untill all elemnts are loaded to excute code
        window.onload = function () {
            document.getElementById("el").style.color = "red";
        };
    </script>
</head>

<body>
    <h1 id="el">Page Title</h1>
    <script>
        // Will work beacuse aelements are already loaded
        document.getElementById("el").style.color = "red";
    </script>
    <script src="main.js"></script>
</body>

</html>
```

### Assignment 2

```
document.write(`
<h1>Youssef</h1>
<style>
h1{
    color: blue;
font-size: 80px;
font-weight: bold;
text-align: center;
font-family: Arial
}
</style>
`);

```

### Assignment 3

```
console.log(
  "%cElzero %cWeb %cSchool",
  "color:red;font-size:40px",
  "color:green;font-weight:bold;font-size:40px",
  "background-color:blue;color:white;font-size:40px"
);

```

### Assignment 4

```
console.group("Group 1");
console.log("Message 1");
console.log("Message 2");
console.group("Child Group");
console.log("Message 1");
console.log("Message 2");
console.group("Grand Child Group");
console.log("Message 1");
console.log("Message 2");

console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group("Group 2");
console.log("Message 1");
console.log("Message 2");

```

### Assignment 5

```
console.table(["Ahmed", "Osama", "Youssef", "Seif", "Kareem"]);

```

### Assignment 6

Put the script tag at the top of the body or in the head

### Search Results

- [x] [Use Cases of Comments and bad practice]()
- [x] [Web API](https://developer.mozilla.org/en-US/docs/Web/API)
- [x] [ECMA Organization]()
- [x] [Scripting Language]()
- [x] [Chrome Dev Tools](https://developer.chrome.com/)
