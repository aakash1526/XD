// src/DictionaryApp.jsx
import React, { useState } from "react";

const DictionaryApp = () => {
  // Initial dictionary state
  const initialDictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  // State to hold the dictionary, search term, and search result
  const [dictionary] = useState(initialDictionary);
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  // Handle search function
  const handleSearch = () => {
    // Search for the word in the dictionary (case-insensitive)
    const foundEntry = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );

    // Update the definition state based on the search result
    if (foundEntry) {
      setDefinition(foundEntry.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter a word"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <h2>Definition:</h2>
        <p>{definition}</p>
      </div>
    </div>
  );
};

export default DictionaryApp;
