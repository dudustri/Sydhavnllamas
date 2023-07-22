import { BrowserRouter } from "react-router-dom";

import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Entry,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from "./components";

function App() {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-page-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Entry />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<Feedbacks />
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
