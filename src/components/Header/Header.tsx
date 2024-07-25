import Container from "../Container/Container";
import NavbarNotes from "../Navbar";

const Header = () => {
  return (
    <header id="hg_300" className="fixed py-3 top-0 left-0 w-full bg-transparent z-10 ">
      <Container>
        <NavbarNotes />
      </Container>
    </header>
  );
};

export default Header;
