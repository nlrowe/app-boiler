import React from 'react'
import {shallow, mount} from 'enzyme'
import App from './'
import gitHub from '../api/gitHub'

jest.mock('../api/gitHub', () => (() => Promise.resolve({login: 'nlrowe'})))

describe('<App />', () => {
    describe('render with profile', () => {
        const app = shallow(<App />)

        it('should have the container class', () => {
            expect(app.hasClass('container')).toBe(true)
        })

        it('should render the greeting message in a span to the login name', () => {
            app.update()
            expect(app.find('span').text()).toEqual('Hello nlrowe')
        })
    })

    describe('render without profile', () => {
        const app = shallow(<App />)

        it('should have the container class', () => {
            expect(app.hasClass('container')).toBe(true)
        })

        it('should render the greeting message in a span to unknown', () => {
            app.setState({profile: {}});
            expect(app.find('span').text()).toEqual('Hello unknown')
        })
    })
})
