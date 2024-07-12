import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModecontext";
import ButtonIcon from "./ButtonIcon";
//import ButtonIcon from "../../../src/ui/ButtonIcon";
//import { useDarkMode } from "../../../src/context/DarkModecontext";


function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;