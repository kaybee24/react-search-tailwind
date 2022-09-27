import React from 'react';

const Table = ({ data }) => {

    return (
        <div className="mt-8 text-center">
            <table className="w-full">
                <thead>
                    <tr className="border-b">
                        <th className="py-3 w-80">First name</th>
                        <th className="py-3 w-80">Last name</th>
                        <th className="py-3 w-80">Team</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="border-b">
                            <td className="py-3 w-80">{item.first_name}</td>
                            <td className="py-3 w-80">{item.last_name}</td>
                            <td className="py-3 w-80">{item.team.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table