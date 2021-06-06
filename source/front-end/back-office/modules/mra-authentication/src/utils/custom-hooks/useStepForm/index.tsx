import React, { Fragment, useMemo, useState } from "react";

type Props<TStatus extends string> = {
  initData: StepProps<TStatus>;
  formSteps: {
    [status in TStatus]: React.FunctionComponent<HandleStepProps<TStatus>>;
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
    const Component = Object.entries<
      React.FunctionComponent<HandleStepProps<TStatus>>
    >(formSteps).find((x) => x[0] === status)[1];

    if (!Component) {
      return <div>Form is empty, cannot render form</div>;
    }

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
