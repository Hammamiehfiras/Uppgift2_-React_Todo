import React from 'react'; // Importera React
import TodoItem from './TodoItem'; // Importera TodoItem-komponenten

// Definiera typen för props som tas emot av TodoList-komponenten
interface TodoListProps {
    todos: { id: number; text: string; done: boolean }[]; // Array av todos
    toggleDone: (id: number) => void; // Funktion för att växla done-status
    deleteTodo: (id: number) => void; // Funktion för att radera en todo
}

// Funktionell komponent för listan av Todos
const TodoList: React.FC<TodoListProps> = ({ todos, toggleDone, deleteTodo }) => {
    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {/* Mappar över todos och renderar en TodoItem för varje */}
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} />
            ))}
        </ul>
    );
};

export default TodoList; // Exportera TodoList-komponenten
