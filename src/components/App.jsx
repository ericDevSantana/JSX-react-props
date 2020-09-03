import React from "react";
import Contact from "../contacts";
import Card from "./Card";

function App(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={Contact[0].name}
        imgURL={Contact[0].imgURL}
        phone={Contact[0].phone}
        email={Contact[0].email}
      />
      <Card
        name={Contact[1].name}
        imgURL={Contact[1].imgURL}
        phone={Contact[1].phone}
        email={Contact[1].email}
      />
      <Card
        name={Contact[2].name}
        imgURL={Contact[2].imgURL}
        phone={Contact[2].phone}
        email={Contact[2].email}
      />
    </div>
  );
}

export default App;
