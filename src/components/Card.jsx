import { Link } from "react-router-dom";
import { useState } from "react";

function Card(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    question: "",
    overview: "",
    tips: "",
    framework: "",
    answer: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("trying to submit", newForm);
    props.createCard(newForm);
    setNewForm({
      question: "",
      overview: "",
      tips: "",
      framework: "",
      answer: "",
    });
  };

  // loaded function
  const loaded = () => {
    return props.cards.map((item) => (
      <div key={item._id} className="item">
        <Link to={`/cards/${item._id}`}>
          <h3>{item.question}</h3>
        </Link>
        <p>{item.overview}</p>
        <p>{item.tips}</p>
        <p>{item.framework}</p>
        <h4>{item.answer}</h4>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="5"
          cols="30"
          type="text"
          value={newForm.question}
          name="question"
          placeholder="question"
          onChange={handleChange}
        />
        <br />
        <textarea
          rows="5"
          cols="30"
          type="text"
          value={newForm.overview}
          name="overview"
          placeholder="overview"
          onChange={handleChange}
        />
        <br />

        <textarea
          rows="5"
          cols="30"
          type="text"
          value={newForm.tips}
          name="tips"
          placeholder="tips"
          onChange={handleChange}
        />
        <br />
        <textarea
          rows="5"
          cols="30"
          type="text"
          value={newForm.framework}
          name="framework"
          placeholder="framework"
          onChange={handleChange}
        />
        <br />
        <textarea
          rows="5"
          cols="30"
          type="text"
          value={newForm.answer}
          name="answer"
          placeholder="answer"
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Create Card with Question" />
      </form>
    </section>
  );
}

export default Card;
