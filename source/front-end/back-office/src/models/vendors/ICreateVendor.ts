import { IVendor } from "./IVendor";

export interface ICreateVendor extends Omit<IVendor, "id"> {}
