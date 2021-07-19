import { API } from "./mra-utility";
import { WindowEvents } from "./constants";

export async function getCurrentUserRoles(): Promise<string[]> {
  const response = await API.get<string[]>("/account/roles");
  return (response.data as string[]) || [];
}

export const toastHelper = {
  success(message: string) {
    window.dispatchEvent(
      new CustomEvent(WindowEvents.TOAST_SUCCESS, { detail: message })
    );
  },
  error(message: string) {
    window.dispatchEvent(
      new CustomEvent(WindowEvents.TOAST_ERROR, { detail: message })
    );
  },
};
