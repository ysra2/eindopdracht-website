import React, {useEffect, useState} from "react";
import axios from "../services/axios.instance";
import {InfoWindow, Marker} from "@react-google-maps/api";


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

                {selected && console.log(typeof selected.lng)}
                {/*{selected ? (<InfoWindow*/}
                {/*    position={{lat: 51.451441, lng: 5.486014}}*/}
                {/*    >*/}
                {/*        <div>hoi</div>*/}
                {/*    </InfoWindow>*/}
                {/*): null}*/}
        </>
    );

}
