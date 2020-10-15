const BASE_URL = '/api/events';

export async function getAll() {
    return fetch(BASE_URL, {}).then(res => res.json());
}

export async function getOne(id) {
    return fetch(`${BASE_URL}/${id}`).then(res => res.json());
}

export async function create(post) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(post)
    }).then(res => res.json());
}

export async function update(post) {
    return fetch(`${BASE_URL}/${post._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(post)
    }).then(res => res.json());
}

export async function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}