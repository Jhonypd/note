import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarBrand } from "react-bootstrap";

const Logo = () => {
	return (
		<NavbarBrand className="text-gray-950 font-bold" aria-label="Logo da aplicação Notes">
			Notes <span className=" text-xs"></span>
		</NavbarBrand>
	);
};

export default Logo;
