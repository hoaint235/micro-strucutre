import React, { Fragment, useMemo, useState } from "react";

type FunctionStepForm<TStatus> = React.FunctionComponent<
  HandleStepProps<TStatus>
>;

type Props<TStatus extends string> = {
  initData: StepProps<TStatus>;
  formSteps: {
    [status in TStatus]: FunctionStepForm<TStatus>;
  };
};

export function useStepForm<TStatus extends string>({
  initData,
  formSteps,
}: Props<TStatus>) {
  const [stepData, setStepData] = useState<StepProps<TStatus>>({ ...initData });

  const onHandleNavigate = (data: StepProps<TStatus>) => {
    setStepData({ ...data });
  };

  const render = (status: TStatus) => {
    const Component = Object.entries<FunctionStepForm<TStatus>>(formSteps).find(
      (x) => x[0] === status
    )[1];

    return (
      <Component
        stepObj={{ ...stepData }}
        onNavigateStep={(data) => {
          onHandleNavigate(data);
        }}
      />
    );
  };

  const Component = useMemo(
    () => <Fragment>{render(stepData.status)}</Fragment>,
    [stepData]
  );
  return Component;
}

export default useStepForm;
