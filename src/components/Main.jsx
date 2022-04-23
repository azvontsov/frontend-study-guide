import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

const Main = (props) => {
  const [cards, setCards] = useState(null);

  const URL = "http://localhost:3001/cards";
  //   const URL = "https://study-guide-az.herokuapp.com/";

  const getCard = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setCards(data);
  };
  const createCard = async (item) => {
    // make post request to create card
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(item),
    });
    // update list of cards
    getCard();
  };

  const updateCard = async (item, id) => {
    // make put request to create card
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(item),
    });
    // update list of card
    getCard();
  };

  const deleteCard = async (id) => {
    // make delete request to create card
    await fetch(URL + id, {
      method: "DELETE",
    });
    // update list of card
    getCard();
  };

  useEffect(() => getCard(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index cards={cards} createCard={createCard} />
        </Route>
        <Route
          path="/cards/:id"
          render={(rp) => (
            <Show
              cards={cards}
              updateCard={updateCard}
              deleteCard={deleteCard}
              {...rp}
            />
          )}
        />
      </Switch>
    </main>
  );
};

export default Main;
