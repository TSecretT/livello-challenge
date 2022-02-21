import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './redux/store';
import Movie from './screens/Movie';

import Search from './screens/Search';

const Navigation = () => {
	const movie = useSelector((state: any) => state.selectedMovie);
	
	return movie? <Movie movie={movie} /> : <Search />  
}

export default function App() {

	return <Provider store={store}>
		<Navigation />
	</Provider>
}
