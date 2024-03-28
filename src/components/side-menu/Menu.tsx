import MenuItem from "./MenuItem";
import { Folder } from "./data";

const Menu = ({ folders = [] }: { folders: Folder[] }) => {
  const shouldRenderMenu = folders && folders.length != 0;

  return (
    <ul className="menu">
      {shouldRenderMenu
        ? folders.map((folder, index) => {
            return <MenuItem {...folder} key={index} />;
          })
        : null}
    </ul>
  );
};

export default Menu;
