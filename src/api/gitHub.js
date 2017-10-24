import fetch from 'isomorphic-fetch'

const options = {
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
}

const getProfile = () => (
    fetch('https://api.github.com/users/nlrowe', {...options, method: 'GET'})
        .then(response => response.json())
        .catch(() => console.error('Could not fetch your profile'))
)

export default getProfile
