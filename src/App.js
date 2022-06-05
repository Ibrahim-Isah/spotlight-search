import { ReactiveBase, SearchBox } from '@appbaseio/reactivesearch';
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
		>
			<div className='row'>
				<div className='col'>
					<SearchBox
						title='SearchBox'
						defaultValue=''
						dataField={['original_title', 'original_title.search']}
						componentId='BookSensor'
						highlight
						URLParams
						enablePopularSuggestions
						popularSuggestionsConfig={{
							size: 3,
							minChars: 2,
							index: 'good-books-ds',
						}}
						enableRecentSuggestions
						recentSuggestionsConfig={{
							size: 3,
							index: 'good-books-ds',
							minChars: 4,
						}}
						size={14}
						enablePredictiveSuggestions
						index='good-books-ds'
						showClear
						renderNoSuggestion='No suggestions found.'
						innerClass={{
							'suggestion-item': 'test-suggestion',
							'active-suggestion-item': 'active-test-suggestion',
						}}
					/>
				</div>
			</div>
		</ReactiveBase>
	);
}

export default App;
