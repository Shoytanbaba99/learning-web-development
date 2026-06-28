import React from "react";

// SENSEI: Define the interface for the props here.
// Sibling B needs:
// - onStatusChange (a callback function that receives a string and returns nothing)
// - onUserChange (a callback function that receives a string and returns nothing)
interface StatusSelectorProps {
    onStatusChange: (newStatus: string) => void;
    onUserChange: (newUser: string) => void;
}

const StatusSelector = ({ onStatusChange, onUserChange }: StatusSelectorProps) => {
    const handleSelect = (status: string, user: string) => {
        // Trigger both callbacks here
        onStatusChange(status);
        onUserChange(user);
    };

    return (
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col gap-4">
            <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider text-center">
                Change State
            </h3>
            <div className="flex gap-2 justify-center">
                <button
                    onClick={() => handleSelect("Active", "Admin")}
                    className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded font-bold transition-colors text-white"
                >
                    Active (Admin)
                </button>
                <button
                    onClick={() => handleSelect("On Break", "Staff")}
                    className="bg-yellow-600 hover:bg-yellow-500 px-4 py-2 rounded font-bold transition-colors text-white"
                >
                    On Break (Staff)
                </button>
                <button
                    onClick={() => handleSelect("Offline", "System")}
                    className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded font-bold transition-colors text-white"
                >
                    Offline (System)
                </button>
            </div>
        </div>
    );
};

export default StatusSelector;
