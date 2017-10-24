import React from 'react'
import {shallow} from 'enzyme'
import App from './'

jest.mock('../api/gitHub', () => (() => Promise.resolve({login: 'nlrowe'})))

describe('<App />', () => {
    describe('basic render', () => {
        const app = shallow(<App />)

        it('should have the container class', () => {
            expect(app.hasClass('container')).toBe(true)
        })

        it('should not render the greeting message before the profile is fetched', () => {
            expect(app.find('span').length).toEqual(0)
        })
    })

    describe('render with profile', () => {
        const app = shallow(<App />)

        it('should render the greeting message in a span to the login name', () => {
            app.update()
            expect(app.find('span').text()).toEqual('Hello nlrowe')
        })
    })

    describe('render without profile', () => {
        const app = shallow(<App />)

        it('should render the greeting message in a span to unknown', () => {
            app.setState({profile: {}})
            expect(app.find('span').text()).toEqual('Hello unknown')
        })
    })
})
