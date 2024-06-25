import { useState } from 'react';
import EditProductModal from './EditProductModal';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions';
import EyeOpen from '../assets/eyeOpen.svg';
import EyeClose from '../assets/eyeClose.svg';
import EyeDisabled from '../assets/eyeDisabled.svg';
import PencilDisabled from '../assets/pencilDisabled.svg';
import PencilEnabled from '../assets/pencilEnabled.svg';
import TrashDisabled from '../assets/trashDisabled.svg';
import TrashEnabled from '../assets/trashEnabled.svg';
import './Inventory.css';

const Inventory = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const isAdmin = useSelector((state: RootState) => state.admin.isAdmin);
  const dispatch = useDispatch();
  const [editingProduct, setEditingProduct] = useState(null);

  const handleDelete = (name: string) => {
    dispatch(setProducts(products.filter(product => product.name !== name)));
  };

  const handleDisable = (name: string) => {
    dispatch(setProducts(products.map(product => product.name === name ? { ...product, isDisabled: !product.isDisabled } : product)));
  };

  const handleEdit = (product: any) => {
    setEditingProduct(product);
  };

  const handleCloseModal = () => {
    setEditingProduct(null);
  };

  return (
    <div className="product-table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th><div className='title-mark'>Name</div></th>
            <th><div className='title-mark'>Category</div></th>
            <th><div className='title-mark'>Price</div></th>
            <th><div className='title-mark'>Quantity</div></th>
            <th><div className='title-mark'>Value</div></th>
            <th style={{ paddingLeft: '28px' }}><div className='title-mark'>Action</div></th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} className={product.isDisabled ? 'disabled' : ''}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price[0] === '$' ? product.price : `$${product.price}`}</td>
              <td>{product.quantity}</td>
              <td>{product.value[0] === '$' ? product.value : `$${product.value}`}</td>
              <td className='icon-class'>
                {isAdmin ? (
                  <>
                    <img width={20} height={20} src={product.isDisabled ? PencilDisabled : PencilEnabled} onClick={() => { !product.isDisabled && handleEdit(product) }} alt='' />
                    <img width={20} height={20} src={product.isDisabled ? EyeClose : EyeOpen} onClick={() => handleDisable(product.name)} alt='' />
                    <img width={20} height={20} src={TrashEnabled} onClick={() => handleDelete(product.name)} alt='' />
                  </>
                ) : (
                  <>
                    <img width={20} height={20} src={PencilDisabled} alt='' />
                    <img width={20} height={20} src={EyeDisabled} alt='' />
                    <img width={20} height={20} src={TrashDisabled} alt='' />
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingProduct && <EditProductModal product={editingProduct} onClose={handleCloseModal} />}
    </div>
  );
};

export default Inventory;
