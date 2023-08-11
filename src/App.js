import './App.css';

function App() {
   
  const course = "half stack application development";
  const part1 = 'fundamentals of react';
  const exercises1 = 10;
  const part2 = 'using props to pass data';
  const exercises2 = 7;
  const part3 = 'state of a component';
  const exercises3 = 14;


  return (
    <div >
      <h1>{course}</h1>
      <ul>
       
        <li key={part1.toString()}>{part1}  {exercises1}</li>
        <li key={part2.toString()} >{part2} {exercises2}</li>
        <li key={part3.toString()} >{part3}  {exercises3}</li>

      
      
      </ul>
      
    </div>
  );
}

export default App;
