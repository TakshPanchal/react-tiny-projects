// TODO: DO some styling..
import type { Folder } from "./data";
import Menu from "./Menu";

type TreeViewProps = {
  folders: Folder[];
};

const TreeView = ({ folders = [] }: TreeViewProps) => {
  return (
    <div className="container">
      <Menu folders={folders} />
    </div>
  );
};

export default TreeView;
