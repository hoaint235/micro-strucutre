import React, { useMemo } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import stringHelper from "../../../utils/helpers/stringHelper";
import { v4 as uuidv4 } from "uuid";

const prefixBody = "body";

const DynamicTableBody = (props) => {
  const { source, headers, keyRow, bodyTemplate } = props;
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
                  {bodyTemplate[column] ? bodyTemplate[column](row) : value}
                </TableCell>
              );
            })}
          </TableRow>
        );
      }),
    [source, headers, keyRow, bodyTemplate]
  );

  return <TableBody>{renderBody}</TableBody>;
};

export default DynamicTableBody;
