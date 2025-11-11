import { NavLink } from 'react-router-dom';

function Nav() {
	return (
		<nav className='fixed top-0 left-0 z-50 w-full bg-white'>
			<div className='h-16 max-w-screen-lg mx-auto text-3xl sm:px-2 lg:px-0'>
				<div className='flex justify-between w-full h-full pt-2 pb-1'>
					<div className='flex items-baseline justify-between w-full h-full leading-none uppercase'>
						<NavLink className='font-extra-black text-ruby-400' to='/'>
							DD
						</NavLink>
						<nav className='flex items-end h-full gap-8 text-lg font-light'>
							<NavLink to='/servizi'>Servizi</NavLink>
							<NavLink to='/contatti'>Contatti</NavLink>
						</nav>
					</div>
				</div>
			</div>

			<hr className='border-ruby-50' />
		</nav>
	);
}

export default Nav;
