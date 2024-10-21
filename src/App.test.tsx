import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Testar att titeln "To-Do List" renderas korrekt
test('renders To-Do List title', () => {
  render(<App />);
  const titleElement = screen.getByText(/To-Do List/i);
  expect(titleElement).toBeInTheDocument(); // Kontrollerar att titeln finns i dokumentet
});

// Testar att lägga till och ta bort todo-objekt
test('adds and removes todo items', () => {
  render(<App />);

  // Hämtar input-fältet och knappen (svenska texter)
  const inputElement = screen.getByPlaceholderText(/Lägg till en ny uppgift/i);
  const addButton = screen.getByText(/Lägg till/i);

  // Lägger till ett nytt todo-objekt
  fireEvent.change(inputElement, { target: { value: 'Ny Uppgift' } }); // Ändrar värdet i input-fältet
  fireEvent.click(addButton); // Klickar på "Lägg till"-knappen

  // Kontrollerar att det nya todo-objektet finns i dokumentet
  const newTodo = screen.getByText(/Ny Uppgift/i);
  expect(newTodo).toBeInTheDocument();

  // Tar bort todo-objektet
  const removeButton = screen.getByText(/X/i); // Matchar "X"
  fireEvent.click(removeButton); // Klickar på "X"-knappen

  // Kontrollerar att todo-objektet har tagits bort
  const removedTodo = screen.queryByText(/Ny Uppgift/i);
  expect(removedTodo).not.toBeInTheDocument(); // Förväntar att objektet inte finns längre
});

// Testar att toggla 'done' status för en todo
test('toggles todo item status', () => {
  render(<App />);
  
  const inputElement = screen.getByPlaceholderText(/Lägg till en ny uppgift/i);
  const addButton = screen.getByText(/Lägg till/i);
  
  // Lägger till ett nytt todo-objekt
  fireEvent.change(inputElement, { target: { value: 'Att göra' } });
  fireEvent.click(addButton);

  // Kontrollerar att todo-objektet finns i dokumentet
  const todoItem = screen.getByText(/Att göra/i);
  
  // Klicka på checkbox för att toggla 'done' status
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);

  // Kontrollerar att todo-item har 'done' status
  expect(todoItem).toHaveStyle('text-decoration: line-through'); // Anta att done-statusen gör texten genomstruken
});
