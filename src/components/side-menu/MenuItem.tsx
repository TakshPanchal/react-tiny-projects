import { useState } from "react";
import { Folder } from "./data";
import "./styles.css";
import Menu from "./Menu";

const MenuItem = ({ children = [], label = "" }: Folder) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded((expanded) => !expanded);
  };

  const hasChildren = children && children.length != 0;

  return (
    <li className="parent prevent-select">
      <div className="expand-btn" onClick={handleExpandClick}>
        {hasChildren ? (expanded ? "-" : "+") : null} <>{label}</>
      </div>

      {hasChildren && expanded ? <Menu folders={children} /> : null}
    </li>
  );
};

export default MenuItem;
