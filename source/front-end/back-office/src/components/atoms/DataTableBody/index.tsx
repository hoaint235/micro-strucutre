import { useMemo } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { useTranslation } from 'react-i18next';
import get from 'lodash/get';
import upperFirst from 'lodash/upperFirst';
import { DataTableBodyProps } from './DataTableBody.type';
import { Typography } from '..';
import { HeaderProps } from '../DataTableHeader/DataTableHeader.type';

const prefixBody = 'body';

const DynamicTableBody = (props: DataTableBodyProps) => {
  const {
    source,
    headers,
    keyRow,
    bodyTemplate = {},
    noResultFound = 'No data found',
  } = props;
  const { t } = useTranslation();

  const Body = useMemo(
    () =>
      source.map((row) => (
        <TableRow hover tabIndex={-1} key={row[keyRow || 'id']}>
          {headers.map((header: HeaderProps, index: number) => {
            const value = get(row, header.field);
            const templateName = header.id || header.field;
            const column = `${prefixBody}${upperFirst(templateName)}`;

            return (
              <TableCell
                key={index}
                align={header.align}
                style={{ paddingTop: 8, paddingBottom: 8 }}
              >
                {bodyTemplate[column] ? (
                  bodyTemplate[column](row)
                ) : (
                  <Typography.Label color="textPrimary" label={value} />
                )}
              </TableCell>
            );
          })}
        </TableRow>
      )),
    [source, headers, keyRow, bodyTemplate]
  );

  return (
    <TableBody>
      {source.length > 0 ? (
        Body
      ) : (
        <TableRow>
          <TableCell colSpan={headers.length} style={{ textAlign: 'center' }}>
            {t(noResultFound)}
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};

export default DynamicTableBody;
