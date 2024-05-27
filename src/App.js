import logo from "./app-icon.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width="64" height="64" className="App-logo" alt="logo" />
        <span>Sudoku Trials</span>
      </header>
      <h2>Features</h2>
      <p>
        Sharpen your mind with Sudoku Trials! Enjoy a classic puzzle experience with:
        <ol>
          <li>Endless Challenges: Dive into a vast library of Sudoku puzzles, ranging from easy to expert.</li>
          <li>
            Train Your Brain: Improve your logic, memory, and problem-solving skills with daily puzzles and challenges.
          </li>
          <li>
            Play Your Way: Choose from multiple difficulty levels, utilize hints and note-taking to strategize, and get
            help with auto-check to avoid mistakes.
          </li>
          <li>
            A Clean Experience: Play in a beautiful, user-friendly interface with customizable themes for a relaxing and
            enjoyable time.
          </li>
        </ol>
        Key Features:
        <ol>
          <li>Thousands of unique Sudoku puzzles</li>
          <li>Multiple difficulty levels (Easy, Medium, Hard, Expert)</li>
          <li>Note taking and cursor highlights</li>
          <li>Hint system for when you get stuck</li>
          <li>Auto-check to identify errors</li>
          <li>Customizable themes for a personalized experience</li>
        </ol>
        Download today and start your Sudoku journey!
      </p>
      <h2>Contact</h2>
      <p>
        If you have any questions, comments, concerns, feature requests, have anything to say about Sudoku Trials at
        all, please send an email to{" "}
        <a className="App-link" href="mailto:patrick.dev.apps@gmail.com">
          patrick.dev.apps@gmail.com
        </a>
      </p>
    </div>
  );
}

export default App;
