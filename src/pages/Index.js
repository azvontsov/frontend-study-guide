import { Link } from "react-router-dom";

function Index(props) {
  // loaded function
  const loaded = () => {
    return props.cards.map((item) => (
      <div key={item._id} className="card">
        <Link to={`/cards/${item._id}`}>
          <h3>{item.question}</h3>
        </Link>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <div className="question-container">
        <div className="name-container">
          <h1>Common Questions</h1>
        </div>
        <div className="question-area">
          {props.cards ? loaded() : loading()}
        </div>
      </div>
    </section>
  );
}

export default Index;
