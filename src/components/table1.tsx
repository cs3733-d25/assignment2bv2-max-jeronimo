const Table1 = () => {

    return (
        <div>
            <h2 className="caption">Information</h2>
            <table className="collapse">
                <thead>
                <tr>
                    <th>Positions</th>
                    <th>Avg. # of Players</th>
                    <th>% of Goals Scored</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Goalie</td>
                    <td>1</td>
                    <td>2.2%</td>
                </tr>
                <tr>
                    <td>Defender</td>
                    <td>4</td>
                    <td>10.3%</td>
                </tr>
                <tr>
                    <td>Midfielder</td>
                    <td>4</td>
                    <td>33.3%</td>
                </tr>
                <tr>
                    <td>Forwards</td>
                    <td>2</td>
                    <td>54.2%</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table1;