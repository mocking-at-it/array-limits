declare global {
  interface Array<T> {
    limit: (limit: number) => Array<T>;
    full: () => Array<T>;
    isFull: () => boolean;
    availableSpace: () => number;
  }
}
export declare class ArrayLimitException extends RangeError {
  name: string;
  message: string;
  constructor(...args: any[]);
}
export declare class InvalidLimitValueException extends RangeError {
  name: string;
  message: string;
  constructor(...args: any[]);
}
