import React, { useState } from 'react'; // Importera React och useState-hooken
import TodoList from './components/TodoList'; // Importera TodoList-komponenten
import TodoForm from './components/TodoForm'; // Importera TodoForm-komponenten
import './App.css'; // Importera CSS-stilar

// Definiera typen för en Todo-objekt
interface Todo {
    id: number; // Unik identifierare för varje todo-objekt
    text: string; // Textbeskrivning av todo-objektet
    done: boolean; // Indikerar om todo-objektet är slutfört
}

const App: React.FC = () => {
    // State för att hålla listan av todos
    const [todos, setTodos] = useState<Todo[]>([]);

    // Funktion för att lägga till en ny todo
    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(), // Använd nuvarande tidsstämpel som unik ID
            text, // Texten som skickas från formuläret
            done: false, // Nytt todo-objekt är initialt inte slutfört
        };

        // Uppdatera todos-state med den nya todo
        setTodos([...todos, newTodo]);
    };

    // Funktion för att växla 'done'-status för en todo
    const toggleDone = (id: number) => {
        // Mappar över existerande todos och växlar done-status för den valda todo
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
    };

    // Funktion för att radera en todo
    const deleteTodo = (id: number) => {
        // Filtrera bort todo med den angivna ID
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="container">
            <h1>To-Do List</h1> {/* Huvudtitel */}
            <p className="subtitle">Made by Firas Hammamih</p> {/* Underrubrik */}
            <TodoForm addTodo={addTodo} /> {/* Rendera TodoForm-komponenten */}
            <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo} /> {/* Rendera TodoList-komponenten */}
        </div>
    );
};

export default App; // Exportera App-komponenten
