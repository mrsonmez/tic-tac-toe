import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isFinished, resetGame } from "../../redux/slice/tictacSlice";

export default function Grid() {
  const [turn, setTurn] = useState("X");
  const tictac = useSelector((state) => state.items);
  const isDisabled = useSelector((state) => state.winner);
  const dispatch = useDispatch();
  const handleClick = (index) => {
    if (isDisabled != null) {
      return false;
    } else {
      setTurn((prev) => (prev == "X" ? "O" : "X"));
      dispatch(isFinished({ index, turn }));
    }
  };
  return (
    <div>
      <h1 hidden={isDisabled == null}>
        {isDisabled != null ? `Winner is  ${isDisabled}` : ""}
        <button
          hidden={isDisabled == null}
          onClick={() => {
            setTurn("X");
            dispatch(resetGame());
          }}
          style={{
            marginLeft: 20,
            borderRadius: 7,
            backgroundColor: "green ",
            padding: 10,
          }}
        >
          {isDisabled != null && "Reset Game"}
        </button>
      </h1>

      <h1 hidden={isDisabled != null}>{turn}'s Turn</h1>
      <div className="gridContainer">
        {tictac.map((item, index) => {
          return (
            <div
              disabled={isDisabled != null}
              key={index}
              onClick={() => handleClick(index)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
