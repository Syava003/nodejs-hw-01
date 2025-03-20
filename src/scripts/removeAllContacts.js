
import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
     try {
        const emptyContacts = [];
        await writeContacts(emptyContacts);
        console.log("масив порожній");
        } catch (error) {
            console.error('Помилка при зчитуванні контактів:', error.message);
        }
};

removeAllContacts();
