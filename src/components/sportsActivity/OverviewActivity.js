import React, {useEffect, useState} from 'react'
import authHeader from "../../services/auth-header";
import axios from "../../services/axios.instance";

const OverviewActivity = (props) => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        const trainerId = authHeader().id;
        axios.get(`/user_sports/trainer/${trainerId}`)
            .then((response) => {
                setPost(response.data["activities"]);
                console.log();

            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <>
            <div className="form-page">
                {post.length > 0 ? (
                    post.map((activity, index) => (
                        <div key={index} className="form">
                            <div hidden>{activity.activityId}</div>
                            <div>
                                <h4>Sportactiviteit: </h4>
                                {activity.activityName}
                            </div>
                            <div>
                                <h4>Naam Trainer: </h4>

                                {activity.nameTrainer}
                            </div>
                            <div>
                                <h4>Adres: </h4>
                                {activity.address}
                            </div>
                            <div>
                                <h4>Postcode: </h4>
                                {activity.zipcode}
                            </div>
                            <div>
                                <h4>Plaats: </h4>
                                {activity.city}
                            </div>
                            <div>
                                <h4>Tijd: </h4>
                                {activity.time}
                            </div>
                            <div>
                                <h4>Datum:</h4>
                                {activity.date}
                            </div>
                            <div>
                                <button value={activity.activityId}
                                    onClick={() => {
                                        props.editRow(activity.activityId)
                                    }}
                                >
                                    Wijzig Activiteit
                                </button>
                                <button
                                    onClick={() => props.deleteActivity(activity.activityId)}
                                >
                                    Verwijder Activiteit
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        <div colSpan={3}>Geen Sportactiviteiten</div>
                    </div>
                )}
            </div>
        </>
    )
}

export default OverviewActivity


// import React, {useEffect, useState} from 'react'
// import authHeader from "../../services/auth-header";
// import axios from "../../services/axios.instance";
//

//

//
//     const deleteSubmit = (activityId) => {
//         return axios.delete(`/activity/${activityId}`, activity.activityId)
//             .then(response => {
//                 const del = post.filter(activity => activityId !== activity.activityId)
//                 setPost(del)
//                 console.log(response);
//             }).catch(e => (
//             console.log(e)
//         ))
//     }
//
//     const editRow = () => {
//         setCurrentActivity({
//             activityId: activity.activityId,
//             activityName: activity.activityName,
//             nameTrainer: activity.nameTrainer,
//             address: activity.address,
//             zipcode: activity.zipcode,
//             city: activity.city,
//             date: activity.date,
//             time: activity.time
//         })
//         }
//
//     return (
//         <table>
//             <thead>
//             <tr>
//                 <th>SportActiviteit</th>
//                 <th>Naam Trainer</th>
//                 <th>Adres</th>
//                 <th>Postcode</th>
//                 <th>Plaats</th>
//                 <th>Tijd</th>
//                 <th>Datum</th>
//             </tr>
//             </thead>
//             <tbody>
//             {post ? (
//                 post.map((activity, i) => (
//                     <tr key={i}>
//                         <td hidden>{activity.activityId}</td>
//                         <td>{activity.activityName}</td>
//                         <td>{activity.nameTrainer}</td>
//                         <td>{activity.address}</td>
//                         <td>{activity.zipcode}</td>
//                         <td>{activity.city}</td>
//                         <td>{activity.time}</td>
//                         <td>{activity.date}</td>
//                         <td>
//                             <button onClick={() => editRow(activity.activityId)}>Edit</button>
//                             <button onClick={() => deleteSubmit(activity.activityId)}>
//                                 Delete
//                             </button>
//                         </td>
//                     </tr>
//                 ))
//             ) : (
//                 <tr>
//                     <td colSpan={3}>No users</td>
//                 </tr>
//              )}
//             </tbody>
//         </table>
//     )
// }
//
// export default OverviewActivity
//

