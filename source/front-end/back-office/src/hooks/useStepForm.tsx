import React, { Fragment, useMemo, useState } from 'react';
import { Typography } from '../components/atoms';

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

  const render = (status: TStatus | undefined) => {
    const Component = Object.entries<FunctionStepForm<TStatus>>(formSteps).find(
      (x) => x[0] === status
    )?.[1];

    if (!Component) {
      return <Typography.Label label="Cannot render form" />;
    }

    return (
      <Component
        stepObj={{ ...stepData }}
        onNavigateStep={(data: StepProps<TStatus>) => {
          onHandleNavigate(data);
        }}
      />
    );
  };

  const Component = useMemo(
    () => <>{render(stepData.status)}</>,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [stepData]
  );
  return Component;
}

export default useStepForm;
