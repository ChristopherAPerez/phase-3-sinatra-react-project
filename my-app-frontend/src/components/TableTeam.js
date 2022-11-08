import React from "react";

function TableTeam( { team } ) {
    const players = team.players

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>{team.location} {team.name}</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => (
                        <tr key={player.id}>
                            <td>
                                {player.name}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
  
export default TableTeam;