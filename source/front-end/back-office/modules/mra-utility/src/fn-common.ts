import { API } from "./mra-utility";

export async function getCurrentUserRoles(): Promise<string[]> {
  const response = await API.get('/account/users/roles');
  return response.data as string[] || [];
}