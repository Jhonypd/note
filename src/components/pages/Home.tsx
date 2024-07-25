import Container from "../Container/Container";
import CreateNotes from "../CreateNote/CreateNote";
import Search from "../Search";

const HomePage = () => {
	return (
		<Container className="pt-24 flex flex-col items-center">
			<h2 className="text-base mb-4 text-slate-200">Organize sua rotina com Notes</h2>
			<Search />
			<div className="">
				<CreateNotes />
			</div>
		</Container>
	);
};

export default HomePage;
