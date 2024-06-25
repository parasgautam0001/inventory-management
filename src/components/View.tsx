import React, { useState } from 'react';
import Widgets from './Widgets';
import Inventory from './Inventory';
import EditProductModal from './EditProductModal';
import { Product } from '../types/types';

const View: React.FC = () => {
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

    return (
        <div>
            <Widgets />
            <Inventory />
            {editingProduct && <EditProductModal product={editingProduct} onClose={() => setEditingProduct(null)} />}
        </div>
    );
};

export default View;
