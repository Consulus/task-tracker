import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Добавьте задачу");
      return;
    }

    onAdd({ text, day, time, reminder });

    setText("");
    setDay("");
    setTime("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Задача</label>
        <input
          type="text"
          placeholder="Добавьте задачу"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Дата</label>
        <input
          type="text"
          placeholder="Добавьте дату"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Время</label>
        <input
          type="text"
          placeholder="Добавьте время"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Напоминание</label>
        <input
          type="checkbox"
          checked={reminder}
          placeholder="Добавьте напоминание"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Сохранить" className="btn btn-block" />
    </form>
  );
};
export default AddTask;
