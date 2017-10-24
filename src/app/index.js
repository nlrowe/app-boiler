import React, {Component} from 'react'
import getProfile from '../api/gitHub'
import styles from './app.styl'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {profile: {}}
    }

    componentDidMount() {
        getProfile().then(
            (profile) => {
                if (profile) {
                    this.setState({profile})
                }
            }
        )
    }

    render() {
        const {profile} = this.state

        return (
            <div className={styles.container}>
                <span>Hello {profile.login || 'unknown'}</span>
            </div>
        )
    }
}
