export function Promo() {
	return (
		<>
			<main className='container mx-auto px-28 flex justify-between w-full bg-black py-36'>
				<div className='flex flex-col w-1/2'>
					<span className='font-medium text-2xl text-white'>КЕЙС-СТАДИ</span>
					<h1 className='text-white text-[150px] font-bold leading-32 py-8'>
						STEPPE COFFEE
					</h1>
					<p className='text-white font-medium text-lg'>
						Мы составили уникальное торговое предложение, где Steppe Coffee не
						просто кофейня, а четвертое пространство, где рождаются смыслы,
						собирается креатив, кофе и культура.
					</p>
				</div>
				<div>
					<img src='/public/mascot.png' alt='mascot' className='' />
				</div>
			</main>
		</>
	);
}
