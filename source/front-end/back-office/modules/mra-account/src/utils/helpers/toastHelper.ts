import { toast, ToastOptions } from "react-toastify";
import i18n from "../../i18n";

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
  toast.success(i18n.t(message), configToast);
};

const showError = (message: string) => {
  toast.error(i18n.t(message), configToast);
};

export { showError, showSuccess };
