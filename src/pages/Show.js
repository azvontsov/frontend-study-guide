import { useState } from "react";
function Show(props) {
  const id = props.match.params.id;
  const cards = props.cards;
  const item = cards.find((p) => p._id === id);

  // state for form
  const [editForm, setEditForm] = useState(item);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm((prevState) => ({
      ...prevState,
      [event.target.question]: event.target.value,
    }));
  };

  // handlesubmit for form

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateCard(editForm);
    // redirect card back to index
    props.history.push("/");
  };

  const removeCard = () => {
    props.deleteCard(item._id);
    props.history.push("/");
  };

  return (
    <div className="item">
      <h2>{item.question}</h2>
      <p>{item.overview}</p>
      <p>{item.tips}</p>
      <p>{item.answerFramework}</p>
      <h2>{item.answer}</h2>
      <button id="delete" onClick={removeCard}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.question}
          name="question"
          placeholder="question"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.question}
          name="question"
          placeholder="question"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.overview}
          name="overview"
          placeholder="overview"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.tips}
          name="tips"
          placeholder="tips"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.answerFramework}
          name="answerFramework"
          placeholder="answerFramework"
          onChange={handleChange}
        />

        <input
          type="text"
          value={editForm.answer}
          name="answer"
          placeholder="answer"
          onChange={handleChange}
        />
        <input type="submit" value="Update Card" />
      </form>
    </div>
  );
}

export default Show;
