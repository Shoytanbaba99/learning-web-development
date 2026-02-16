"use server";

export default function signGuestBook(prevState: any, formData: FormData) {
    const name = formData.get("name");
    if (!name) {
        return { greetings: "Please tell us your name!" };
    }
    return { greetings: "Welcome to the guestbook, ${name}!" };
}
