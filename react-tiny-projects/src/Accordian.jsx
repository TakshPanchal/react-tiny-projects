import { useState } from "react";
import "./styles.css";

const Accordian = ({ data }) => {
  const [selectedId, setSelected] = useState(null);
  const [multiMode, setMultiMode] = useState(false);
  const [selections, setSelections] = useState([]);
  const handleItemClick = (itemId) => {
    if (itemId === selectedId) {
      setSelected(null);
    } else setSelected(itemId);
  };

  const handleItemClickMultiMode = (itemId) => {
    let selectionsCp = [...selections];
    const idx = selectionsCp.indexOf(itemId);
    if (idx < 0) selectionsCp.push(itemId);
    else selectionsCp.splice(idx, 1);
    setSelections(selectionsCp);
  };
  return (
    <div className="wrapper">
      {data && data.length > 0 ? (
        <>
          <div>
            <input
              type="checkbox"
              name="Multiple Selection"
              id="mul-checkbox"
              value={multiMode}
              onClick={() => {
                setMultiMode(!multiMode);
                setSelections([selectedId]);
                setSelected(null);
              }}
            />
            <label htmlFor="mul-checkbox">Multiple Selection</label>
          </div>
          <div className="accordian">
            {data.map((e) => (
              <Block
                key={e.id}
                question={e.question}
                answer={e.answer}
                isSelected={
                  selectedId === e.id ||
                  (multiMode && selections.includes(e.id))
                }
                onClickHandler={() =>
                  multiMode
                    ? handleItemClickMultiMode(e.id)
                    : handleItemClick(e.id)
                }
              />
            ))}
          </div>
        </>
      ) : (
        <div>Data not Found</div>
      )}
    </div>
  );
};

const Block = ({ question, answer, isSelected, onClickHandler }) => {
  return (
    <div className="item">
      <div onClick={onClickHandler} className="title">
        <h1>{question}</h1>
        <span>+</span>
      </div>
      {isSelected && <p className="answer">{answer}</p>}
    </div>
  );
};

export default Accordian;
