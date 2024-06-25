import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { setProducts } from './redux/actions';
import { useDispatch } from 'react-redux';
import { Product } from './types/types';
import View from './components/View';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory');
        if (!response.ok) {
          throw new Error(`Error Status: ${response.status}`);
        }
        const data = await response.json();
        const updatedData = data.map((product: Product) => ({
          ...product,
          isDisabled: false,
        }));
        dispatch(setProducts(updatedData));
      } catch (error) {
        console.error('Error: ', error);
      }
    })();
  }, [dispatch]);

  return (
    <div className='app'>
        <Header />
        <View />
    </div>
  );
};

export default App;
