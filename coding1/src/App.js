import {useState} from "react"



function App() {

  const[score,setScore] = useState(76);
  const[wicket,setWicket] = useState(2);
  const[ball,setBall] = useState(50);

  

  function Change(value,varr, setvar){
    return setvar(varr+value);
  }

  // function Changeball(value,varr, setvar){
  //   let sum = value;
  //   sum = sum+value;

  //   if(sum>5){
  //     return setvar(varr+1);
  //   }else{
  //     return setvar(varr+"."+sum);
  //   }

  //   // return setvar(varr+"."+value);
  // }


  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:
          <h1 className="scoreCount">
          {score}
          </h1>
        </div>
        <div>
          Wicket:
          <h1 className="wicketCount">
          {wicket}
          </h1>
        </div>

        <div>
          Over:
          <h1 className="overCount">
          {ball}
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>Change(1,score, setScore)}>Add 1</button>
        <button className="addScore4" onClick={()=>Change(4,score, setScore)}>Add 4</button>
        <button className="addScore6" onClick={()=>Change(6,score, setScore)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>Change(1,wicket, setWicket)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>Change(1,ball, setBall)}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}

      <h1 className="status">{score>100?"India Won":""}</h1>

    </div>
    

  );
}


export default App;