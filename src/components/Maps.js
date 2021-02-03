import React, {useCallback, useEffect, useRef, useState} from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow,} from "@react-google-maps/api";
import { formatRelative } from "date-fns";


// import mapStyles from "./mapStyles"

const libraries = ["places"];
const mapContainerStyle = {
    width: "82vw" ,
    height: "40vh",
};
const eindhoven = {
    lat: 51.4381,
    lng: 5.4752,
};
const options = {
    // styles: mapStyles,
    disableDefaultUI: true, // extra features als van de kaart verwijderd
    zoomControl: true, //in en uitzoomen behouden
};

export default function Maps() {
    const {isLoaded, LoadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyAeL0sH-SHddn-Dq_m0k0vTcuYLEzS2X5M&callback=initMap",
        libraries,
    });
    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] =useState(null);

    const onMapClick = useCallback(event =>{
        setMarkers(current => [...current, {
            lat: event.latLng.lat(), //calls an event
            lng: event.latLng.lng(),
            time: new Date(),
        },
        ]);
        setSelected( {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date(),
        });
    }, []);



    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(15);
    }, [])

    if (LoadError) return "Error Loading maps";
    if (!isLoaded) return "Loading Maps";

    // const [plaats, setPLaats] = useState("");



    // const mapActivityChange = event => {
    //     const {id, value} = event.target;
    //     (setUpdateActivity({
    //         ...updateActivity,
    //         [id]: value
    //     }));
    // };
    //
    // useEffect(() => {
    //
    // }, [])

    return (
        <>
            <div>

                <GoogleMap
                    id="map"
                    mapContainerStyle={mapContainerStyle}
                    zoom={12.7}
                    center={eindhoven}
                    options={options}
                    onClick={onMapClick}
                    onLoad={onMapLoad}
                >
                    {markers.map((marker) => (
                        <Marker
                            // Funcie voor PT om locatie te kiezen
                            //  icon is een optie https://www.youtube.com/watch?v=WZcxJGmLbSo zie vanaf 16:30
                            key={`${marker.lat}-${marker.lng}`}
                            position={{lat: marker.lat, lng: marker.lng}}
                            //infoscherm dat gepopped wordt als je op een marker drukt
                            onClick={() => {
                                setSelected(marker);
                            }}
                        />
                    ))}

                    {selected ?
                        (<InfoWindow
                                position={{lat: selected.lat, lng: selected.lng}}
                                onCloseClick={() => {setSelected(null);}}>
                                <div>
                                    <h2>Boksen</h2>
                                    <p>12:00 {formatRelative(selected.time, new Date())}</p>
                                </div>
                            </InfoWindow>
                        ) : null}
                </GoogleMap>
            </div>
        </>
    );
}


//https://www.youtube.com/watch?v=WZcxJGmLbSo