declare type SelectionProps<T = string> = {
  key: T;
  value: string;
};

declare type GlobalProps = any;
declare type ClientMetadata = { [key: string]: string };
declare type StepProps<TStatus> = {
  status?: TStatus;
  data?: ExtendProps;
};
declare type HandleStepProps<TStatus> = {
  stepObj?: StepProps<TStatus>;
  onNavigateStep?: (obj: StepProps<TStatus>) => void;
};

declare type ExtendProps = {
  [key: string]: any;
};

declare type FormMode = "Add" | "Update";
declare type DialogStateProps = {
  open: boolean;
  mode: FormMode;
  params?: ExtendProps;
};

declare type DialogFormProps<TModel> = {
  state: DialogStateProps;
  onClose: () => void;
  onSubmit: (data: TModel) => void;
};

declare type TreeItem = {
  id: string;
  label: string;
  nodes?: TreeItem[];
};

declare module "form" {
  declare type ManageForm<TModel = any> = {
    defaultValues?: TModel;
    onBack: () => void;
    onSubmit: (data: TModel) => void;
  };
}
