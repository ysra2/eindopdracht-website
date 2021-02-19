import React, {useState} from "react"
import axios from "../../services/axios.instance"
import authHeader from "../../services/auth-header";

const AddActivity = ({history}) => {
    const [addActivity, setAddActivity] = useState({
        activityName: "",
        nameTrainer: "",
        address: "",
        zipcode: "",
        city: "",
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
        return axios.post(`activity/${trainerId}`,
            {
                activityName: addActivity.activityName,
                nameTrainer: addActivity.nameTrainer,
                address: addActivity.address,
                zipcode: addActivity.zipcode,
                city: addActivity.city,
                date: addActivity.date,
                time: addActivity.time
            })
            .then((response) => {
                if (trainerId === trainerId) {
                    localStorage.setItem("activity_id", JSON.stringify(response.data));
                    setAddActivity({
                        ...addActivity
                    })
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
                {/*{addActivity ? (*/}
                {/*    <div>*/}
                {/*        <h4>Training is toegevoegd</h4>*/}
                {/*    </div>*/}
                {/*    ):(*/}
                        <div>
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
                                <label>Adres</label>
                                <input id="address" type="address" placeholder="Adres"
                                       value={addActivity.address} onChange={activityChange}/>

                            </div>
                            <div>
                            <label>Postcode</label>
                            <input id="zipcode" type="zipcode" placeholder="Postcode (optioneel)"
                                   value={addActivity.zipcode} onChange={activityChange}/>

                        </div>
                            <div>
                <label>Plaats</label>
                <input id="city" type="city" placeholder="Plaats"
                       value={addActivity.city} onChange={activityChange}/>

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
                        </div>
                    {/*)}*/}
            </form>
        </div>
    )
}

export default AddActivity;