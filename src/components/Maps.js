import React, {useCallback, useRef, useState} from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow,} from "@react-google-maps/api";
import usePlacesAutocomplete, {getGeocode } from "use-places-autocomplete";
import ActivityProfile from "./activity/ActivityProfile";


// import mapStyles from "./mapStyles"

const mapContainerStyle = {
    // width: "100%" ,
    height: "70vh",
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
        googleMapsApiKey: "AIzaSyAeL0sH-SHddn-Dq_m0k0vTcuYLEzS2X5M",
    });
    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);

    const onMapClick = useCallback((e) =>{
        setMarkers(current => [...current, {
            lat: e.latLng.lat(), //calls an event
            lng: e.latLng.lng(),
            time: new Date(),
        },
        ]);
    }, []);

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        // mapRef.current.setZoom(15);
    }, [])

    if (LoadError) return "Error Loading maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <div>
            <Search/>
            <meta/> <GoogleMap
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
                    // Funtcie voor PT om locatie te kiezen
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
                        {/*<div style={{ width: '18rem' }}>*/}
                        {/*        <div>Boksen</div>*/}
                        {/*        <div >Hendrik DunantPark, Eindhoven</div>*/}
                        {/*        <div>Tijdstip: 12:00</div>*/}
                        {/*        <div>Datum: 22-11-2020</div>*/}
                        {/*        <button>Meld je hier aan</button>*/}
                        {/*</div>*/}
                        <ActivityProfile/>
                    </InfoWindow>
                ) : null}
        </GoogleMap>
        </div>
    );
}

function Locate({ panTo }) {
    return (
        <button
            className="locate"
            onClick={() => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        panTo({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        });
                    },
                    () => null
                );
            }}
        >

        </button>
    );
}



function Search({ panTo }) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 51.4381, lng: () => 5.4752 },
            radius: 100 * 1000,
        },
    });

    const handleInput = (e) => {
        setValue(e.target.value);
    };


    return (
        <div className="search">
            <div>
                onSelect ={async (address) => {
                    try {
                        const results = await getGeocode({address});
                        console.log(results.map((entry) =>{
                            return (
                                <li key={entry.formatted_address}>
                                    {entry.formatted_address}
                                </li>
                            );
                        }));
                    } catch (error) {
                        console.log("Error");
                    }

                }}>
                <input
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder="Zoek je locatie"
                />
                <div>
                    <div>
                        {status === "OK" &&
                        data.map(({ id, description }) => (
                            <div key={id} value={description} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}


//https://www.youtube.com/watch?v=WZcxJGmLbSo
