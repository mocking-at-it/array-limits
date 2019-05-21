# array-limits  
[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]  
  
Just another way of telling that everything is possible.  
  
## Usage  
  
### Adding limit  
  
```javascript
const arr = [0, 0, 0, 0];  
  
arr.limit(4);  
  
arr.push(0); // should throw an error since 4 is the limit of the array
```
  
<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/array-limits.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/array-limits
[npm-downloads]: https://img.shields.io/npm/dm/array-limits.svg?style=flat-square
