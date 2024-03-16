import { useEffect, useState } from 'react';
import { Bowler } from './types/bowler';
import { Team } from './types/team';

function Table() {

    const [tableData, setTableData] = useState<Bowler[]>([]);
    const [teamData, setTeamData] = useState<Team[]>([]);

    useEffect(() => {
        const fetchTableData = async () => {
            const rsp  = await fetch('http://localhost:5200/BowlingLeague/bowlers');
            const b = await rsp.json();
            setTableData(b);
        };

        const fetchTeamData = async () => {
            const rsp = await fetch('http://localhost:5200/BowlingLeague/teams');
            const t = await rsp.json();
            setTeamData(t);
        };

        fetchTableData();
        fetchTeamData();

    }, []);

    const getTeamName = (teamId: number): string => {
        const team = teamData.find((team) => team.teamId === teamId);
        return team ? team.teamName : '';
    };
    
    
    return (
        <div>
            <div className="row">
                <h3 className="text-center">Bowler Data</h3>
            </div>
            <div className="table-responsive"> {/* Add responsive table container */}
                <table className="table table-bordered table-hover"> {/* Added table-hover for interactivity */}
                    <thead className="table-dark"> {/* Add contrast to header */}
                        <tr>
                            <th>Bowler Name</th>
                            <th>Team Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((b: Bowler) => {
                            if (b.teamId === 1 || b.teamId ===2) {
                                return (
                                    <tr key={b.bowlerId}>
                                        <td>{b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}</td>
                                        <td>{getTeamName(b.teamId)}</td>
                                        <td>{b.bowlerAddress}</td>
                                        <td>{b.bowlerCity}</td>
                                        <td>{b.bowlerState}</td>
                                        <td>{b.bowlerZip}</td>
                                        <td>{b.bowlerPhoneNumber}</td>
                                    </tr>
                                );
                            }
                            return null;
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;