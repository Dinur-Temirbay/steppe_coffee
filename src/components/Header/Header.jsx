export function Header() {
	return (
		<>
			<nav className='container mx-auto px-28 flex justify-between items-center h-20 w-full bg-black'>
				<img src='/public/logo.png' alt='logo' />
				<div className='flex items-center text-white text-[16px] gap-x-[50px]'>
					<a href='#home'>Home</a>
					<a href='#services'>Services</a>
					<a href='#portfolio'>Portfolio</a>
					<a href='#aboutus'>About us</a>
					<button className='py-2 px-10 bg-white rounded-3xl text-black font-bold cursor-pointer'>
						Contact us
					</button>
				</div>
			</nav>
		</>
	);
}
