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
	SideBar,
} from "./components";

function App() {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-page-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Entry />
				</div>
				{/* <div className="fixed h-full">
					<SideBar />
				</div> */}
				<div>
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
			</div>
		</BrowserRouter>
	);
}

export default App;
