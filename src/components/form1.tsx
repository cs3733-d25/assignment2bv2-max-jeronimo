const Form1 = () => {

    return (
        <div>
            <h3 className="text-lg font-bold">Getting to Know You!</h3>
            <form className="form">
                <label htmlFor="fullname">Enter Your Full Name:</label>
                <input type="text" id="fullname" className="border p-1" />

                <p><b>What Positions Have You Played Before?</b></p>
                <input type="checkbox" id="forward" /><label htmlFor="forward"> Forward</label><br />
                <input type="checkbox" id="midfield" /><label htmlFor="midfield"> Midfield</label><br />
                <input type="checkbox" id="defense" /><label htmlFor="defense"> Defense</label><br />
                <input type="checkbox" id="goalie" /><label htmlFor="goalie"> Goalie</label><br />

                <p><b>How Long Have You Played Soccer For?</b></p>
                <input type="radio" id="short" name="time_played" value="0-3 Years" /><label htmlFor="short"> 0-3 Years</label><br />
                <input type="radio" id="medium" name="time_played" value="3-6 Years" /><label htmlFor="medium"> 3-6 Years</label><br />
                <input type="radio" id="long" name="time_played" value="6+ Years" /><label htmlFor="long"> 6+ Years</label><br />

                <p><b>If You Could, Which of These Teams Would You Play for?</b></p>
                <select id="dropdown">
                    <option value="Select One">Select One</option>
                    <option value="Real Madrid">Real Madrid</option>
                    <option value="FC Barcelona">FC Barcelona</option>
                    <option value="Manchester United">Manchester United</option>
                    <option value="PSG">PSG</option>
                    <option value="Juventus">Juventus</option>
                </select>

                <p><b>Is There Any Additional Info You Have?</b></p>
                <textarea rows={4} cols={50} id="addinfo" className="border p-1"></textarea><br />

                <input type="submit" value="Submit" id="submit" />
            </form>
        </div>
    );
};

export default Form1;