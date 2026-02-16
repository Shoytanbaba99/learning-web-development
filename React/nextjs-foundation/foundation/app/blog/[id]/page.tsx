import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    if (isNaN(Number(id))) {
        return notFound();
    }
    return (
        <div>
            <h1>Blog Post ID: {id}</h1>
            <p>This is a valid numeric ID!</p>
        </div>
    );
}
