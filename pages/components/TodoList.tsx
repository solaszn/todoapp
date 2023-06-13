import React from 'react'

const TodoList = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead className="bg-neutral-100">
                    <tr>
                        <th>Name</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows */}
                    <tr>
                        <td>Cy Ganderton</td>
                        <td>Blue</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TodoList
