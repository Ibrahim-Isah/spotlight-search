import { ReactiveBase, SearchBox } from '@appbaseio/reactivesearch';
import './App.css';

function App() {
	var themeURL = window.location.pathname;

	var theme = 'light';
	if (themeURL === '/') {
		theme = 'light';
	} else {
		theme = themeURL.substring(1);
	}
	return (
		<ReactiveBase
			app='good-books-ds'
			url='https://6a0ae3a3a8d4:6a3f508d-169b-4ed7-9680-20658120930f@appbase-demo-ansible-abxiydt-arc.searchbase.io'
			enableAppbase
			appbaseConfig={{
				recordAnalytics: true,
				userId: 'jon',
			}}
			themePreset={theme}
		>
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
					'section-header': 'section-header',
				}}
				enableFeaturedSuggestions={true}
				featuredSuggestionsConfig={{
					featuredSuggestionsGroupId: 'spotlight', // # mandatory
					maxSuggestionsPerSection: 10,
					sectionsOrder: ['repositories', 'docs', 'functions'],
				}}
			/>
		</ReactiveBase>
	);
}

export default App;
