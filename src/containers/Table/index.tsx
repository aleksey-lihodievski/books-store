import React from "react";

import { Column } from "typings/column";
import { IProduct } from "typings/entities/products";
import { Table } from "./components/Table";
import { TableBody } from "./components/TableBody";
import { TableCell } from "./components/TableCell";
import TableFooter from "./components/TableFooter";
import { TableHead } from "./components/TableHead";
import { TableRow } from "./components/TableRow";
import { TableWrapper } from "./components/TableWrapper";

type ITableListProps<T> = {
  rows: T[];
  columns: Column<T>[];
  footer?: React.ReactNode;
};

const TableList = <T extends IProduct>({
  rows,
  columns,
  footer,
}: ITableListProps<T>): React.ReactElement => {
  return (
    <TableWrapper>
      <Table>
        <TableHead>
          {columns.map((column) => (
            <TableCell
              key={column.id}
              style={{
                minWidth: column.minWidth,
                flex: column.flex,
                justifyContent: column.align,
              }}
            >
              {column.label}
            </TableCell>
          ))}
        </TableHead>
        <TableBody>
          {rows.map((row: T) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell
                  key={`${column.id}-${row.id}`}
                  style={{
                    minWidth: column.minWidth,
                    flex: column.flex,
                    justifyContent: column.align,
                  }}
                >
                  {column.renderCell
                    ? column.renderCell(row)
                    : String(row[column.id as keyof IProduct])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>{footer}</TableFooter>
      </Table>
    </TableWrapper>
  );
};

export default React.memo(TableList);
