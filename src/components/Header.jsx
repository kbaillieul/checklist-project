import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Header = ({ showFAChecklist, showLVChecklist, showHEChecklist }) => {
  const navigate = useNavigate();
  const FAClick = (e) => {
    navigate("/fallarrest");
  };
  return (
    <header>
      <h1>Fall Arrest & Fleet Checklists</h1>
      <div>
        {/* Button text and addFA function passed in as props  */}
        <Button text="Fall Arrest Checklist" onClick={FAClick} />
        <Button text="Light Vehicle Checklist" onClick={showLVChecklist} />
        <Button text="Heavy Equipment Checklist" onClick={showHEChecklist} />
      </div>
    </header>
  );
};

export default Header;
