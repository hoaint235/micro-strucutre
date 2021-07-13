import { API } from "./mra-utility";

export async function getCurrentUserRoles(): Promise<string[]> {
  const response = await API.get<string[]>("/account/roles");
  return (response.data as string[]) || [];
}
