export default function authActivity() {
    const trainerId = JSON.parse(localStorage.getItem('user_id'));

    if (trainerId && trainerId.accessToken) {
        return { Authorization: 'Bearer ' + trainerId.accessToken };
    } else {
        return {};
    }
}