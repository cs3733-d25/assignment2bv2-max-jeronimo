import Table1 from "./table1";
import List1 from "./list1";
import Form1 from "./form1";
import Soccer from "./assets/soccerball.jpg";

const Hobby1 = () => {

    return (
        <div>
           <div className="Body">
            <p>Hello my name is Max Jeronimo!</p>
               <p>One of my favorite hobbies is playing soccer.  </p>
            <p>I've grown up playing soccer for all of my life, starting at the age of 3.</p>
            <p>Soccer is a team sport, consisting of 11 players, with one being the goalie.</p>
            <p>The objective is to pass the ball around your team to score, and whoever has the most amount of goals at the end of the game wins.</p>
            <p>The games are 90 minutes each, with it being split into two 45 minutes halves</p>
           </div>
            <div id='BannerSoccer'>
                <img src={Soccer} alt="Soccer Ball" />
            </div>
            <Table1 />
            <List1 />
            <Form1 />
       </div>

    )
}

export default Hobby1;