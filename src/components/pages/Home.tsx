import Container from "../Container/Container";
import CreateNotes from "../CreateNote/CreateNote";

const HomePage = () => {
  return (
    <Container className="pt-24 flex flex-col items-center">
      <h3 className="text-base mb-4 text-slate-200">Criar nota</h3>

      <div className="">
        <CreateNotes />
      </div>
    </Container>
  );
};

export default HomePage;
