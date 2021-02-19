// import React, {useState} from "react"
// import axios from "../services/axios.instance"
// import authHeader from "../services/auth-header";
//
//
//
//
// const AddActivity = () => {
//     const [addActivity, setAddActivity] = useState({
//         activityName: "",
//         nameTrainer: "",
//         address: "",
//         zipCode: "",
//         city: "",
//         date: "",
//         time: ""});
//
//     const activityChange = event => {
//         const {id, value} = event.target;
//         (setAddActivity({
//             ...addActivity,
//             [id]: value
//         }));
//     };
//
//     const createActivity =  async () => {
//         const trainerId = authHeader().id;
//         console.log(trainerId);
//         return axios.post(`/activity/${trainerId}`,
//             {
//                 activityName: addActivity.activityName,
//                 nameTrainer: addActivity.nameTrainer,
//                 address: addActivity.address,
//                 zipcode: addActivity.zipcode,
//                 city: addActivity.city,
//                 date: addActivity.date,
//                 time: addActivity.time
//             }, authHeader)
//             .then((addActivity) =>{
//                 console.log(addActivity);
//             })
//             .catch((error) => {
//             console.log(error);
//             });
//     }
//
//     return(
//         <div>
//             <form/>
//             {/*{successful ? (*/}
//             {/*    <div>*/}
//             {/*        <h4>Succesvol geregistreerd</h4>*/}
//             {/*    </div>*/}
//             {/*):(*/}
//
//             <div>
//                 <label>Sportactiviteit</label>
//                 <input id="activityName"  placeholder="Sportactiviteit"
//                        value={addActivity.activityName} onChange={activityChange}/>
//
//             </div>
//             <div>
//                 <label>Naam Trainer</label>
//                 <input id="nameTrainer" placeholder="Naam Trainer"
//                        value={addActivity.nameTrainer} onChange={activityChange}/>
//
//             </div>
//             <div >
//                 <label>Adres</label>
//                 <input id="address" type="address" placeholder="Adres"
//                        value={addActivity.address}
//                        onChange={activityChange}/>
//
//             </div>
//             <div >
//                 <label>Postcode</label>
//                 <input id="zipCode" type="zipCode" placeholder="postcode"
//                        value={addActivity.zipCode}
//                        onChange={activityChange}
//                 />
//
//             </div>
//             <div onChange={activityChange}>
//                 <label>Woonplaats</label>
//                 <input id="city" type="city" placeholder="Woonplaats"
//                        value={addActivity.city}
//                        onChange={activityChange}/>
//
//             </div>
//             <div>
//                 <label>Tijd</label>
//                 <input id="time" type="time" placeholder="Tijd"
//                        value={addActivity.time} onChange={activityChange}/>
//
//             </div>
//             <div>
//                 <label>Datum</label>
//                 <input id="date" type="date" placeholder="Datum"
//                        value={addActivity.date} onChange={activityChange}/>
//
//             </div>
//             <button onClick={createActivity} >
//                 Submit
//             </button>
//                 {/*)}*/}
//         </div>
//     )
// }
//
// export default AddActivity;
