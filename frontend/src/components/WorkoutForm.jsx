import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [invalidFields, setinvalidFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setinvalidFields(json.invalidFields);
    } else {
      setinvalidFields([]);
      setTitle("");
      setReps("");
      setLoad("");
      setError(null);
      console.log("new workout added.", json);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label htmlFor="title">Excersize Title:</label>
      <input
        id="title"
        required
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={invalidFields.includes("title") ? "error" : ""}
      />

      <label htmlFor="load">Excersize Load:</label>
      <input
        id="load"
        required
        type="number"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
        className={invalidFields.includes("load") ? "error" : ""}
      />

      <label htmlFor="reps">Excersize Reps:</label>
      <input
        id="reps"
        required
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className={invalidFields.includes("reps") ? "error" : ""}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
