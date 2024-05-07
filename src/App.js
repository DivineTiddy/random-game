import { useState } from "react";

//const hiddenNum = Math.trunc(Math.random() * 10) + 1;
//console.log(hiddenNum);

export default function App() {
  const [showresult, setShowresult] = useState(10);
  const [viewWin, setViewWin] = useState();
  const [input, setInput] = useState(0);
  const [hiddenNum, sethiddenNum] = useState(0);
  const [computerPoint, setComputerPoint] = useState(10);
  const [level, setLesvel] = useState(1);
  const [select_level, setSelectLevel] = useState(5)
  const [emoji , setEmoji] = useState(``)
 
  function showValue(e) {
    const hiddenNum = Math.trunc(Math.random() * select_level) + 1;
    e.preventDefault();

    if (input > select_level || input < 1) {
      alert(`Invalid number`);
    } else {
      if (input === hiddenNum) {
        setShowresult((el) => el + 1);
      } else {
        setShowresult((el) => el - 1);
      }
      if (input === hiddenNum) {
        setComputerPoint((el) => el - 1);
      } else {
        setComputerPoint((el) => el + 1);
      }
      if (showresult === 19) {
        setLesvel((el) => el + 1);
        setEmoji((el) => `🎉`);
      }
     
      if (computerPoint === 19) {
        setLesvel((el) => el - 1);
      }
      setViewWin(input);
      sethiddenNum(hiddenNum);
      
    }
  }
  //  function showresult(showresult)
  //    console.log(showresult);

  return (
    <div className="appbody">
      <Restart setSelectLevel={setSelectLevel} setShowresult={setShowresult} setComputerPoint={setComputerPoint}></Restart>
      <Showresult
        computerPoint={computerPoint}
        hiddenNum={hiddenNum}
        showresult={showresult}
        viewWin={viewWin}
      ></Showresult>
      <InputNumberAndScore
        hiddenNum={hiddenNum}
        viewWin={viewWin}
        showValue={showValue}
        setInput={setInput}
        showresult={showresult}
        computerPoint={computerPoint}
        level={level}
        setComputerPoint={setComputerPoint}
        setShowresult={setShowresult}
        emoji={emoji}
        setEmoji={setEmoji}
      ></InputNumberAndScore>
    </div>
  );
}

function Restart( {setSelectLevel , setShowresult , setComputerPoint}) {
  function HandleRestart() {
    setComputerPoint(10)
    setShowresult(10)
    
  }

  return (
    <div className="nav">
      <div onClick={HandleRestart} className="buttons">
   <button className="btn"><span></span><p data-start="good luck!" data-text="start!" data-title="new game"></p></button>
</div>
      <select onChange={e => setSelectLevel(Number(e.target.value))} className="select" >
        <option value={3}>EASY 1 to 3</option>
        <option value={5} className="option">MEDIUM 1 to 5</option>
        <option value={10}>HARD 1 to 10</option>
      </select>
    </div>
  );
}

function Showresult({ computerPoint, hiddenNum, showresult, viewWin }) {
  // const display = viewWin === hiddenNum ? hiddenNum : "?";
  const congrat = viewWin === hiddenNum ? `Won` : `Lost`;
  return (
    <div className="showresult">
      <div className="owner">
        <p className="style">YOU😎</p>
        <p className="">{showresult <= 0 ? 0 : showresult >= 20 ? 20 : showresult}</p>
      </div>

      <div className="">
        <p className={!viewWin ? "style_two" : viewWin === hiddenNum ? "won" : "lost"}>{viewWin ? congrat : ""}</p>
        <h3 className={!viewWin ? "style_two" : viewWin === hiddenNum ? "won" : "lost"}>{hiddenNum ? hiddenNum : "?"}</h3>
      </div>

      <div className="computer">
        <p className="style">CPU🤖</p>
        <p className="">
          {computerPoint <= 0 ? 0 : computerPoint >= 20 ? 20 : computerPoint}
          
        </p>
      </div>
    </div>
  );
}
function InputNumberAndScore({
  setComputerPoint,
  level,
  computerPoint,
  showresult,
  showValue,
  setInput,
  setShowresult,
  emoji,
  setEmoji
}) {
  function restartGame() {
    setComputerPoint(10);
    setShowresult(10);
    setEmoji(``)

  }
  return (
    <div className="InputNumberAndScore">
      {computerPoint === 20 || showresult === 20 ? (
        <div>
          <p>level up</p>
          <button className="continue" onClick={restartGame}>continue</button>
        </div>
      ) : (
        <div>
          <form onSubmit={showValue}>
            <input
              autoFocus
              onChange={(e) => setInput(Number(e.target.value))}
              type="text"
            ></input>
           <button className="button" type="submit">
  play
</button>
          </form>
        </div>
      )}

      <div className="level">
        <p ><span className="style">🚀level</span>  {level <= 1 ? 1 : level}{emoji}</p>
      </div>
    </div>
  );
}
