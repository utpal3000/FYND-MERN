import React from 'react';

function RelativeList() {
  const relatives = ['Mama-Ji', 'Chacha-Ji', 'Bua-Ji', 'Massi-Ji', 'Nani-Ji'];

  return (
    <ol>
      {relatives.map((item) => (
        <li>{item}</li>
      ))}
    </ol>
  );
}

export default RelativeList;

// Problem Statement – “Diwali Relatives List” (React Fundamentals)

// Objective: Create a simple React component that lists the relatives you plan to visit this Diwali using an ordered list
// generated via Array.map().

// Functional Requirements
// 	1.	Component Name
// 	•	Export a functional component named RelativeList.
// 	2.	Data
// 	•	Inside the component (or in the same file), define a constant array relatives containing at least five relative names—for example:

// const relatives = ['Mama-Ji', 'Chacha-Ji', 'Bua-Ji', 'Massi-Ji', 'Nani-Ji'];


// 	3.	Rendering Logic
// 	•	Return a single <ol> element.
// 	•	Use .map() on the relatives array to produce a corresponding <li> for each name.
// 	•	Do not add key props—this task focuses purely on basic rendering.
// 	4.	Styling & Extras
// 	•	No external libraries, CSS, or inline styles are required.
// 	•	Keep the file self-contained and ready to import into any React 18 project.

// Deliverables
// 	•	A single file named RelativeList.jsx containing the complete component.


