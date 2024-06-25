import React, { useState } from 'react';
import { Product } from '../types/types';
import './EditProductModal.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { setProducts } from '../redux/actions';

interface EditProductModalProps {
  product: Product;
  onClose: () => void;
}
const EditProductModal: React.FC<EditProductModalProps> = ({ product, onClose }) => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product.price.toString()[0] === '$' ? parseInt(product.price.toString().slice(1)) : parseInt(product.price.toString()));
  const [quantity, setQuantity] = useState(product.quantity);
  const [value, setValue] = useState(product.value.toString()[0] === '$' ? parseInt(product.value.toString().slice(1)) : parseInt(product.value.toString()));

  const handleSave = () => {
    const newProduct = products.map(p =>
      p.name === product.name ? { ...p, category, price: price.toString(), quantity, value: value.toString() } : p
    );
    dispatch(setProducts(newProduct));
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit product
            <div className='product-name'>{product.name}</div>
          </h2>
          <button className="close-button" onClick={onClose}>✖️</button>
        </div>
        <div className="modal-body">
          <div className='modal-group'>
            <div className="input-group">
              <label>Category</label>
              <input
                type="text"
                value={category}
                onChange={e => setCategory(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Price</label>
              <input
                type="number"
                value={price}
                onChange={e => e.target.value.length <= 8 && setPrice(Number(e.target.value))}
              />
            </div>
          </div>
          <div className='modal-group'>
            <div className="input-group">
              <label>Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={e => e.target.value.length <= 8 && setQuantity(Number(e.target.value))}
              />
            </div>
            <div className="input-group">
              <label>Value</label>
              <input
                type="number"
                value={value}
                onChange={e => e.target.value.length <= 8 && setValue(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button className="save-button" onClick={handleSave} disabled={quantity < 0 || price < 0}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
