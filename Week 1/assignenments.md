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
