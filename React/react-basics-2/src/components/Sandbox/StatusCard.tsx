import React from "react";

// SENSEI: Define the interface for the props here.
// Sibling A needs:
// - status (a string)
// - updatedBy (a string)
interface StatusCardProps {
    status: string;
    updatedBy: string;
}

const StatusCard = ({ status, updatedBy }: StatusCardProps) => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
            <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
                Current Status
            </h3>
            <div className="text-3xl font-black text-blue-400 my-2">{status}</div>
            <p className="text-xs text-gray-500">Last updated by: {updatedBy}</p>
        </div>
    );
};

export default StatusCard;
