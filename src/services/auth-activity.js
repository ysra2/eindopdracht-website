export default function authActivity() {
    const trainerId = JSON.parse(localStorage.getItem('activities'));

    if (trainerId === trainerId) {
        return { activityId: trainerId.activityId};
    } else {
        return {};
    }
}