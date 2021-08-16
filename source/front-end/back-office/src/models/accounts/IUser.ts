import { IAddress } from "../IAddress";
import { IUserProfile } from "./IUserProfile";

export type Role = string;

export interface IUser {
  id?: string;
  roles: Role[];
  profile: IUserProfile;
  isEditAddress: boolean;
  address?: IAddress;
}
