export {};
declare global {
  export interface String {
    format(value: string, params?: Object): string;
    toEnum<TEnum>(type: TEnum): TEnum[keyof TEnum];
  }
}

// eslint-disable-next-line no-extend-native
String.prototype.toEnum = function <TEnum>(type: TEnum): TEnum[keyof TEnum] {
  const casted = this as keyof TEnum;
  return type[casted];
};
