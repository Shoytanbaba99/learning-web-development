import { db } from "../db/index";
import { users, tasks } from "@/db/schema";
import { addTask, deleteTask } from "./action";

export default async function Home() {
    const usersWithTasks = await db.query.users.findMany({
        with: { tasks: true },
    });

    return (
        <main className="p-10 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
            <form action={addTask} className="flex flex-col gap-2 mb-8 p-4 border rounded">
                <input
                    name="title"
                    placeholder="What needs to be done?"
                    className="border p-2 rounded 1bg-white text-black placeholder:text-gray-400"
                    required
                />
                <input type="hidden" name="userId" value="1" />

                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
                >
                    Add Task
                </button>
            </form>
            <div className="space-y-4">
                {usersWithTasks.map((user) => (
                    <div key={user.id} className="p-4 bg-gray-100 rounded">
                        <h2 className="font-bold text-black">{user.name} &apos;s Tasks:</h2>
                        <ul className="list-disc ml-5 text-gray-700">
                            {user.tasks.map((task) => (
                                <li
                                    key={task.id}
                                    className="flex justify-between items-center gap-2 mb-1"
                                >
                                    <span>{task.title}</span>
                                    <form action={deleteTask}>
                                        <input type="hidden" name="id" value={task.id} />
                                        <button
                                            type="submit"
                                            className="text-red-500 hover:text-red-700 text-xs font-bold cursor-pointer"
                                        >
                                            Delete
                                        </button>
                                    </form>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </main>
    );
}
