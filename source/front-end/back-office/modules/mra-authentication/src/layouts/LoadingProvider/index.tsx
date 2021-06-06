import React, { Fragment, useEffect, useMemo, useState } from "react";
import Loading from "../../components/commons/Loading";
import { WindowEvent } from "../../utils/constants";

const LoadingProvider = () => {
  const [countLoading, setCountLoading] = useState(0);

  const decreaseLoading = () => {
    setCountLoading(countLoading - 1);
  };

  const increaseLoading = () => {
    setCountLoading(countLoading + 1);
  };

  useEffect(() => {
    window.addEventListener(WindowEvent.INCREASE_LOADING, increaseLoading);
    window.addEventListener(WindowEvent.DECREASE_LOADING, decreaseLoading);

    return () => {
      window.removeEventListener(WindowEvent.INCREASE_LOADING, increaseLoading);
      window.removeEventListener(WindowEvent.DECREASE_LOADING, decreaseLoading);
    };
  }, []);

  const renderLoading = useMemo(
    () => <Loading loading={countLoading > 0} />,
    [countLoading]
  );

  return <Fragment>{renderLoading}</Fragment>;
};

export default LoadingProvider;
