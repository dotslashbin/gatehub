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

const mockStore = configureStore()

let store = beforeEach(() => {
	store = mockStore({})
})

it("renders correctly", () => {
	const wrapper = shallow(
		<App />
	)
	expect(wrapper).toMatchSnapshot();
})

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

it ('SearchField includes the SearchButton', () => {
	const wrapper = shallow(<SearchField store={store}/>).find('SearchButton')
})

it ('SearchButton has Button', () => {
	const wrapper = shallow(<SearchButton store={store} />).find('Button')
})