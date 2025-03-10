import { Link, Outlet } from 'react-router';
import background from '../../assets/images/bg-home.png';

const Layout = () => {
	return (
		<div className="flex flex-col h-screen">
			<nav className="min-h-12 flex items-center gap-4 w-screen bg-slate-500 text-slate-100 px-4">
				<Link to="/home">Home</Link>

				<p className="text-sm ml-auto">{`developed by ${process.env.REACT_APP_NAME}`}</p>
			</nav>
			<main className="p-4 grow overflow-auto relative">
				<img
					src={background}
					alt="bg-image"
					className="absolute inset-0 w-full h-full z-[-1] object-cover opacity-30"
				/>
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
