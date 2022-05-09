export type Column<T> = {
  id: string;
  label: string;
  flex?: number;
  minWidth?: number;
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  renderCell?: <K extends T>(row: K) => JSX.Element;
};
