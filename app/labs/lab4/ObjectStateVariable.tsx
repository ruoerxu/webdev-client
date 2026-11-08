"use client";

import { useState } from "react";

export default function ObjectStateVariable() {
  const [person, setPerson] = useState({ name: "Peter", age: 24, city: "Boston", hometown: "New York" });
  return (
    <div id="wd-object-state-variables">
      <h2>Object State Variables</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <input
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
        id="wd-person-name"
      />
      <input
        type="number"
        className="block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={person.age}
        onChange={(e) =>
          setPerson({ ...person, age: parseInt(e.target.value) || 0 })
        }
        id="wd-person-age"
      />
      <input
        className="mt-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={person.city}
        onChange={(e) => setPerson({ ...person, city: e.target.value })}
        id="wd-person-city"
      />
      <input
        className="mt-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={person.hometown}
        onChange={(e) => setPerson({ ...person, hometown: e.target.value })}
        id="wd-person-hometown"
      />
      <hr />
    </div>
  );
}