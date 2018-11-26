const _baseUrl = 'https://jsonplaceholder.typicode.com/'

const generateRequest = (url) => {
    return fetch(_baseUrl + url)
        .then(res => res.json())
        .then(res => res)
        .catch(err => Promise.reject(err))
}

export const sdkCallExample1 = () => {
    return generateRequest('todos/1');
}

export const sdkCallExample2 = () => {
    return generateRequest('todos/2');
}

