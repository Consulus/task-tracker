import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={(id) => onToggle(task.id)}
    >
      <div>
        Событие: {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </div>
      <div>
        Дата: {task.day} {task.time}
      </div>
      <hr />
    </div>
  );
};

export default Task;
