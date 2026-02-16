"use server";

export async function createInvoice(prevState: any, formData: FormData) {
    const amount = Number(formData.get("amount"));
    if (amount <= 0) {
        return { message: "❌ Error: Amount must be positive!" };
    }
    return { message: "✅ Success: Invoice Created!" };
}
