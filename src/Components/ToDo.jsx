import React, { useState } from "react";
import "../App.css";
import TodoItem from "./Todoitem";
// import styles from "./todo.module.css";
export default function ToDo() {
  let [todo, setTodo] = useState([]);
  let [query, setQuery] = useState("");

  // let handleChange = (e) => {
  //   setQuery(e.target.value);
  //   console.log(e.target.value);
  // };

  const onDelete = (id) => {
    let newTodo = todo.filter((todo) => todo.id !== id);
    setTodo(newTodo);
  };
  return (
    <div className="todo">
      <h1 className="heading">Todo List</h1>
      <input
        type="text"
        value={query}
        placeholder="Enter Your Bucket List"
        onChange={(e) => {
          setQuery(e.target.value);
        }}

        onKeyDownCapture={(event) => {
          // console.log(e.target.value);
          if(event.key==='enter'){
            setTodo([...todo, { id: Date.now(), value: query }]);
             setQuery("");
           
          }
        }}

      

      />
      <button
        onClick={() => {
          setTodo([...todo, { id: Date.now(), value: query }]);
          setQuery("");
        }}
      >
        Add List
      </button>
      <div>
        {todo.map((todo) => (
          // <div key={todo.id} className={styles.todos}>
          //   <input type="checkbox" className={styles.check} />
          //   <div key={todo.id}>
          //     {todo.value}
          //     {/* <Todoitem key={todo.id} todo={todo} onDelete={onDelete}/> */}
          //   </div>
          // </div>
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}