import Counter from "@/app/ui/Counter";

export default async function StatsPage() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch("https://jsnplaceholder.typicode.com/todos/1");
    const data = await res.json();
    return (
        <div>
            <h1> Stats Dashboard</h1>
            <div className="p-4 border rounded">
                <p>Title:{data.title}</p>
                <p>Status:{data.completed ? "✅ Done" : "❌ Pending"}</p>
            </div>
            <Counter></Counter>
        </div>
    );
}
