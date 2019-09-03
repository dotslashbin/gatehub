/** Imports  */
import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'

configure({ adapter: new Adapter() })

/**
 * Components to check
 */
import App from './App'
import RepoList from './components/Repolister'
import OrgList from './components/OrgLister'
import SearchField from './components/SearchField'
import SearchButton from './components/SearchButton'

/** Initializes the mock store for testing */
const mockStore = configureStore()

let store = beforeEach(() => {
	store = mockStore({})
})

/**
 * This checks to see if the app renders correctly
 */
it("renders correctly", () => {
	const wrapper = shallow(
		<App />
	)
	expect(wrapper).toMatchSnapshot();
})

/**
 * This checks to see if the repos can be rendered
 */
it('renders repos', () => {
	const items = [
		{
			id: 123123,
			name: 'test one',
			html_url: 'testoneurl.com'

		}, 
		{
			id: 3432424,
			name: 'test two',
			html_url: 'testTOWurl.com'
		}, 
	
	]

	const wrapper = shallow(<RepoList repos={items} store={store} />)

	expect(wrapper.find('Card')).toBeDefined()
})

/**
 * This checks to see if the orgs can be rendered
 */
it ('renders orgs', () => {
	const items = [
		{
			title: 'org one', 
			repos_url: 'org1.com'
		}, 
		{
			title: 'org two', 
			repos_url: 'org2.com'
		}
	]

	const wrapper = shallow(<OrgList orgs={items} store={store} />)

	expect(wrapper.find('Card')).toBeDefined()	
})

/**
 * This checks to see if the SearchField component integratse SearchButton
 */
it ('SearchField includes the SearchButton', () => {
	const wrapper = shallow(<SearchField store={store}/>).find('SearchButton')
})

/**
 * This Checks to tsee if the SearchButton component integrates button
 */
it ('SearchButton has Button', () => {
	const wrapper = shallow(<SearchButton store={store} />).find('Button')
})