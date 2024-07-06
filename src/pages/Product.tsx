import { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import SearchConponent from '../components/SearchConponent';
import TableLoader from '../components/TableLoader';
import { customId, NoRecordFound, TableFetch } from '../components/Options';
import { ProductContext } from './ProductProvider';
import RealPagination from '../components/RealPagination';
import { ToastContainer, toast } from 'react-toastify';


const Product = () => {
	const { products, loading, error } = useContext(ProductContext);
	const [limit, setLimit] = useState(8);
	const [page, setPage] = useState(1);
	const [searchItem, setSearchItem] = useState("");
	const [filteredProducts, setFilteredProducts] = useState([]);



	useEffect(() => {
		if (searchItem === "") {
			setFilteredProducts(products);
		} else {
			setFilteredProducts(products.filter((product: { Name: string; Description: string; }) =>
				product.Name.toLowerCase().includes(searchItem.toLowerCase()) ||
				product.Description.toLowerCase().includes(searchItem.toLowerCase())
			));
		}
	}, [searchItem, products]);

	const handlePagination = (type: string, e: any) => {
		if (type === 'prev' && page > 1) {
			setPage(page - 1);
		} else if (type === 'next' && page < Math.ceil(filteredProducts.length / limit)) {
			setPage(page + 1);
		} else if (type === 'limit') {
			setLimit(parseInt(e.target.value));
			setPage(1); // Reset to the first page when the limit changes
		}
	};


	// Modify displayedProducts to include truncated description
	const truncateText = (text: string, length: number) => {
		if (text.length <= length) {
			return text;
		}
		return text.substring(0, length) + '...';  // Adjust the length as needed
	};
	// Adjust the length of truncated description as needed
	const displayedProducts = filteredProducts.slice((page - 1) * limit, page * limit);

	useEffect(() => {
		if (error) {
			toast.error(error.message, { toastId: customId });
		}
	}, [error])

	return (
		<div id="page-wrapper">
			<Header />
			<main >
				<ToastContainer containerId={"custom1"} />
				<SearchConponent
					placeholder={"Search by product name or description"}
					setSearchItem={setSearchItem}
					searchItem={searchItem}
					data={filteredProducts}
					limit={limit}
					handlePagination={handlePagination}
				/>

				<div className='table-container'>
					{loading && <TableLoader isLoading={loading} />}
					<table id="table" className={"table  table-hover"}>
						<thead>
							<tr>
								<th><div className='checkbox_container'><input type="checkbox" />S/N</div></th>
								<th>Image</th>
								<th>SKU</th>
								<th>Name</th>
								<th>Title</th>
								<th>Description</th>
								<th>Brand</th>
								<th>Cost Price</th>
								<th>Quanity</th>
								<th>Size</th>
							</tr>
						</thead>
						<tbody className="data-table-content">
							{loading ? (
								<TableFetch colSpan={10} />
							) : products?.length === 0 || products === undefined ? (
								<NoRecordFound colSpan={10} />
							) : (
								displayedProducts?.map((item: any, index: any) => (
									<tr key={index}>
										<td> <div className='checkbox_container'> <input type="checkbox" /> {index + 1}.</div>   </td>
										<td><img src={item?.Image_1} alt={item?.Name} className="product_img" /></td>
										<td>{item?.SKU}</td>
										<td>{item?.Brand}</td>
										<td>{truncateText(item?.Title, 20)}	 </td>
										<td>{truncateText(item?.Description, 20)}  </td>
										<td>{item?.Brand}</td>
										<td>${item["Cost Price"]}</td>
										<td>{item?.Quantity}</td>
										<td>{item?.size}</td>
									</tr>
								)))}
						</tbody>
					</table>
				</div>
				<footer className="main-table-footer">
					<div className="totalResponses">
						<h3>Total of {limit} 0f {products?.length} products - <span>Page {page}</span></h3>
					</div>
					<RealPagination
						handlePagination={handlePagination}
						pagination={{ page, totalPages: Math.ceil(filteredProducts.length / limit) }}
					/>
				</footer>
			</main>
		</div>
	)
}

export default Product
