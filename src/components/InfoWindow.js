// import React, {useEffect, useState} from "react";
// import axios from "../services/axios.instance";
// import {InfoWindow} from "@react-google-maps/api";
// import {formatRelative} from "date-fns";
// import AcceptActivity from "./activity/AcceptActivity";
//
// export default function InfoActivity() {
//     const [selected, setSelected] = useState([]);
//
//     useEffect(() =>{
//         axios.get(`/map/map`)
//             .then((response) =>{
//                 setSelected(response.data)
//                 const info = response.data
//                 console.log(info)
//             })
//             .catch((e)=>
//                 console.error(e))
//     },[]);
//
//     return(
//         <div>
//             {selected ? (<InfoWindow
//                 position={{lat: selected.lat, lng: selected.lng}}
//                 onCloseClick={()=>{
//                     setSelected(null);
//                 }}>
//                 <div>
//                     <h2>Sportactiviteit</h2>
//                     <p>Activiteit: Boksen</p>
//                     <AcceptActivity/>
//                 </div>
//
//             </InfoWindow>) : null}
//         </div>
//     )
// }