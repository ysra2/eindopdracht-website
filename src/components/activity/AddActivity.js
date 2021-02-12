import React, {useState} from "react"
import axios from "../../services/axios.instance"
import authHeader from "../../services/auth-header";

const AddActivity = ({history}) => {
    const [addActivity, setAddActivity] = useState({
        activityName: "",
        nameTrainer: "",
        location: "",
        date: "",
        time: ""});

    const activityChange = event => {
        const {id, value} = event.target;
        (setAddActivity({
            ...addActivity,
            [id]: value
        }));
    };

    const createActivity =  async event => {
        event.preventDefault();

        const trainerId = authHeader().id;

        console.log(trainerId);
        return axios.post(`activity/${trainerId}`, addActivity)
            .then((response) => {
                if (trainerId === trainerId) {
                    localStorage.setItem("activity_id", JSON.stringify(response.data));
                    // setAddActivity({
                    //     activityName: response.data.activityName,
                    //     nameTrainer: response.data.nameTrainer,
                    //     location: response.data.location,
                    //     date: response.data.date,
                    //     time: response.data.time
                    // })
                console.log(response)
                history.push('/activiteit')
            }})
            .catch((error) => {
                console.log(error);
            })


    }


    return(
        <div className="form-page">
            <form className="form">
                <label className="title">
                    Training
                </label>
            <div>
                <label>Sportactiviteit</label>
                <input id="activityName"  placeholder="Sportactiviteit"
                       value={addActivity.activityName} onChange={activityChange}/>

            </div>
            <div>
                <label>Naam Trainer</label>
                <input id="nameTrainer" placeholder="Naam Trainer"
                       value={addActivity.nameTrainer} onChange={activityChange}/>

            </div>
            <div>
                <label>Locatie</label>
                <input id="location" type="address" placeholder="Locatie"
                       value={addActivity.location} onChange={activityChange}/>

            </div>
            <div>
                <label>Tijd</label>
                <input id="time" type="time" placeholder="Tijd"
                       value={addActivity.time} onChange={activityChange}/>

            </div>
            <div>
                <label>Datum</label>
                <input id="date" type="date" placeholder="Datum"
                       value={addActivity.date} onChange={activityChange}/>

            </div>
            <button type="submit" onClick={createActivity} >
                Submit
            </button>
            {' '}
            <button type="reset" >
                Reset
            </button>
            </form>
        </div>
    )
}

export default AddActivity;