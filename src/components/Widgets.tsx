import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import Cart from '../assets/cart.svg';
import Dollar from '../assets/dollar.svg';
import OutOfStock from '../assets/outOfStock.svg';
import Category from '../assets/category.svg';
import './Widgets.css';

const Widgets: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);

  const totalProducts = products.filter(product => !product.isDisabled).length;
  function currencyToNumber(currency: string) {
    return parseFloat(currency.replace(/[$,]/g, ''));
  }

  let totalStoreValue = products.reduce((acc, product) => {
    return acc + (product.isDisabled ? 0 : currencyToNumber(product.value));
  }, 0);
  const outOfStock = products.filter(product => !product.isDisabled && product.quantity === 0).length;
  const categories = new Set(products
    .filter(product => !product.isDisabled)
    .map(product => product.category)
  ).size;

  return (
    <div className="top-widgets">
      <div className="widget">
        <div className='widget-container'>
          <img className='widget-icon' src={Cart} alt='' />
          <div>
            <span>Total product</span>
            <h2>{totalProducts}</h2>
          </div>
        </div>
      </div>
      <div className="widget">
        <div className='widget-container'>
          <img className='widget-icon' src={Dollar} alt='' />
          <div>
            <span>Total store value</span>
            <h2>{totalStoreValue.toLocaleString()}</h2>
          </div>
        </div>
      </div>
      <div className="widget">
        <div className='widget-container'>
          <img className='widget-icon' src={OutOfStock} alt='' />
          <div>
            <span>Out of stocks</span>
            <h2>{outOfStock}</h2>
          </div>
        </div>
      </div>
      <div className="widget">
        <div className='widget-container'>
          <img className='widget-icon' src={Category} alt='' />
          <div>
            <span>No of Category</span>
            <h2>{categories}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
