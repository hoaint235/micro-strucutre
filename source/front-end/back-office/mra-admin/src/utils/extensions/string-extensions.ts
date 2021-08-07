export {};
declare global {
  export interface String {
    format(value: string, params?: Object): string;
    toEnum<T>(enumObj: T, value: keyof T): T[keyof T];
  }
}

// eslint-disable-next-line no-extend-native
String.prototype.toEnum = function <T>(enumObj: T, value: keyof T): T[keyof T] {
  return enumObj[value];
};
