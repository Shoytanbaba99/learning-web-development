"use client";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState<number>(0);
    const handleChange = () => setCount(count + 1);

    return (
        <div>
            <p>Current Count: {count}</p>
            <button
                onClick={handleChange}
                className="px-4 py-2 bg-blue-500 text-white rounded my-2"
            >
                Increment
            </button>
        </div>
    );
}
