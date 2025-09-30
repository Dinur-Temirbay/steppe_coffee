export function Bottles() {
	return (
		<>
			<div className='container mx-auto py-8 bg-[#FFF9C6] flex justify-evenly items-center'>
				<img
					src='/public/bottle1.png'
					alt='bottle1'
					className='h-full -rotate-12 transition-transform hover:rotate-0'
				/>
				<img
					src='/public/bottle2.png'
					alt='bottle2'
					className='h-full -rotate-12 transition-transform hover:rotate-0'
				/>
				<img
					src='/public/bottle3.png'
					alt='bottle3'
					className='h-full -rotate-12 transition-transform hover:rotate-0'
				/>
				<img
					src='/public/bottle4.png'
					alt='bottle4'
					className='h-full -rotate-12 transition-transform hover:rotate-0'
				/>
				<img
					src='/public/bottle-saygak.png'
					alt='bottle-saygak'
					className='max-h-[300px] hover:scale-105 transition-transform'
				/>
			</div>
		</>
	);
}
