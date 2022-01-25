import Button from "./Button";

const Header = ({ showFAChecklist, showLVChecklist, showHEChecklist }) => {
  return (
    <header>
      <h1>Fall Arrest & Fleet Checklists</h1>
      <div>
        {/* Button text and addFA function passed in as props  */}
        <Button text="Fall Arrest Checklist" onClick={showFAChecklist} />
        <Button text="Light Vehicle Checklist" onClick={showLVChecklist} />
        <Button text="Heavy Equipment Checklist" onClick={showHEChecklist} />
      </div>
    </header>
  );
};

export default Header;
