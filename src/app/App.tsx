import {useAppDispatch, useAppSelector} from "./hooks";

function App() {
	const isLoading = useAppSelector((state) => state.app.isLoading);
	const dispatch = useAppDispatch();

	return (
		<div className="App">
			{isLoading && <h1>Loader...</h1>}
		</div>
	);
}

export default App;