import React from 'react';
import { EntriesLimit } from './Options';
import Search from './Search';

interface SearchComponentProps {
	searchItem: string;
	setSearchItem: React.Dispatch<React.SetStateAction<string>>;
	placeholder: string;
	data: any[];
	limit: number;
	handlePagination: (type: string, data?: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SearchConponent: React.FC<SearchComponentProps> = ({ searchItem, setSearchItem, placeholder, data, limit, handlePagination }) => {



	return (
		<div id='reports'>
			<div className="search-area">
				<h1 className='table_title'>Department List</h1>
				<Search
					placeholder={placeholder}
					setSearchItem={setSearchItem}
					searchItem={searchItem}
				/>

				<form>
					<EntriesLimit
						limit={limit}
						data={data}
						handlePagination={handlePagination}
					/>
				</form>
			</div>
		</div>
	)
}

export default SearchConponent