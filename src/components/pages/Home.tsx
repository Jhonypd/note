import Container from "../Container/Container";
import CreateNotes from "../CreateNote/CreateNote";
import Search from "../Search";

const HomePage = () => {
  return (
    <Container className="pt-24 flex flex-col items-center">
      <Search />
      <h3 className="text-base mb-4 text-slate-200">Criar nota</h3>

      <div>
        <CreateNotes />
      </div>
    </Container>
  );
};

export default HomePage;
