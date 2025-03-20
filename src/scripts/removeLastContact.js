import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
 
 export const removeLastContact = async () => {
    try {
        const existingContacts = await readContacts();
        if (existingContacts.length===0) {
            console.log("контактів немає");
            return;
        } 
        existingContacts.pop();
        await writeContacts(existingContacts);
        console.log("останній контакт було видалено");
    } catch (error) {
        console.error('Помилка під час видалення останнього контакту:', error.message);
    }
 };

removeLastContact();
