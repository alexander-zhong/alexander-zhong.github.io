import { Link } from "react-scroll";

function Nav() {
  const scrollTime = 300;
  const sections = ["About", "Projects", "Resume", "Contact", "Updates"];

  return (
    <>
      <nav className="bg-blue-500 bg-opacity-50 p-2 rounded-lg mx-auto max-w-screen-sm mt-1">
        <ul className="flex justify-center">
          {sections.map((section: string) => (
            <li className="mx-6 text-white font-bold opacity-65 font-sans hover:opacity-100">
              <Link
                to={section.toLowerCase()}
                smooth={true}
                duration={scrollTime}
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
