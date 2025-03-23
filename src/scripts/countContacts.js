import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
        const contacts = await readContacts();
        const count = contacts.length;
        console.log(`кількість контактів: ${count}`);
    } catch (error) {
        console.error('Помилка під час підрахунку контактів:', error.message);
    }
};

countContacts();
