import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Canvas from './canvas';
import Customizer from './pages/Customizer';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<main className=' transition-all ease-in'>
				<div>
					<Header />
				</div>

				<div className='content '>
					<Routes>
						<Route
							path='/'
							element={
								<>
									<div className='app'>
										<Home />
										<Canvas />
										<Customizer />
									</div>

									<About />
									<Services />
									<Projects />
								</>
							}
						/>
						<Route
							path='/about'
							element={<About />}
						/>
						<Route
							path='/services'
							element={<Services />}
						/>
						<Route
							path='/projects'
							element={<Projects />}
						/>
					</Routes>
				</div>

				<div>
					<Footer />
				</div>
			</main>
		</Router>
	);
}

export default App;
