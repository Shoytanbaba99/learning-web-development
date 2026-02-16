"use server";

import { db } from "@/db";
import { tasks } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

export async function addTask(formData: FormData) {
    const title = formData.get("title") as string;
    const userId = Number(formData.get("userId"));

    await db.insert(tasks).values({
        title,
        user_id: userId,
    });
    revalidatePath("/");
}

export async function deleteTask(formData: FormData) {
    const id = Number(formData.get("id"));
    await db.delete(tasks).where(eq(tasks.id, id));
    revalidatePath("/");
}
