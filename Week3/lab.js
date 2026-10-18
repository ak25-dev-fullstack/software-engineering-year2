//************************************************************
// 👩‍💻👨‍💻 WEEK 3 LAB — Advanced JSX
//************************************************************
// 🌟 GOAL: Understand JSX, attributes, .map(), and conditional rendering.
//************************************************************

//************************************************************
// STEP 1 — YOUR FIRST JSX
//************************************************************
// Inside the App() function below, return a <div> that says:
// "Hello Software Engineers!"
// HINT: return (<div>Hello Software Engineers!</div>)

//************************************************************
// STEP 2 — ADD ELEMENTS AND ATTRIBUTES
//************************************************************
// Still inside App(), add:
// - an <h2> with your name
// - a <p> that says your favourite programming language
// - a <p> with className="fun-fact" containing a fun fact about yourself
// Remember: in JSX we use className instead of class.

//************************************************************
// STEP 3 — CREATE A DATA ARRAY
//************************************************************
// Create an array of objects called "students".
// Each student should have: name, age, and course.
// Example: { name: "Alice", age: 20, course: "Computing" }

const students = [
	// ✏️ Add your student data here
];

//************************************************************
// STEP 4 — DISPLAY DATA USING .map()
//************************************************************
// Inside App(), create a <ul> list where each <li> displays the student's name and course.
// HINT: students.map(student => (<li>...</li>))

//************************************************************
// STEP 5 — ADD CONDITIONAL RENDERING
//************************************************************
// Only show students OVER 21.
// HINT: students.filter(s => s.age > 21).map(...)

//************************************************************
// STEP 6 — REUSABLE JSX BLOCK (Like Props, But Simple)
//************************************************************
// Create a small helper function inside App:
// function renderStudent(student) { return (<div>...</div>); }
// Call it inside .map() to render each student's details (name, age, course).

//************************************************************
// STEP 7 — BONUS CHALLENGE: SURF FORECAST
//************************************************************
// Create an object called surfForecast with a "location" and "forecast" array.
// Each forecast entry should have a "date" and "conditions" array of { time, height, wind }.
// Use nested .map() to display the forecast nicely.

const surfForecast = {
	// ✏️ Add your forecast data here
};

//************************************************************
// STEP 8 — BRING IT ALL TOGETHER
//************************************************************
// Inside App(), render:
// - Your greeting & intro info
// - Your <ul> of students (21+ only)
// - Your surf forecast
//************************************************************

function App() {
	return (
		<main style={{ fontFamily: "system-ui", lineHeight: 1.5, padding: "1rem" }}>
			<h1>🌊 Week 3 — JSX Rendering Workbook</h1>

			{/* ✏️ Write your JSX here */}
		</main>
	);
}

//************************************************************
// STEP 9 — RENDER TO THE PAGE (React 18)
//************************************************************

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
