const Table2 = () => {

    return (
        <div>
            <h2 className="caption">Muscle groups with an exercise for each and the amount of reps you should do:</h2>
            <table className="collapse">
                <thead>
                <tr>
                    <th>Muscle Group</th>
                    <th>Exercise</th>
                    <th># of Reps</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Chest</td>
                    <td>Bench Press</td>
                    <td>6-8</td>
                </tr>
                <tr>
                    <td>Legs</td>
                    <td>Squat</td>
                    <td>6-10</td>
                </tr>
                <tr>
                    <td>Shoulders</td>
                    <td>Military Press</td>
                    <td>8-12</td>
                </tr>
                <tr>
                    <td>Triceps</td>
                    <td>Tricep Pushdowns</td>
                    <td>8-12</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table2;
