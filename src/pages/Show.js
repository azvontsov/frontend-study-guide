import { useState } from "react";

function Show(props) {
  const item = props.card;
  console.log(item);

  const [editForm, setEditForm] = useState(item);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateCard(editForm);
  };

  return (
    <div className="card-item">
      <h1>{item.question}</h1>
      <h2>{item.answer}</h2>

      <button id="delete" onClick={props.deleteCard}>
        DELETE
      </button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="question"
          placeholder="Question"
          value={editForm.question}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="overview"
          placeholder="Overview"
          value={editForm.overview}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="tips"
          placeholder="Tips"
          value={editForm.tips}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="framework"
          placeholder="framework"
          value={editForm.framework}
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="answer"
          placeholder="Answer"
          value={editForm.answer}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Update Card" />
      </form>
    </div>
  );
}

export default Show;
