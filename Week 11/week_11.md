# Object
- Object has properties and Methods
- It It's not a valid identifier you must put it in double quotes and access via bracket notation
- You can't Dynamic property name via Dot notation It's avaliabble by bracket notation only
- You can update or create new method or property by getting & setting it.

## 4 Ways to create an object
### Method 1
```
let identifier = {
  property1 : value.
  method1 : function (){
    return something
  }
}
```
### Method 2
```
let identifier = Object.create(An object to take as a proto)
```
### Method 3
```
let identifier = new Object ({

})
```
### Method 4
```
let identifier = {};
Object.assign(identifier, obj to copy from)
```