# array-limits  
[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]  
  
Just another way of telling that everything is possible.  
  
## Usage  
  
### Setting limit  
  
```javascript
const arr = [0, 0, 0, 0];  
  
arr.limit(4);  // if not set, defaults to 1000000
  
arr.push(0); // should throw an error since 4 is the limit of the array
```  
### Checking array's free space  
  
```javascript
const arr = [0, 0, 0];

console.log(arr.availableSpace()); // should return the available space of an array
```
### checking if array is full  
  
```javascript
const arr = [0, 0, 0, 0];

console.log(arr.isFull()); // should return a boolean that tells if array is full or not
```  
  
## Note  
  
* This is not intended for something serious, the only reason of it's existence is to prove a point. Yes, everything is possible.  
  
<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/array-limits.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/array-limits
[npm-downloads]: https://img.shields.io/npm/dm/array-limits.svg?style=flat-square
