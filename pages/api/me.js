const me = {
	siteName: 'Alexandr Averianov',
	avatar: '/avatar.jpeg',
	description:
		'<p>Меня зовут Александр, я занимаюсь разработкой около 2-3х лет. В настоящий момент я все еще продолжаюсь учиться, параллельно работая на фрилансе.</p>' +
		'<p>Мой стек: HTML, CSS, SASS, TailwindCSS, JS, TS, хорошие знания React, чуть-чуть PHP для простых задач, Gulp, GIT.</p>' +
		'<p>На текущий момент моей целью является попать на позицию стажера или джуна. Если вас заинтересовала моя вакансия, то напишите мне в любом месте.</p>'
}

export default function handler(req, res) {
	res.status(200).json(me)
}
