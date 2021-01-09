import Nav from "./Nav";
import { getUser } from "../utils/Common";

const MainPanel = (props) => {
  const user = getUser();
  return (
    <div className="MainPanel">
      <Nav history={props.history} />
      <div className="content">
        <p>Welcome {user.name}!</p>
      </div>
    </div>
  );
};
export default MainPanel;
