import React from 'react'

const Right = ({ quesAns, activeNumber }) => {
    return (
        <div className="w-full md:w-4/12 bg-[#030231] flex items-center p-10">
            <ul className="w-full">
            {quesAns.map(({id, amount}) => (
                <li className={`flex items-center px-2 py-1 rounded-md ${id === activeNumber ? "bg-teal-700" : ""}`} key={id}>
                    <span className="w-4/12">{id}</span>
                    <span className="w-8/12">$ {amount}</span>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Right
