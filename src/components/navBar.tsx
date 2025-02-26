import ContactButton from "./contactButton";
import ThemeToggle from "./themeToggle";

const NavBar = () => {
  return (
    <div className="fixed w-full top-0 left-0 z-100">
      <div className="h-[5rem] flex justify-end mx-auto w-4/5">
        <ul className="flex space-x-8 items-center">
          {/* Add nav links here */}
          <li><ContactButton /></li>
          <li><ThemeToggle /></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;