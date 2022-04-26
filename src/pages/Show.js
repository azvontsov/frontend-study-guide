import { useState } from "react";

import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

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

      <div className="btns">
        <button style={{ color: "red" }}>
          <AiOutlineEdit />
        </button>
        <button style={{ color: "red" }} id="delete" onClick={props.deleteCard}>
          <MdDeleteForever />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="5"
          cols="30"
          type="text"
          name="question"
          placeholder="Question"
          value={editForm.question}
          onChange={handleChange}
        />
        <br />
        <textarea
          rows="5"
          cols="30"
          type="text"
          name="overview"
          placeholder="Overview"
          value={editForm.overview}
          onChange={handleChange}
        />
        <br />
        <textarea
          rows="5"
          cols="30"
          type="text"
          name="tips"
          placeholder="Tips"
          value={editForm.tips}
          onChange={handleChange}
        />
        <br />
        <textarea
          rows="5"
          cols="30"
          type="text"
          name="framework"
          placeholder="framework"
          value={editForm.framework}
          onChange={handleChange}
        />
        <br />

        <textarea
          rows="5"
          cols="30"
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
