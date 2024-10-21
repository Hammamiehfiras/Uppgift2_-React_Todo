import React, { useState } from 'react'; // Importera React och useState-hooken

// Definiera typen för props som tas emot av TodoForm-komponenten
interface TodoFormProps {
    addTodo: (text: string) => void; // Funktion för att lägga till en ny todo
}

// Funktionell komponent för Todo-inmatningsformuläret
const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [input, setInput] = useState<string>(''); // State för att hålla inmatningsvärdet

    // Hantera formulärinlämning
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Förhindra siduppdatering
        if (input.trim() === '') return; // Lägg inte till tomma todos
        addTodo(input); // Anropa addTodo-funktion med inmatningsvärdet
        setInput(''); // Rensa inmatningsfältet efter tillägg
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '20px' }}>
            {/* Inmatningsfält för nya todos */}
            <input
                type="text"
                value={input} // Kontrollerat inmatningsvärde
                onChange={(e) => setInput(e.target.value)} // Uppdatera input-state vid förändring
                placeholder="Lägg till en ny uppgift"
                style={{ flex: '1', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', marginRight: '10px' }}
            />
            {/* Skicka-knapp */}
            <button type="submit" style={{ padding: '10px 15px', border: 'none', backgroundColor: '#5cb85c', color: 'white', borderRadius: '4px', cursor: 'pointer' }}>
                Lägg till
            </button>
        </form>
    );
};

export default TodoForm; // Exportera TodoForm-komponenten
