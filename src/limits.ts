declare global {
  interface Array<T> {
    limit: (limit: number) => Array<T>;

    full: () => Array<T>;

    isFull: () => boolean;
  }
}

export class ArrayLimitException extends RangeError {
  public name: string = "ArrayLimitException"

  public message: string;

  constructor(...args) {
    super(...args);

    this.message = `Array is set to have ${args[0]} elements only. Array is now full.`

    Error.captureStackTrace(this, ArrayLimitException);
  }
}

export class InvalidLimitValueException extends RangeError {
  public name: string = "InvalidLimitValueException"

  public message: string;

  constructor(...args) {
    super(...args);

    this.message = `Minimum array limit should be 1`

    Error.captureStackTrace(this, InvalidLimitValueException);
  }
}

Array.prototype.isFull = function() {
  return this.length >= this.limit;
}

Array.prototype.full = function() {
  if (!this.limit) {
    this.limit = 1000000;
  }

  if (this.isFull()) {
    throw new ArrayLimitException(this.limit);
  }

  return this;
}

Array.prototype.limit = function(limit: number) {
  if (limit < 1) {
    throw new InvalidLimitValueException();
  }

  this.limit = limit;

  return this;
}

Array.prototype.push = (function(){
  let original = Array.prototype.push;

  return function() {
    this.full();

    return original.apply(this, arguments);
  };
})();
