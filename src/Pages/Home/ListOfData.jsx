import React from 'react';

const ListOfData = ({ data, date }) => {
    const { name, attendance } = data
    const attendanceStatus = Object.values(attendance)
    const attendanceDates = Object.keys(attendance)
    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {attendanceDates[date]}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {name}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm capitalize">
                {attendanceStatus[date].status}
            </td>
        </tr>
    );
};

export default ListOfData;