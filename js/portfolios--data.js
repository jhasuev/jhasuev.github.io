

/* Данные портфолио | Инфо добавляем в начало массива (выводятся на страницу в таком же порядке) */
var portfoliosData = [
	{
		title : "Echo design",
		miniature : "https://davinskiy.bitbucket.io/portfolios/echo-design/mini.jpg",
		desc : "Настоящий акустический поролон ....",
		impress : "Классика жанра :)",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/echo-design/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/echo-design/full-img.jpg",
		show: true
	},
	{
		title : "Dental marketing",
		miniature : "https://davinskiy.bitbucket.io/portfolios/stomotolog-uv/mini.jpg",
		desc : "Еще один макет без излишеств дизайнера.",
		impress : "Классика жанра :)",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/stomotolog-uv/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/stomotolog-uv/full-img.jpg",
		show: true
	},
	{
		title : "Лендинг детского магазина",
		miniature : "https://davinskiy.bitbucket.io/portfolios/mamka-landing/mini.jpg",
		desc : "Еще одна верста для моего ранее клиента.",
		impress : "Как и раньше очень красивый макет, что очень интересно верстать :)",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/mamka-landing/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/mamka-landing/full-img.jpg",
		show: true
	},
	{
		title : "Страница-портфолио",
		miniature : "https://davinskiy.bitbucket.io/portfolios/04-portfolio/mini.jpg",
		desc : "По ТЗ нужно было сверстать страницу без флексов и фреймворков. Не знал, почему, но сделал. \
				Только сейчас понял, это была дипломная работа заказчика :). Вначале нужно было просто \
				верстать в пиксель перфект, позже зохотел и адаптив. Все сделано..",
		impress : "Жаль, что у меня не были таких простых дипломныых работ :)",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/04-portfolio/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/04-portfolio/full-img.jpg",
		show: true
	},
	{
		title : "World Of Tanks",
		miniature : "https://davinskiy.bitbucket.io/portfolios/wot/mini.jpg",
		desc : "Сайт для любителей игр. ",
		impress : "Красивый макет. Жаль, что не WarFace :D",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/wot/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/wot/full-img.jpg",
		show: true
	},
	{
		title : "Soco Group",
		miniature : "https://davinskiy.bitbucket.io/portfolios/soco.group/mini.jpg",
		desc : "Одностраничник с одним экраном - фоновым слайдером. ",
		impress : "Люблю простые, но очень красивые макеты. :)",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/soco.group/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/soco.group/full-img.jpg",
		show: true
	},
	{
		title : "Инвестиции",
		miniature : "https://davinskiy.bitbucket.io/portfolios/investing/mini.jpg",
		desc : "Макет от постоянного клиент про инвистиции.",
		impress : "Красивый макет, все зеленое. Было приятно работотать. :)",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/investing/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/investing/full-img.jpg",
		show: true
	},
	{
		title : "Florida Builders",
		miniature : "https://davinskiy.bitbucket.io/portfolios/florida-builders/mini.jpg",
		desc : "Сайт по услугам созданию и конструирование домов.",
		impress : "Первый в моем портфолио сайт с внутренными страницами. Хотя в этом ничего и удивительного.. \
					А вот сам сайт - мне нравится: галерея, фоновый слайдер... достаточно js-программирование, чтобы не скучать :)\
					<br /> На фото там только одна страница. Придется посерфить, чтобы найти остальные ;)",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/florida-builders/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/florida-builders/full-img.jpg",
		show: true
	},
	{
		title : "Mamka Store",
		miniature : "https://davinskiy.bitbucket.io/portfolios/mamka-store/mini.jpg",
		desc : "Модальное окно + счетчик. ",
		impress : "Было круто такое реализовать, особенно таймер :)",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/mamka-store/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/mamka-store/full-img.jpg",
		show: false
	},
	{
		title : "18+?",
		miniature : "https://davinskiy.bitbucket.io/portfolios/adulthood/full-img.jpg",
		desc : "Модальное окно...",
		impress : "Интересный был заказ :)",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/adulthood/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/adulthood/full-img.jpg",
		show: false
	},
	{
		title : "Правопоритет",
		miniature : "https://davinskiy.bitbucket.io/portfolios/pravoparitet/mini.jpg",
		desc : "Сайт на тему: юридические услуги для организаций и предпринимателей",
		impress : "[попросили афишировать]",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/pravoparitet/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/pravoparitet/full-img.jpg",
		show: false
	},
	{
		title : "Дизайн интерьера",
		miniature : "https://davinskiy.bitbucket.io/portfolios/interior-design/mini.jpg",
		desc : "Интересный макет по дизайну интерьера.",
		impress : "Красивый, интересный.",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/interior-design/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/interior-design/full-img.jpg",
		show: true
	},
	{
		title : "Ремонт и отделка",
		miniature : "https://davinskiy.bitbucket.io/portfolios/planiroom/mini.jpg",
		desc : "Страница-заглушка.",
		impress : "Удобный шаблончик. Радует глаз :)",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/planiroom/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/planiroom/full-img.jpg"
	},
	{
		title : "Ателье мебели",
		miniature : "https://davinskiy.bitbucket.io/portfolios/belcanto/mini.jpg",
		desc : "Макет по производству мебели в воронеже и москве.",
		impress : "Макет красивый. И, как всегда, адекватный клиент. :)",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/belcanto/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/belcanto/full-img.jpg"
	},
	{
		title : "SEOBAKER",
		miniature : "https://davinskiy.bitbucket.io/portfolios/seobaker/mini.jpg",
		desc : "Макет на тематику продвижение в поисковых системах, сверстанный на флексах, адаптивно.",
		impress : "Красивый, без каких либо заморочек, макет. + очень адекватный и \
					приятный клиент, что, как всегда, только мотивирует, работотать.",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/seobaker/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/seobaker/full-img.jpg"
	},
	{
		title : "Мужское портмоне | Louis Vuitton",
		miniature : "https://davinskiy.bitbucket.io/portfolios/wallets/mini.jpg",
		desc : "Макет про корманные кошельки. Сверстан адаптивно на флексах. \
				На макете нету, но после верстки был добавлен еще один блок (экран)",
		impress : "То что много слайдеров :)",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/wallets/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/wallets/full-img.jpg"
	},
	{
		title : "Арена недвижимости",
		miniature : "https://davinskiy.bitbucket.io/portfolios/real-estate-arena/mini.jpg",
		desc : "Очень красивый макет по услугам подбора квартир в питере - бесплатно. Сверстан на флексах.",
		impress : "Довольно простой в использовании макет, с понятным функционалом, что может не порадовать. \
					Плюс, довольно адекватный клиент.",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/real-estate-arena/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/real-estate-arena/full-img.jpg"
	},
	{
		title : "Теплоконтакт",
		miniature : "https://davinskiy.bitbucket.io/portfolios/teplokontakt/mini.jpg",
		desc : "Макет строительного характера, представляющий материалы для обеспечение \
				теплоизоляция домов и других помещений. Был сверстан за 3-4 дня, так как был более чем свободен. \
				Заказчик попался вполне адекватный, что не могло не порадовать. Верстал на флексах.",
		impress : "Удобный макет, без каких-либо дизайнерских заморочек, довольно простой при верстке. \
					Был сверстан, как говорится, на одном дыхание. :) Заказчик был доволен. ",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/teplokontakt/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/teplokontakt/full-image.jpg"
	},
	{
		title : "Дождевики",
		miniature : "https://davinskiy.bitbucket.io/portfolios/Rainers/miniature.jpg",
		desc : "Очень интересный макет лендинга про дождевики. \
				Где можно выбрать себе подходящий по размеру и по вкусу цвета (черный / белый) дождевик.",
		impress : "Интересный, сложный, много JS кода, немного не стандартный, вообщем, отличный макет, побольше бы таких :)",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/Rainers/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/Rainers/full-img.jpg"
	},
	{
		title : "Авто кредит.Редизайн",
		miniature : "https://davinskiy.bitbucket.io/portfolios/auto-credit.redisign/miniature.jpg ",
		desc : "Очередной макет от постоянного клиента. На этот раз редизайн того макета, \
				что было сверстана мною же. На этот раз договорились, что верстка будет на флексах.",
		impress : "дизайн немного по красивее :)",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/auto-credit.redisign/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/auto-credit.redisign/full-img.jpg"
	},
	{
		title : "Я ем",
		miniature : "https://davinskiy.bitbucket.io/portfolios/I-eat/mini.jpg ",
		desc : "Еще один макет от прежней заказчицы. На этот раз немного интересный - про еду :) \
				Верстал на флексах, клиентка снова была довольна работой :)",
		impress : "Верстал долго, за 3 дня )) ибо каждый раз, когда открывал макет в фотошопе, я почему-то слышал зов холодильника..",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/I-eat/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/I-eat/full-image.png"
	},
	{
		title : "Балтсервис",
		miniature : "https://davinskiy.bitbucket.io/portfolios/BaltService/mini.jpg ",
		desc : 'Классический макет на тематику "спецтехники и их комплектующие". Где-то интересный, где обычный :)',
		impress : 'Наверное, только то, что заказчица, которая обратилась с данным макетом, сама довольно неплохо сверстала его. \
					Но она искала другого испольнителя, так как ее верстка, цитируя, "кривая".',
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/BaltService/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/BaltService/full-img.jpg"
	},
	{
		title : 'GPS Мониторинга под ключ',
		miniature : 'https://davinskiy.bitbucket.io/portfolios/GPS-monitoring/miniature.jpg',
		desc : 'Еще один макет от одного ранего клиента. Про системы GPS мониторинга. \
				Не совсем понял суть этих мониторингов, но макет довольно интересный. :)) \
				Сверстал на бутстрапе.',
		impress : 'Красота в простоте. :) \
					Но потрудиться все-таки немного пришлось - видеофон на главном экране. :)',
		url_to_work : 'https://davinskiy.bitbucket.io/portfolios/GPS-monitoring/index.html',
		url_to_jpg : 'https://davinskiy.bitbucket.io/portfolios/GPS-monitoring/full-image.jpg'
	},
	{
		title : 'Авто кредит',
		miniature : 'https://davinskiy.bitbucket.io/portfolios/auto-credit/miniature.jpg',
		desc : 'Верстал в то время, когда я немного где-то что-то прочел про БЭМ, \
				но не корректно понял суть. В этом можно убедиться, увидев классы в коде вида \
				"how-we-do__steps__step-items__step__dot-line" и "footer__contacts__form__title_overcase-green". \
				Хотя бы понятно, что где находиться :))',
		impress : 'Первый заказ, сделанный на бутстрапе, и вроде неплохе справился - заказчик был доволен. :)',
		url_to_work : 'https://davinskiy.bitbucket.io/portfolios/auto-credit/index.html',
		url_to_jpg : 'https://davinskiy.bitbucket.io/portfolios/auto-credit/full-image.jpg'
	}
];
