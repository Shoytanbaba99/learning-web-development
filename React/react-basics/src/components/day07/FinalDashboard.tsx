import { useState, useEffect } from "react";

interface Post {
    id: number;
    title: string;
    body: string;
    likes: number;
}
function FinalDashboard() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [searchText, setSearchText] = useState("");
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newBody, setNewBody] = useState("");

    useEffect(() => {
        const initialPosts = [
            {
                id: 1,
                title: "React is Amazing",
                body: "I just learned Tailwind and it is changing my life.",
                likes: 5,
            },
            {
                id: 2,
                title: "Why use TypeScript?",
                body: "Because it catches bugs before I run the code!",
                likes: 12,
            },
            {
                id: 3,
                title: "Day 7 Complete",
                body: "Ready to start the T3 Stack journey.",
                likes: 8,
            },
        ];
        setTimeout(() => setPosts(initialPosts), 0);
    }, []);
    const handleAddPost = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTitle || !newBody) return;
        const newPost: Post = {
            id: Date.now(),
            title: newTitle,
            body: newBody,
            likes: 0,
        };

        setPosts([newPost, ...posts]);
        setNewTitle("");
        setNewBody("");
        setIsFormOpen(false);
    };
    const handleDelete = (id: number) => {
        setPosts(posts.filter((post) => post.id !== id));
    };
    const handleLike = (id: number) => {
        setPosts(posts.map((post) => (post.id === id ? { ...post, likes: post.likes + 1 } : post)));
    };

    const filteredPosts = posts.filter(
        (post) =>
            post.title.toLowerCase().includes(searchText.toLowerCase()) ||
            post.body.toLowerCase().includes(searchText.toLowerCase()),
    );
    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-4xl mx-auto flex justify-between items-center mb-10">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    DevSocial
                </h1>
                <input
                    type="text"
                    placeholder="🔍 Search topics..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="bg-gray-800 border border-gray-700 rounded-full px-4 py-2 w-64 focus:outline-none focus:border-blue-500 transition"
                />
                <button
                    onClick={() => setIsFormOpen(!isFormOpen)}
                    className="bg-blue-600 hover:bg-blue-500
                    px-6
                    py-2
                    rounded-lg
                    font-bold
                    transition
                    shadow-lg"
                >
                    {isFormOpen ? "Close Form" : "+ New Post"}
                </button>
            </div>
            {isFormOpen && (
                <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-2xl mb-10 animate-fade-in">
                    <h2 className="text-xl font-bold mb-4 text-gray-200">Create a Post</h2>
                    <form onSubmit={handleAddPost} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Title"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="w-full bg-gray-900 border border-gray-700 p-3 rounded-lg focus:border-blue-500 outline-none"
                        />
                        <textarea
                            placeholder="What are you thinking?"
                            value={newBody}
                            onChange={(e) => setNewBody(e.target.value)}
                            className="w-full bg-gray-900 border border-gray-700 p-3 rounded-lg h-24 focus:border-blue-500 outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-500 py-3 rounded-lg font-bold transition"
                        >
                            Publish
                        </button>
                    </form>
                </div>
            )}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-500 transition duration-300"
                    >
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold text-blue-400 mb-2">{post.title}</h3>
                            <button
                                onClick={() => handleDelete(post.id)}
                                className="text-gray-500 hover:text-red-500 text-sm"
                            >
                                🗑️
                            </button>
                        </div>
                        <p className="text-gray-300 mb-4">{post.body}</p>

                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => handleLike(post.id)}
                                className="text-gray-400 hover:text-pink-500 transition"
                            >
                                ❤️ {post.likes}
                            </button>
                        </div>
                    </div>
                ))}

                {filteredPosts.length === 0 && (
                    <p className="text-center text-gray-500 col-span-2">No posts found.</p>
                )}
            </div>
        </div>
    );
}
export default FinalDashboard;
