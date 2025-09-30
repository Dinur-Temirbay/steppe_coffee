export function Activity() {
	return (
		<div className='w-full flex min-h-screen relative'>
			<div className='bg-[#FFDCAE] w-1/2 flex justify-center items-center relative'>
				<div className='animate-slideLeft'>
					<img
						src='/public/activity.png'
						alt='activity'
						className='max-h-[550px] hover:scale-105 transition-transform'
					/>
				</div>
			</div>

			<div className='bg-white w-1/2 p-12 flex flex-col justify-center items-end'>
				<h3 className='text-[#932326] font-bold text-4xl text-right mb-8 animate-slideRight'>
					Offline Активности
				</h3>
				<div className='space-y-6 animate-slideRight'>
					<div className='px-5 py-5 rounded-2xl bg-[#FFDCAE]/50'>
						<p className='text-black text-xl font-bold'>
							🤝 Принимаем партнерские предложения
						</p>
					</div>
					<div className='px-5 py-5 rounded-2xl bg-[#FFDCAE]/50'>
						<p className='text-black text-xl font-bold'>
							🗣️ Устраиваем встречи с комьюнити
						</p>
					</div>

					<div className='px-5 py-5 rounded-2xl bg-[#FFDCAE]/50'>
						<p className='text-black text-xl font-bold'>
							🎉 Разрабатываем мероприятия
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
