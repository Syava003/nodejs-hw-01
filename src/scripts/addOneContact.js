import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    try {
        const existingContacts = await readContacts();
        const newContact = createFakeContact();
        const updatedContacts = [...existingContacts, newContact];
        
        await writeContacts(updatedContacts);
        console.log(`Успішно додано 1 новий контакт!`);
    } catch (error) {
        console.error('Помилка генерації контактів:', error.message);
    }
};

addOneContact();
