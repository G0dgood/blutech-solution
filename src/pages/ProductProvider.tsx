import { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext<any>([]);

export const ProductProvider = ({ children }: any) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				// Replace 'supplier_name' with one of the actual supplier names: FragranceX, FragranceNet, Morris Costumes
				const response = await fetch(`http://3.88.1.181:8000/products/public/catalog?supplier=FragranceX`);
				const data = await response.json();
				setProducts(data);
			} catch (error: any) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	return (
		<ProductContext.Provider value={{ products, loading, error }}>
			{children}
		</ProductContext.Provider>
	);
};
