import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Header = ({ showFAChecklist, showLVChecklist, showHEChecklist }) => {
  const navigate = useNavigate();
  const FAClick = (e) => {
    navigate("/fallarrest");
  };
  const LVClick = (e) => {
    navigate("/lightvehicle");
  };
  const HEClick = (e) => {
    navigate("/heavyequipment");
  };
  return (
    <header>
      <h1>Fall Arrest & Fleet Checklists</h1>
      <div>
        {/* Button text and addFA function passed in as props  */}
        <Button text="Fall Arrest Checklist" onClick={FAClick} />
        <Button text="Light Vehicle Checklist" onClick={LVClick} />
        <Button text="Heavy Equipment Checklist" onClick={HEClick} />
      </div>
    </header>
  );
};

export default Header;
