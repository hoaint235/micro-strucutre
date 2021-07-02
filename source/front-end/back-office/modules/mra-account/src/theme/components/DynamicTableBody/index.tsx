import React, { useMemo } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import stringHelper from "../../../utils/helpers/stringHelper";
import { v4 as uuidv4 } from "uuid";
import { DynamicTableBodyProps } from "./DynamicTableBody.type";
import { useTranslation } from "react-i18next";
import { Typography } from "@material-ui/core";

const prefixBody = "body";

const DynamicTableBody = (props: DynamicTableBodyProps) => {
  const { t } = useTranslation();
  const {
    source,
    headers,
    keyRow,
    bodyTemplate,
    noResultFound = "table.noResultFound",
  } = props;
  const renderBody = useMemo(
    () =>
      source.map((row) => {
        return (
          <TableRow hover tabIndex={-1} key={row[keyRow]}>
            {headers.map((header) => {
              const id = header.id;
              const value = row[id];
              const idV4 = uuidv4();
              const column = `${prefixBody}${stringHelper.toUpperCaseFirst(
                id
              )}`;

              return (
                <TableCell key={idV4} align={header.align}>
                  {bodyTemplate[column] ? (
                    bodyTemplate[column](row)
                  ) : (
                    <Typography
                      component="p"
                      variant="subtitle2"
                      color="textPrimary"
                    >
                      {value}
                    </Typography>
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
        renderBody
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
