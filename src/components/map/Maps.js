import React, {useCallback,useRef,useState} from 'react';
import { GoogleMap, useLoadScript} from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng,} from "use-places-autocomplete";
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox";
import mapStyles from "../../mapStyles";
import "@reach/combobox/styles.css";
import AddMarker from "./AddMarker";

//door het hier te plaats zorgt het ervoor dat de array niet steeds opnieuw wordt bekeken als object
//tijdens rerender
const libraries = ["places"];

const mapContainerStyle = {
    width: "100%",
    height: "90vh"
};

const eindhoven = {
    lat: 51.441643,
    lng: 5.469722
};
const options = {
    styles: mapStyles,
    disableDefaultUI: true, // extra features van de kaart verwijderd
    zoomControl: true, //in en uitzoomen behouden
};

export default function Maps() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyAeL0sH-SHddn-Dq_m0k0vTcuYLEzS2X5M",
        libraries
    });


    //geeft ons een veranderd variable terug
    //de huidige eigenschap zal dan geïnitialiseerd worden
    //teruggegeven object zal op zijn plaats blijven staan (tot levensduur van de component)
    //Deze functie zorgt er dus voor dat de marker op de kaart gepinned blijft.
    const mapRef = useRef();

    // deze functie zorgt ervoor dat als de map geladen is, het de map teruggeeft dat
    // ervoor zorgt dat we gebruik kunnen maken van de mapRef om zo rerendering te voorkomen.
    const onMapLoad = useCallback((map) =>{
        mapRef.current = map;
    },[]);

    const panTo = useCallback(({lat, lng}) =>{
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(16);
    }, [])

    if(loadError) return "Error loading Maps";
    if(!isLoaded) return  "Loading Maps";


    return (
        <div >
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={eindhoven}
                options={options}
                onLoad={onMapLoad}
                language="nl"
                region="NL"
            >
                <Search panTo={panTo}/>

                <AddMarker/>
            </GoogleMap>
        </div>
    )
}

function Search({panTo}) {
    const {ready,
        value,
        suggestions: {status, data},
        setValue,
        clearSuggestions } = usePlacesAutocomplete({
        requestOptions: {
            location: {lat: () => 51.441643, lng: () => 5.469722},
            radius: 100*1000,

        }
    });


    const selectHandle = async (address) => {
        // als er op een suggestie geklikt wordt dan laat het de informatie zien zie graag
        // terug willen ontvangen.
        setValue(address, false);
        //dit zorgt ervoor dat gegevens niet gefetched worden uit de google data
        //dit is een functie dat onderdeel is van usePlacesAutocomplete
        clearSuggestions();
        //clearSuggestions laat niet alle suggesties zien maar een deel wat opgevraagd wordt
        try {
            const results = await getGeocode({address});
            // console.log(results)
            // adress wordt opgevraagd dat door de functie geocode een resultaat aanroept van het address
            // dat weer de lat,lng opvraagt en weergeeft als de locatie is gepinned
            const {lat, lng} = await getLatLng(results[0]);
            console.log("📍 Coordinates: ", { lat, lng });
            panTo({lat, lng});
            if ({lat, lng} === {lat, lng}){

            }
        }catch (error) {
            console.log(error)
        }}

    return (
        <div className="search">
            <Combobox onSelect={selectHandle}>
                {/*//2 children zullen in de combobox geplaatst worden*/}
                <ComboboxInput value={value}
                               onChange={(event) => {
                                   setValue(event.target.value);
                               }}
                               disabled={!ready}
                               placeholder="Zoek locatie"
                />
                <ComboboxPopover >
                    <ComboboxList >
                        {status === "OK" &&
                        data.map(({ place_id, description }) => (
                            <ComboboxOption key={place_id} value={description} />
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>)
}




// Hieronder zie je hoe de map eerst opgebouwd was



// import React, {useCallback,useRef,useState} from 'react';
// import { GoogleMap, useLoadScript} from "@react-google-maps/api";
// import usePlacesAutocomplete, { getGeocode, getLatLng,} from "use-places-autocomplete";
// import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox";
// import mapStyles from "../../mapStyles";
// import "@reach/combobox/styles.css";
// import AddMarker from "./AddMarker";
//
// //door het hier te plaats zorgt het ervoor dat de array niet steeds opnieuw wordt bekeken als object
// //tijdens rerender
// const libraries = ["places"];
//
// const mapContainerStyle = {
//     width: "100%",
//     height: "90vh"
// };
//
// const eindhoven = {
//     lat: 51.441643,
//     lng: 5.469722
// };
// const options = {
//     styles: mapStyles,
//     disableDefaultUI: true, // extra features van de kaart verwijderd
//     zoomControl: true, //in en uitzoomen behouden
// };
//
// export default function Maps() {
//     const {isLoaded, loadError} = useLoadScript({
//         googleMapsApiKey: "AIzaSyAeL0sH-SHddn-Dq_m0k0vTcuYLEzS2X5M",
//         libraries
//     });
//
//     //(State gebruik als je wilt dat react gererenderd wordt)
//
//     //Plaats een marker
//     const [markers, setMarkers] = useState([]);
//     //Laat informatie van de marker
//     const [selected, setSelected] = useState(null);
//
//     const onMapClick = useCallback((event) =>{
//         setMarkers((current) => [
//             ...current,
//             {
//                 lat: event.latLng.lat(),
//                 lng: event.latLng.lng(),
//                 time: new Date(),
//             },
//         ]);
//     }, []);
//
//
//     const [ currentPosition, setCurrentPosition ] = useState({});
//
//     //Hiermee kan je de marker verplaatsen
//     const onMarkerDragEnd = (e) => {
//         const lat = e.latLng.lat();
//         const lng = e.latLng.lng();
//         setCurrentPosition({ lat, lng})
//     };
//
//     //geeft ons een veranderd variable terug
//     //de huidige eigenschap zal dan geïnitialiseerd worden
//     //teruggegeven object zal op zijn plaats blijven staan (tot levensduur van de component)
//     //Deze functie zorgt er dus voor dat de marker op de kaart gepinned blijft.
//     const mapRef = useRef();
//
//     // deze functie zorgt ervoor dat als de map geladen is, het de map teruggeeft dat
//     // ervoor zorgt dat we gebruik kunnen maken van de mapRef om zo rerendering te voorkomen.
//     const onMapLoad = useCallback((map) =>{
//         mapRef.current = map;
//     },[]);
//
//     const panTo = useCallback(({lat, lng}) =>{
//         mapRef.current.panTo({lat, lng});
//         mapRef.current.setZoom(16);
//     }, [])
//
//     if(loadError) return "Error loading Maps";
//     if(!isLoaded) return  "Loading Maps";
//
//
//     return (
//         <div >
//             <GoogleMap
//             mapContainerStyle={mapContainerStyle}
//             zoom={12}
//             center={eindhoven}
//             options={options}
//             onClick={onMapClick}
//             onLoad={onMapLoad}
//             language="nl"
//             region="NL"
//             >
//                 {/*<h1><img src={logo} alt="trainfast" className="logomap"/></h1>*/}
//                 <Search panTo={panTo}/>
//
//
//                 {/*{markers.map((marker) =>(*/}
//                 {/*    <Marker*/}
//                 {/*    key={marker.time.toISOString()}*/}
//                 {/*    position={{lat: marker.lat, lng: marker.lng}}*/}
//                 {/*    onClick={() => {*/}
//                 {/*        setSelected(marker);*/}
//                 {/*    }}*/}
//                 {/*    onDragEnd={(e) => onMarkerDragEnd(e)}*/}
//                 {/*    draggable={true}*/}
//                 {/*    onDrag={() => {*/}
//                 {/*        setCurrentPosition(marker)*/}
//                 {/*    }}*/}
//                 {/*    />*/}
//                 {/*))}*/}
//                 {/*{selected ? (<InfoWindow*/}
//                 {/*position={{lat: selected.lat, lng: selected.lng}}*/}
//                 {/*onCloseClick={()=>{*/}
//                 {/*    setSelected(null);*/}
//                 {/*}}>*/}
//                 {/*    <div>*/}
//                 {/*        <h2>Sportactiviteit</h2>*/}
//                 {/*        <p>Activiteit: Boksen</p>*/}
//                 {/*        <p>Tijdstip: {formatRelative(selected.time, new Date())}</p>*/}
//                 {/*        <AcceptActivity/></div>*/}
//
//                 {/*</InfoWindow>) : null}*/}
//
//                 <AddMarker/>
//             </GoogleMap>
//         </div>
//     )
// }
//
// function Search({panTo}) {
//     const {ready,
//         value,
//         suggestions: {status, data},
//         setValue,
//         clearSuggestions } = usePlacesAutocomplete({
//         requestOptions: {
//             location: {lat: () => 51.441643, lng: () => 5.469722},
//             radius: 100*1000,
//
//         }
//     });
//
//
//     const selectHandle = async (address) => {
//         // als er op een suggestie geklikt wordt dan laat het de informatie zien zie graag
//         // terug willen ontvangen.
//         setValue(address, false);
//         //dit zorgt ervoor dat gegevens niet gefetched worden uit de google data
//         //dit is een functie dat onderdeel is van usePlacesAutocomplete
//         clearSuggestions();
//         //clearSuggestions laat niet alle suggesties zien maar een deel wat opgevraagd wordt
//         try {
//             const results = await getGeocode({address});
//             // console.log(results)
//             // adress wordt opgevraagd dat door de functie geocode een resultaat aanroept van het address
//             // dat weer de lat,lng opvraagt en weergeeft als de locatie is gepinned
//             const {lat, lng} = await getLatLng(results[0]);
//             console.log("📍 Coordinates: ", { lat, lng });
//             panTo({lat, lng});
//             if ({lat, lng} === {lat, lng}){
//
//             }
//         }catch (error) {
//             console.log(error)
//         }}
//
//     return (
//         <div className="search">
//             <Combobox onSelect={selectHandle}>
//             {/*//2 children zullen in de combobox geplaatst worden*/}
//                 <ComboboxInput value={value}
//                                onChange={(event) => {
//                                    setValue(event.target.value);
//                                }}
//                                disabled={!ready}
//                                placeholder="Zoek locatie"
//                                />
//                 <ComboboxPopover >
//                     <ComboboxList >
//                         {status === "OK" &&
//                         data.map(({ place_id, description }) => (
//                             <ComboboxOption key={place_id} value={description} />
//                         ))}
//                     </ComboboxList>
//                 </ComboboxPopover>
//             </Combobox>
//         </div>)
// }
//
//
//
//
