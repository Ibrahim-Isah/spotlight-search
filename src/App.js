import { ReactiveBase } from '@appbaseio/reactivesearch';
import './App.css';

function App() {
	return (
		<ReactiveBase
			app='good-books-ds'
			url='https://b7GLrKxsd:095e2eab-3800-491b-abf6-6b15cf8edf87@appbase-demo-ansible-abxiydt-arc.searchbase.io'
			enableAppbase
			appbaseConfig={{
				recordAnalytics: true,
				userId: 'jon',
			}}
			themePreset='light'
		></ReactiveBase>
	);
}

export default App;
