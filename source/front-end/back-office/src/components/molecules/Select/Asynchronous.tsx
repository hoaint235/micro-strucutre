import { CircularProgress } from '@material-ui/core';
import {
  Autocomplete as Control,
  AutocompleteInputChangeReason,
} from '@material-ui/lab';
import { useCallback, useEffect, useState } from 'react';
import debounceFn from 'lodash/debounce';
import { useTranslation } from 'react-i18next';
import { Field } from '@atoms';
import { AutoAsynchronousProps } from './Select.type';

const Asynchronous = (props: AutoAsynchronousProps) => {
  const {
    label,
    name,
    value,
    InputProps,
    onLoadAsync,
    debounceTime = 500,
    searchLength = 2,
    loadingText = 'commons.loadingText',
    ...restProps
  } = props;
  const [options, setOptions] = useState<SelectionProps[]>([]);
  const [noResult, setNoResult] = useState(false);
  const [open, setOpen] = useState(false);
  const loading = open && options.length === 0;
  const { t } = useTranslation();

  const isLoading = () => loading && !noResult;

  const fetchOption = async (query: string) => {
    if (!onLoadAsync) {
      return;
    }

    const response = await onLoadAsync(query);
    setOptions([...response]);
    if (response.length === 0) {
      setNoResult(true);
    }
  };

  const debounceFetchOptions = useCallback(
    debounceFn(async (query: string) => {
      await fetchOption(query);
    }, debounceTime),
    []
  );

  useEffect(() => {
    if (!open) {
      setOptions([]);
      setNoResult(false);
    }
  }, [open]);

  const onSearchChange = (
    _: any,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => {
    if (reason === 'input' && value.length >= searchLength) {
      setOpen(true);
      if (noResult) {
        setNoResult(false);
      }
      debounceFetchOptions(value);
    }
  };

  return (
    <Control
      open={open}
      onOpen={() => {
        setOpen(true);
        setNoResult(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      options={options}
      value={value}
      loading={isLoading()}
      loadingText={t(loadingText)}
      getOptionLabel={(option) => option && option.value}
      getOptionSelected={(option, value) => option.key === value.key}
      filterOptions={(x) => x}
      onInputChange={onSearchChange}
      renderInput={(params) => (
        <Field.Input
          {...params}
          label={label}
          name={name}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading() && <CircularProgress color="inherit" size={16} />}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
          {...InputProps}
        />
      )}
      {...restProps}
    />
  );
};

export default Asynchronous;
