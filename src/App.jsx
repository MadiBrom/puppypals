import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>
          {puppy.name}
        </p>
      ))}

      {featPupId && featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Email: {featuredPup.email}</li>
            <li>Age: {featuredPup.age}</li>
            <li>
              Tricks:
              {featuredPup.tricks.length > 0 ? (
                <ul>
                  {featuredPup.tricks.map((trick) => (
                    <li key={trick.id}>{trick.title}</li>
                  ))}
                </ul>
              ) : (
                " No tricks"
              )}
            </li>
            <li>Is Cute: {featuredPup.isCute ? "Yes" : "No"}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
