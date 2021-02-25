export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user_id'));

    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken,
            id: user.id,
            };
    } else {
        return {};
    }
}

