import { useMemo } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { DataTableBodyProps } from "./DataTableBody.type";
import { Typography } from "..";
import { HeaderProps } from "../DataTableHeader/DataTableHeader.type";
import { useTranslation } from "react-i18next";
import { stringHelper } from "../../../utils";

const prefixBody = "body";

const DynamicTableBody = (props: DataTableBodyProps) => {
  const {
    source,
    headers,
    keyRow,
    bodyTemplate = {},
    noResultFound = "No data found",
  } = props;
  const { t } = useTranslation();

  const Body = useMemo(
    () =>
      source.map((row) => {
        return (
          <TableRow hover tabIndex={-1} key={row[keyRow]}>
            {headers.map((header: HeaderProps, index: number) => {
              const value = row[header.field];
              const column = `${prefixBody}${stringHelper.upperFirst(
                header.field
              )}`;

              return (
                <TableCell key={index} align={header.align}>
                  {bodyTemplate[column] ? (
                    bodyTemplate[column](row)
                  ) : (
                    <Typography.Body color="textPrimary" label={value} />
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        );
      }),
    [source, headers, keyRow, bodyTemplate]
  );

  return (
    <TableBody>
      {source.length > 0 ? (
        Body
      ) : (
        <TableRow>
          <TableCell colSpan={headers.length} style={{ textAlign: "center" }}>
            {t(noResultFound)}
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};

export default DynamicTableBody;
