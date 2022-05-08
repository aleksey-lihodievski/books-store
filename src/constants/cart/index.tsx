import TableCellWithImage from 'components/TableCellWithImage';
import ProductQuantity from 'containers/ProductQuantity';
import { Column } from 'typings/entities/column';
import { ICartProduct } from 'typings/entities/products';

interface CartColumnsProps {
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

export const cartColumns = ({
  increaseQuantity,
  decreaseQuantity,
}: CartColumnsProps): Column<ICartProduct>[] => [
  {
    id: 'title',
    label: 'Product',
    align: 'left',
    flex: 3,
    minWidth: 200,
    renderCell: (row) => {
      return (
        <TableCellWithImage image={row.image}>{row.title}</TableCellWithImage>
      );
    },
  },
  {
    id: 'price',
    label: 'Price',
    align: 'center',
    flex: 1,
    minWidth: 100,
    renderCell: (row) => {
      return <>{row.price}$</>;
    },
  },
  {
    id: 'quantity',
    label: 'Quantity',
    align: 'center',
    flex: 1,
    minWidth: 100,
    renderCell: (row) => {
      const increase = () => {
        increaseQuantity(row.id);
      };
      const decrease = () => {
        decreaseQuantity(row.id);
      };

      return (
        <ProductQuantity
          increase={increase}
          decrease={decrease}
          quantity={row.quantity}
        />
      );
    },
  },
  {
    id: 'total',
    label: 'Position total',
    align: 'center',
    flex: 1,
    minWidth: 150,
    renderCell: (row) => {
      return <>{row.quantity * row.price}$</>;
    },
  },
];
