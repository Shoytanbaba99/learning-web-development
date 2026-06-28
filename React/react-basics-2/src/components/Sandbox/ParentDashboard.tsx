import React, { useState } from "react";
import StatusCard from "./StatusCard";
import ActionForm from "./ActionForm";

const ParentDashboard = () => {
    // SENSEI: 1. Initialize two states with strict TypeScript typings:
    // - status (string, defaults to "Offline")
    // - updatedBy (string, defaults to "System")
    const [status, setStatus] = useState<string>("Offline");
    const [updatedBy, setUpdatedBy] = useState<string>("System");

    const handleUpdate = async (newStatus: string, newUser: string) => {
        // Simulate 2-second network delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setStatus(newStatus);
        setUpdatedBy(newUser);
    };

    return (
        <div className="flex flex-col gap-6 p-8 bg-gray-900 text-white max-w-md mx-auto rounded-xl border border-gray-800">
            <h2 className="text-2xl font-black text-center tracking-tight text-gray-100">
                Control Center
            </h2>

            {/* SENSEI: 2. Render StatusCard and pass the correct props down */}
            <StatusCard status={status} updatedBy={updatedBy}></StatusCard>

            <ActionForm onUpdate={handleUpdate}></ActionForm>
        </div>
    );
};

export default ParentDashboard;
