# Functions
## Syntax
```
function identifier (parameter1 = defaultValue, parameter2, ...listOfParams){
  // Block Of Code
  return something; (optional)
}
```
- Functions are made according to the concept of DRY **D**on't **R**epeat **Y**ourself. Learn more about DRY Concept from [here](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- You must call function to excute it
## Return
- A function can be used to make some operations on parms and then return a result because of this we use `return`
- Any Code after return is unreachable
- No Line Terminator allowed after return

## Parameters Default
- Function Parameters Default is `undefined`
### Old Method
```
function identifier (param1){
  if (param1 === undefined){
    param1 = 'UnKnown'
  }
}
```
OR
```
function identifier (param1){
  param1 = param1 || 'UnKnown'
}
```
## ES6 Method
```
function identifier (parameter1 = defaultValue){
  // Block Of Code
}
```
## Rest Parameters
- Only one allowed
- Must be Last Element
```
function identifier (...listOfParams){
  // Block Of Code
}
```