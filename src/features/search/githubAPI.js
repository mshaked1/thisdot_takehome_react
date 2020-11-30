import axios from 'axios'

const apiURL = 'http://api.github.com/search'

export async function getResults(searchTerm, category, page) {
    let headers = category === 'topics' ? {'Accept': 'application/vnd.github.mercy-preview+json'} : null;
    let searchURL = `${apiURL}/${category}?q=${searchTerm}`;
    searchURL = category !== 'topics' ? `${searchURL}&page=${page}` : searchURL;
    const usersResponse = await axios.get(searchURL, { headers });
    return usersResponse.data;
}