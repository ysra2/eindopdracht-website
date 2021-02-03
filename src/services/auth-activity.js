export default function authActivity() {
    const trainerId = JSON.parse(localStorage.getItem('activity_id'));

    if (trainerId === trainerId) {
        return { activityId: trainerId.activityId};
    } else {
        return {};
    }
}