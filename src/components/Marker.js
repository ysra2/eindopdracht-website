import React, {useEffect, useState} from "react";
import axios from "../services/axios.instance";
import {InfoWindow, Marker} from "@react-google-maps/api";
import AcceptActivity from "./activity/AcceptActivity";


export default function AddMarker() {
    const [places, setPlaces] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() =>{
          axios.get(`/map/map`)
            .then((response) =>{
                setPlaces(response.data)
                const {lat, lng} = response.data
                console.log(response.data)
                console.log(lat, lng)
          })
          //     .then((response) =>{
          //     setSelected(response.data)
          //     const info = response.data
          //     console.log(info)
          // })

        .catch((e) =>
                          console.error(e))

    },[]);


    return(
        <>
            {places.map((marker, i) =>(
                <Marker
                    key={i}
                    position={{lat: marker.lat, lng: marker.lng}}
                    onClick={() => {
                        setSelected(marker);
                    }}

                />
               ))}

            {selected ? (<InfoWindow
                    position={{lat: selected?.lat || 51.451441, lng: selected?.lng || 5.486014}}
                    onCloseClick={() => setSelected(null)}
                >
                    <div>
                        <ul>
                            <li>{selected["info_window"]?.activityName}</li>
                            <li>{selected["info_window"]?.nameTrainer}</li>
                            <li>{selected["info_window"]?.address}</li>
                            <li>{selected["info_window"]?.time}</li>
                            <li>{selected["info_window"]?.date}</li>
                        </ul>
                        <AcceptActivity/>
                    </div>
                </InfoWindow>
            ): null}



        </>
    );

}
