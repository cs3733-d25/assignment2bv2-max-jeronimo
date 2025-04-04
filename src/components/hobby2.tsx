import Table2 from "./table2";
import List2 from "./list2";
import Form2 from "./form2";
import Weightlifting from "./assets/aiImage.jpg"

const Hobby2 = () => {

    return (
        <div>
            <div className="Body">
                <p>Hello, my name is Jared LaPlante!</p>
                <p>One of my most favorite hobbies is weightlifting.</p>
                <p>I really love weightlifting not just because of the physical benefits, but mainly the mental benefits.</p>
                <p>After a long day, especially at WPI, it feels very relieving to be able to get all my stress out.</p>
                <p>My workouts usually consist of lighter weight and more reps.</p>
            </div>
            <div id="Banner">
                <img src={Weightlifting} alt="Weightlifting" />
            </div>
            <Table2 />
            <List2 />
            <Form2 />
        </div>
    );
};

export default Hobby2;
