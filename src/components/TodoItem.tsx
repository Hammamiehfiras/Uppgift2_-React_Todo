import React from 'react'; // Importera React

// Definiera typen för props som tas emot av TodoItem-komponenten
interface TodoItemProps {
    todo: { id: number; text: string; done: boolean }; // Todo-objekt med id, text och done-status
    toggleDone: (id: number) => void; // Funktion för att växla done-status
    deleteTodo: (id: number) => void; // Funktion för att radera en todo
}

// Funktionell komponent för ett enskilt Todo-objekt
const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleDone, deleteTodo }) => {
    return (
        <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: todo.done ? '#d1ffd1' : '#e9ecef', padding: '10px', borderRadius: '4px', margin: '10px 0' }}>
            <div>
                {/* Checkbox för att växla done-status */}
                <input
                    type="checkbox"
                    checked={todo.done} // Markerad status baserat på todo's done-egenskap
                    onChange={() => toggleDone(todo.id)} // Anropa toggleDone-funktion med todo's ID
                />
                {/* Visa todo-texten, med genomstrykning om den är slutförd */}
                <span style={{ textDecoration: todo.done ? 'line-through' : 'none', marginLeft: '10px' }}>{todo.text}</span>
            </div>
            {/* Knapp för att radera todo */}
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px', backgroundColor: '#e57373', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                X
            </button>
        </li>
    );
};

export default TodoItem; // Exportera TodoItem-komponenten
