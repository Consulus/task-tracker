import { FaTimesCircle } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={(id) => onToggle(task.id)}
    >
      <div>
        Событие: {task.text}{" "}
        <FaTimesCircle
          style={{ color: "red", cursor: "pointer" }}
          onClick={(id) => onDelete(task.id)}
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
