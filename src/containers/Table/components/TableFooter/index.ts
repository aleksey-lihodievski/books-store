import styled from 'styled-components';

import { Theme } from 'styles/theme';
import { TableRow } from '../TableRow';

const TableFooter = styled(TableRow)`
  background-color: ${(props) =>
    (props.theme as Theme).palette.gray.extraLight};
`;

export default TableFooter;
