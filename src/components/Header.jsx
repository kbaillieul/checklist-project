import Button from "./Button";

const Header = ({ addFA, addLV, addHE }) => {
  return (
    <header>
      <h1>Fall Arrest & Fleet Checklists</h1>
      <div>
        {/* Button text and addFA function passed in as props  */}
        <Button text="Fall Arrest Checklist" onClick={addFA} />
        <Button text="Light Vehicle Checklist" onClick={addLV} />
        <Button text="Heavy Equipment Checklist" onClick={addHE} />
      </div>
    </header>
  );
};

export default Header;
