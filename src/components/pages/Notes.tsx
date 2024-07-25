import CreateNotes from "../CreateNote/CreateNote";
import Search from "../Search";

const NotesPage = () => {
	return (
		<div className="pt-24 flex flex-col items-center">
			<Search />
			<h2>Organize sua rotina</h2>
			<div className="">
				<CreateNotes />
			</div>
		</div>
	);
};

export default NotesPage;
