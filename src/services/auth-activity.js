export default function authActivity() {
    const trainerId = JSON.parse(localStorage.getItem('activity_id'));

    if (trainerId === trainerId) {
        return { Authorization: 'Bearer ' + trainerId.accessToken,
            activityId: trainerId.activityId};
    } else {
        return {};
    }
}

//deze authentication header wordt gebruikt voor
//accept/decline activity alleen die doet het niet ivm backend probleem