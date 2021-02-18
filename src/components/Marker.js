import React, {useEffect, useState} from "react";
import axios from "../services/axios.instance";
import {InfoWindow, Marker} from "@react-google-maps/api";
import {formatRelative} from "date-fns";
import AcceptActivity from "./activity/AcceptActivity";
import InfoActivity from "./InfoWindow";


export default function AddMarker() {
    const [place, setPlace] = useState([]);
    // const [selected, setSelected] = useState([]);

    useEffect(() =>{
          axios.get(`/map/map`)
            .then((response) =>{
                setPlace(response.data)
                const {lat, lng} = response.data
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
        <div>
            <div>
            {place.map((marker, i) =>(
                <Marker
                    key={i}
                    position={{lat: marker.lat, lng: marker.lng}}
                    onClick={() => {
                        setPlace(marker);
                    }}

                >

                    {/*{selected.map((select, o) =>(<InfoWindow*/}
                    {/*    key={o}*/}
                    {/*    position={{lat: select.lat, lng: select.lng}}*/}
                    {/*    onCloseClick={()=>{*/}
                    {/*        setSelected(select);*/}
                    {/*    }}>*/}
                    {/*    <div>*/}
                    {/*        <h2>Sportactiviteit</h2>*/}
                    {/*        <p>Activiteit: Boksen</p>*/}
                    {/*        <AcceptActivity/>*/}
                    {/*    </div>*/}

                    {/*</InfoWindow> ))}*/}

                </Marker>
               ))}


            </div>
        </div>
    );

}
