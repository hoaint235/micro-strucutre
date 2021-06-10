import { toast, ToastOptions } from "react-toastify";
import { t } from "@mra/utility";

const configToast: ToastOptions = {
  position: "top-center",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
};

const showSuccess = (message: string) => {
  toast.success(t(message), configToast);
};

const showError = (message: string) => {
  toast.error(t(message), configToast);
};

export { showError, showSuccess };
