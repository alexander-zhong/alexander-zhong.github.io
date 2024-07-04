import { Link } from "react-scroll";

function Nav() {
  const scrollTime = 300;
  const sections = ["About", "Projects", "Contacts"];

  return (
    <>
      <nav>
        <ul>
          {sections.map((section: string) => (
            <li>
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
