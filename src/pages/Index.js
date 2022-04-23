import { Link } from "react-router-dom";
import { useState } from "react";

function Index(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    key: "",
    question: "",
    overview: "",
    tips: "",
    answerFramework: "",
    answer: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.question]: event.target.value,
    }));
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createCard(newForm);
    setNewForm({
      key: "",
      question: "",
      overview: "",
      tips: "",
      answerFramework: "",
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
        <p>{item.answerFramework}</p>
        <h2>{item.answer}</h2>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.question}
          name="question"
          placeholder="question"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.overview}
          name="overview"
          placeholder="overview"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.tips}
          name="tips"
          placeholder="tips"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.answerFramework}
          name="answerFramework"
          placeholder="answer framework"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.answer}
          answer="answer"
          placeholder="answer"
          onChange={handleChange}
        />
        <input type="submit" value="Create Card with Question" />
      </form>
      {props.cards ? loaded() : loading()}
    </section>
  );
}

export default Index;
