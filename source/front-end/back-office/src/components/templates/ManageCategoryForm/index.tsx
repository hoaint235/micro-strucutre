import { yupResolver } from '@hookform/resolvers/yup';
import {
  Dialog,
  Grid,
  DialogContent,
  DialogTitle,
  DialogActions,
  Box,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import toInteger from 'lodash/toInteger';
import Form from '../../../hook-forms';
import { Errors } from '../../../utils';
import { Button, Typography } from '../../atoms';
import { ICategory } from '../../../models/category';

const LEVEL_MASTER: number = 0;
const schema = yup.object().shape({
  name: yup.string().trim().required(Errors.required),
  level: yup.number().required(Errors.required),
  parent: yup.string().when('level', {
    is: LEVEL_MASTER,
    then: yup.string().trim().notRequired(),
    otherwise: yup.string().required(Errors.required),
  }),
});

const mockParents: SelectionProps[] = [
  {
    key: '0',
    value: 'parent 0',
  },
  {
    key: '1',
    value: 'parent 1',
  },
  {
    key: '2',
    value: 'parent 2',
  },
];

const ManageCategoryForm = (props: DialogFormProps<ICategory>) => {
  const {
    state: { open, params = {} },
    onSubmit,
    onClose,
  } = props;
  const form = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { isDirty, isValid },
  } = form;
  const [levels, setLevels] = useState<SelectionProps[]>([
    { key: '0', value: '0' },
    { key: '1', value: '1' },
    { key: '2', value: '2' },
  ]);
  const [parents, setParents] = useState<SelectionProps[]>([]);

  const fetchCategory = () => {
    const categoryId = params?.categoryId;
    if (categoryId) {
      // TODO: fetch data
    }
  };

  const levelField = toInteger(watch('level'));

  useEffect(() => {
    const levelCalc = levelField - 1;
    if (levelCalc >= LEVEL_MASTER) {
      const parentFilter = mockParents.filter(
        (x) => x.key === levelCalc.toString()
      );
      setParents(parentFilter);
      setValue('parent', '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [levelField]);

  useEffect(() => {
    fetchCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSave = async (data: ICategory) => {
    await onSubmit(data);
    onClose();
  };

  return (
    <Dialog open={open} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Typography.Body label="manageCategoryDialog.title" />
      </DialogTitle>
      <DialogContent dividers>
        <form id="form" onSubmit={handleSubmit(onSave)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Form.Input form={form} name="name" label="fields.name" />
            </Grid>
            <Grid item xs={12}>
              <Form.SingleSelect
                form={form}
                items={levels}
                name="level"
                label="fields.level"
              />
            </Grid>
            <Grid item xs={12}>
              <Form.SingleSelect
                form={form}
                items={parents}
                disabled={levelField === LEVEL_MASTER}
                name="parent"
                label="fields.parent"
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Box pr={2}>
          <Grid container item justifyContent="flex-end" spacing={2}>
            <Grid item>
              <Button.Default
                name="cancel"
                label="buttons.cancel"
                onClick={onClose}
              />
            </Grid>
            <Grid item>
              <Button.Primary
                name="submit"
                type="submit"
                label="buttons.submit"
                form="form"
                disabled={!isDirty || !isValid}
              />
            </Grid>
          </Grid>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default ManageCategoryForm;
