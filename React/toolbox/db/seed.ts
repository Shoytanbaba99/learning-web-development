import { db } from "./index";
import { users, tasks } from "./schema";

async function main() {
    console.log("🥣 Seeding the pantry...");

    const [newUser] = await db
        .insert(users)
        .values({
            name: "Dog",
            email: "dog@example.com",
        })
        .returning();
    await db.insert(tasks).values({
        title: "Learn Next.js",
        user_id: newUser.id,
    });

    console.log("PanStry filled!");
}
main();
