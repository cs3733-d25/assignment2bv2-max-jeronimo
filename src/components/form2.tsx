const Form2 = () => {

    return (
        <div>
            <h2 className="caption">Health Questions</h2>
            <form className="form">
                <label htmlFor="fullname">Full Name:</label>
                <input type="text" id="fullname" className="border p-1" />

                <label htmlFor="age">Age:</label>
                <input type="text" id="age" className="border p-1" />

                <p><b>Check off if applicable:</b></p>
                <input type="checkbox" id="cardio" /><label htmlFor="cardio"> Do you do cardio?</label><br />
                <input type="checkbox" id="weightlifting" /><label htmlFor="weightlifting"> Do you weightlift?</label><br />
                <input type="checkbox" id="Exercise" /><label htmlFor="Exercise"> Do you exercise?</label><br />

                <p><b>Which time of day do you exercise?</b></p>
                <input type="radio" id="morning" name="timeofday" value="morning" /><label htmlFor="morning"> Morning</label><br />
                <input type="radio" id="afternoon" name="timeofday" value="afternoon" /><label htmlFor="afternoon"> Afternoon</label><br />
                <input type="radio" id="night" name="timeofday" value="night" /><label htmlFor="night"> Night</label><br />

                <label htmlFor="comments">Comments:</label>
                <textarea id="comments" className="text" rows={4} cols={50}></textarea><br />

                <label htmlFor="hoursofsleep">How many hours of sleep do you get?</label>
                <select id="dropdown">
                    <option value="4-6">4-6</option>
                    <option value="6-8">6-8</option>
                    <option value="8-10">8-10</option>
                    <option value="10-12">10-12</option>
                </select><br />

                <input type="submit" value="Submit" id="submit" className="btn" />
            </form>
        </div>
    );
};

export default Form2;
