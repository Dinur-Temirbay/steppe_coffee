export function Marketing() {
	return (
		<div className='w-full flex min-h-screen relative'>
			<h2 className='absolute top-12 left-1/2 -translate-x-1/2 text-6xl font-bold z-10 animate-slideUp'>
				<span className='text-[#FFDCAE]'>МАРК</span>
				<span className='text-white'>ЕТИНГ</span>
			</h2>

			<div className='bg-white w-1/2 p-12 flex flex-col justify-center'>
				<h3 className='text-[#932326] font-bold text-4xl mb-8 animate-slideLeft'>
					Социальные сети
				</h3>
				<ul className='space-y-6 animate-slideLeft'>
					<li className='flex gap-4'>
						<div className='w-1 bg-black'></div>
						<div>
							<p className='text-black text-2xl font-bold'>
								Разработали контент-план для:
							</p>
							<p className='text-black text-md'>
								Instagram, Tik Tok, LinkedIn, Threads
							</p>
						</div>
					</li>
					<li className='flex gap-4'>
						<div className='w-1 bg-[#932326]'></div>
						<div>
							<p className='text-black text-2xl font-bold'>
								Настройка и съёмки:
							</p>
							<p className='text-black text-md'>
								Настроили профили и проводим съёмки для социальных сетей
							</p>
						</div>
					</li>
					<li className='flex gap-4'>
						<div className='w-1 bg-black'></div>
						<div>
							<p className='text-black text-2xl font-bold'>Аналитика:</p>
							<p className='text-black text-md'>
								Еженедельно отслеживаем статистику и улучшаем форматы
							</p>
						</div>
					</li>
				</ul>
			</div>

			<div className='bg-[#FFDCAE] w-1/2 flex justify-center items-center relative'>
				<div className='animate-slideRight'>
					<img
						src='/public/instagram.png'
						alt='instagram'
						className='max-h-60 hover:scale-105 transition-transform'
					/>
					<img
						src='/public/linkedin.png'
						alt='linkedin'
						className='max-h-60 hover:scale-105 transition-transform'
					/>
				</div>
				<div className='flex gap-28 absolute animate-slideRight'>
					<img
						src='/public/threads.png'
						alt='threads'
						className='max-h-60 hover:scale-105 transition-transform'
					/>
					<img
						src='/public/tiktok.png'
						alt='tiktok'
						className='max-h-60 hover:scale-105 transition-transform'
					/>
				</div>
			</div>
		</div>
	);
}
