import Image from "next/image";
import "./style.css";

export default function Home() {
  return (
    <div>
      <div id="button-container">
        <button onClick="openModal()">Add task</button>
      </div>
      <header>
        <div id="todo">
          <div id="inner">
            <div id="round-shape"></div>
            <div id="t5">To Do</div>
            <div id="num-todo">0</div>
          </div>
          <div id="task-list-todo"></div>
        </div>
        <div id="in-progress">
          <div id="inner">
            <div id="round-shape"></div>
            <div id="t5">In Progress</div>
            <div id="num-in-progress">0</div>
          </div>
          <div id="task-list-in-progress"></div>
        </div>
        <div id="done">
          <div id="inner">
            <div id="round-shape"></div>
            <div id="t5">Done</div>
            <div id="num-done">0</div>
          </div>
          <div id="task-list-done"></div>
        </div>
        <div id="blocked">
          <div id="inner">
            <div id="round-shape"></div>
            <div id="t5">Blocked</div>
            <div id="num-blocked">0</div>
          </div>
          <div id="task-list-blocked"></div>
        </div>
        <div id="modal">
          <div id="modal-content">
            <h2>Enter task</h2>
            <input type="text" id="text" placeholder="Task name..." />
            <select id="status">
              <option value="select">Select status</option>
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
              <option value="blocked">Blocked</option>
            </select>
            <button onClick="submitTask()">Submit</button>
            <span id="close-modal" onClick="closeModal()">
              X
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}
