new Vue({
	el : '#app',
	data : {
		input_text : 'Миля, ты тут?',
		output_text : '',
		show_params : false,
		symbols : {
			"А": {
				"selected": "Ắ",
				"options": [ "Ꭿ", "₳", "Ǻ", "Α", "Ά", "Ǡ", "Ẫ", "Ắ", "Ằ", "Ẳ", "Ẵ", "Ä", "ª", "Å", "À", "Á", "Â", "Ã", "ᗩ", "@", "Ⱥ", "Ǟ"]
			},
			"Б": {
				"selected": "Ҕ",
				"options": [ "Ҕ", "Ϭ", "চ", "ঢ়", "Ƃ", "Ɓ"]
			},
			"В": {
				"selected": "ℬ",
				"options": [ "ℬ", "Ᏸ", "Β", "฿", "ᗷ", "ᗽ", "ᗾ", "ᗿ", "Ɓ", "ᗸ", "ᗹ", "ᛔ"]
			},
			"Г": {
				"selected": "ℾ",
				"options": [ "୮", "┍", "ℾ"]
			},
			"Д": {
				"selected": "ℊ",
				"options": [ "ℊ", "∂"]
			},
			"Е": {
				"selected": "ℰ",
				"options": [ "ℰ", "ℯ", "ໂ", "६", "Ē", "℮", "Ė", "Ę", "Ě", "Έ", "Ê", "È", "€", "É", "Ế", "Ề", "Ể", "Ễ", "Є", "Ε", "Ҿ"]
			},
			"Ж": {
				"selected": "ᛤ",
				"options": [ "ᛤ", "♅", "Җ", "Ӝ", "Ӂ"]
			},
			"З": {
				"selected": "Յ",
				"options": [ "Յ", "ℨ", "ჳ"]
			},
			"И": {
				"selected": "น",
				"options": [ "น", "Ự", "Ӥ"]
			},
			"Й": {
				"selected": "Ũ",
				"options": [ "Ũ", "Ū", "Ŭ", "Ù", "Ú", "Ҋ"]
			},
			"К": {
				"selected": "₭",
				"options": [ "ᛕ", "₭", "Ꮶ", "Ќ", "K", "Ķ", "Ҝ", "ᶄ", "Ҡ"]
			},
			"Л": {
				"selected": "ለ",
				"options": [ "ለ", "ሉ", "ሊ", "ሌ", "ል", "ሎ", "Ꮧ", "Ꮑ"]
			},
			"М": {
				"selected": "ጠ",
				"options": [ "ጠ", "ᛖ", "ℳ", "ʍ", "ᶆ", "Ḿ", "♍", "ᗰ", "ᙢ", "爪", "♏", "₥"]
			},
			"Н": {
				"selected": "ਮ",
				"options": [ "ਮ", "ዘ", "ዙ", "ዚ", "ዛ", "ዜ", "ዝ", "ዞ", "ዟ", "ℍ", "ℋ", "ℎ", "ℌ", "ℏ", "Ꮵ", "Ĥ", "Ħ", "Ή", "Ḩ", "Ӈ"]
			},
			"О": {
				"selected": "ტ",
				"options": [ "০", "ℴ", "ტ", "٥", "Ό", "Ó", "Ǿ", "Θ", "Ò", "Ô", "Ö", "Õ", "Ờ", "Ớ", "Ọ", "Ợ", "Ø", "Ở", "Ổ", "Ō", "Ő", "Ӫ"]
			},
			"П": {
				"selected": "Ո",
				"options": [ "Ո", "ग", "ກ", "⋒", "Ҧ"]
			},
			"Р": {
				"selected": "Թ",
				"options": [ "Թ", "ℙ", "℘", "Ρ", "Ꭾ", "Ꮅ", "尸", "Ҏ", "ᶈ", "₱", "☧", "ᖘ", "ק", "₽", "Ƿ"]
			},
			"С": {
				"selected": "Ⴚ",
				"options": [ "Ⴚ", "☾", "ℭ", "ℂ", "Ç", "¢", "Č", "Ċ", "Ĉ", "Σ", "Ć", "Ḉ", "⊂", "Ꮸ", "₡"]
			},
			"Т": {
				"selected": "⍑",
				"options": [ "⍑", "⍡", "T", "Τ", "Ţ", "Ť", "Ŧ", "Ṫ", "₮"]
			},
			"У": {
				"selected": "Ɣ",
				"options": [ "Ɣ", "Ꭹ", "Ꮍ", "Ẏ", "ϒ", "ɤ", "￥", "௶", "Ⴘ"]
			},
			"Ф": {
				"selected": "Փ",
				"options": [ "Փ", "Ⴔ", "ቁ", "ቂ", "ቃ", "ቄ", "ቅ", "ቆ", "ቇ", "ቈ", "ᛄ"]
			},
			"Х": {
				"selected": "Χ",
				"options": [ "Χ", "×", "✗", "✘", "᙭", "ჯ", "Ẍ", "ᶍ"]
			},
			"Ц": {
				"selected": "Ա",
				"options": [ "Ա", "Ų"]
			},
			"Ч": {
				"selected": "Կ",
				"options": [ "Կ", "੫", "Ⴁ", "Ӵ", "Ҹ"]
			},
			"Ш": {
				"selected": "ᗯ",
				"options": [ "ᗯ", "ᙡ", "Ω"]
			},
			"Щ": {
				"selected": "Պ",
				"options": [ "Պ", "ખ"]
			},
			"Ъ": {
				"selected": "Ѣ",
				"options": [ "Ѣ", "৮"]
			},
			"Ы": {
				"selected": "Ӹ",
				"options": [ "Ӹ"]
			},
			"Ь": {
				"selected": "Ѣ",
				"options": [ "Ѣ", "৮"]
			},
			"Э": {
				"selected": "∋",
				"options": [ "∋", "∌", "∍", "ヨ", "Ӭ", "℈"]
			},
			"Ю": {
				"selected": "ਠ",
				"options": [ "ਠ"]
			},
			"Я": {
				"selected": "Я",
				"options": [ "Я"]
			},
			"A": {
				"selected": "Ꭿ",
				"options": [ "Ꭿ", "∀", "₳", "Ǻ", "Α", "Ά", "Ǡ", "Ắ", "Ằ", "Ẳ", "Ẵ", "Ä", "ª", "Å", "À", "Á", "Â", "Ã", "ᗩ", "@", "Ⱥ", "Ǟ"]
			},
			"B": {
				"selected": "ℬ",
				"options": [ "ℬ", "Ᏸ", "Β", "฿", "Ђ", "ᗷ", "ᗽ", "ᗾ", "ᗿ", "Ɓ", "Ƀ", "ხ", "␢", "ᗸ", "ᗹ", "ᛔ"]
			},
			"C": {
				"selected": "☾",
				"options": [ "☾", "ℭ", "ℂ", "Ç", "¢", "Č", "Ċ", "Ĉ", "Σ", "Ć", "Ḉ", "⊂", "Ꮸ", "₡", "Ⴚ"]
			},
			"D": {
				"selected": "ᗫ",
				"options": [ "ᗫ", "Ɗ", "Ď", "Đ", "Ð", "∂", "₫", "ȡ", "ᚦ", "ᚧ"]
			},
			"E": {
				"selected": "ℰ",
				"options": [ "ℰ", "ℯ", "ໂ", "६", "£", "Ē", "℮", "Ė", "Ę", "Ě", "Έ", "Ê", "Ξ", "È", "€", "É", "∑", "Ế", "Ề", "Ể", "Ễ", "Є", "Ε", "Ҿ"]
			},
			"F": {
				"selected": "ℱ",
				"options": [ "ℱ", "₣", "Ƒ", "∮", "Ḟ", "ჶ", "ᶂ", "Φ", "ᚨ", "ᚩ", "ᚪ", "ᚫ"]
			},
			"G": {
				"selected": "Ꮹ",
				"options": [ "Ꮹ", "Ꮆ", "ℊ", "Ǥ", "Ĝ", "Ğ", "Ġ", "Ģ", "פ", "ᶃ", "₲"]
			},
			"H": {
				"selected": "ℍ",
				"options": [ "ℍ", "ℋ", "ℎ", "ℌ", "ℏ", "ዙ", "Ꮵ", "Ĥ", "Ħ", "Ή", "廾", "Ћ", "Ђ", "Ḩ", "Һ", "♄", "ਮ"]
			},
			"I": {
				"selected": "ℐ",
				"options": [ "ℐ", "Ί", "Ι", "Ï", "Î", "Ì", "Í", "Ϊ", "Ϊ́", "Ĩ", "Ī", "Ĭ", "İ", "Į", "Ꭵ"]
			},
			"J": {
				"selected": "ჟ",
				"options": [ "ჟ", "Ĵ", "ᶖ", "Ɉ", "ℑ"]
			},
			"K": {
				"selected": "₭",
				"options": [ "₭", "Ꮶ", "Ќ", "K", "Ķ", "Ҝ", "ᶄ", "Ҡ"]
			},
			"L": {
				"selected": "ℒ",
				"options": [ "ℒ", "ℓ", "Ŀ", "Ĺ", "Ļ", "Λ", "₤", "Ł", "Ľ", "Ḽ", "ȴ", "Ꮭ"]
			},
			"M": {
				"selected": "ℳ",
				"options": [ "ℳ", "ʍ", "ᶆ", "Ḿ", "♍", "ᗰ", "ᙢ", "爪", "♏", "₥", "ጠ", "ᛖ"]
			},
			"N": {
				"selected": "ℕ",
				"options": [ "ℕ", "Η", "Ñ", "ח", "Ή", "Ŋ", "Ń", "Ņ", "Ň", "ʼN", "ȵ", "ℵ", "₦", "ห", "ກ", "⋒", "Ӈ"]
			},
			"O": {
				"selected": "ℴ",
				"options": [ "ℴ", "ტ", "٥", "Ό", "Ó", "Σ", "Ǿ", "Θ", "Ò", "Ô", "Ö", "Õ", "Ờ", "Ớ", "Ọ", "Ợ", "Ø", "Ở", "Ổ", "Ō", "Ő"]
			},
			"P": {
				"selected": "ℙ",
				"options": [ "ℙ", "℘", "Ρ", "Ꭾ", "Ꮅ", "尸", "Ҏ", "ᶈ", "₱", "☧", "ᖘ", "ק", "₽", "Թ", "Ƿ"]
			},
			"Q": {
				"selected": "ℚ",
				"options": [ "ℚ", "Q", "ᶐ", "Ǭ", "ჹ", "૧"]
			},
			"R": {
				"selected": "ℝ",
				"options": [ "ℝ", "ℜ", "ℛ", "℟", "ჩ", "ᖇ", "Ř", "Ŗ", "Ŕ", "ᶉ", "Ꮢ", "尺", "ᚱ"]
			},
			"S": {
				"selected": "Ꮥ",
				"options": [ "Ꮥ", "Ṧ", "Ȿ", "§", "Ś", "Š", "Ş", "Ŝ", "₰", "∫", "$", "Ֆ", "Տ", "క"]
			},
			"T": {
				"selected": "₸",
				"options": [ "₸", "†", "T", "Τ", "Ţ", "Ť", "Ŧ", "干", "Ṫ", "ナ", "Ꮏ", "Ꮖ", "テ", "₮", "⍡"]
			},
			"U": {
				"selected": "∪",
				"options": [ "∪", "ᙀ", "Ũ", "Ủ", "Ừ", "Ử", "Ữ", "Ự", "Ύ", "Ϋ", "Ù", "Ú", "Ϋ́", "Û", "Ü", "Ū", "Ŭ", "Ų", "Ű", "Ů", "น", "Ա"]
			},
			"V": {
				"selected": "✔",
				"options": [ "✔", "✓", "∨", "√", "Ꮙ", "Ṽ", "ᶌ", "℣"]
			},
			"W": {
				"selected": "₩",
				"options": [ "₩", "Ẃ", "Ẁ", "Ẅ", "Ώ", "Ω", "Ŵ", "Ꮤ", "Ꮃ", "ฬ", "ᗯ", "ᙡ", "Ѡ", "ಎ", "ಭ", "Ꮚ", "Ꮗ", "ผ", "ฝ", "พ", "ฟ"]
			},
			"X": {
				"selected": "ჯ",
				"options": [ "Χ", "×", "✗", "✘", "᙭", "ჯ", "Ẍ", "ᶍ"]
			},
			"Y": {
				"selected": "Ɣ",
				"options": [ "Ɣ", "Ꭹ", "Ꮍ", "Ẏ", "ϒ", "ɤ", "￥", "௶", "Ⴘ"]
			},
			"Z": {
				"selected": "ℤ",
				"options": [ "ℤ", "乙", "Ẑ", "Ɀ", "Ꮓ"]
			},
			"а": {
				"selected": "ắ",
				"options": [ "Ꭿ", "₳", "ǻ", "α", "ά", "ǡ", "ẫ", "ắ", "ằ", "ẳ", "ẵ", "ä", "ª", "å", "à", "á", "â", "ã", "ᗩ", "@", "ⱥ", "ǟ"]
			},
			"б": {
				"selected": "ҕ",
				"options": [ "ҕ", "ϭ", "চ", "ঢ়", "ƃ", "ɓ"]
			},
			"в": {
				"selected": "ℬ",
				"options": [ "ℬ", "Ᏸ", "β", "฿", "ß", "ᗷ", "ᗽ", "ᗾ", "ᗿ", "ɓ", "ᗸ", "ᗹ", "ᛔ"]
			},
			"г": {
				"selected": "୮",
				"options": [ "୮", "┍", "ℾ"]
			},
			"д": {
				"selected": "ℊ",
				"options": [ "ℊ", "∂"]
			},
			"е": {
				"selected": "ℰ",
				"options": [ "ℰ", "ℯ", "ໂ", "६", "ē", "℮", "ė", "ę", "ě", "έ", "ê", "è", "€", "é", "ế", "ề", "ể", "ễ", "є", "ε", "ҿ"]
			},
			"ж": {
				"selected": "ᛤ",
				"options": [ "ᛤ", "♅", "җ", "ӝ", "ӂ"]
			},
			"з": {
				"selected": "յ",
				"options": [ "յ", "ℨ", "ჳ"]
			},
			"и": {
				"selected": "น",
				"options": [ "น", "ự", "ӥ"]
			},
			"й": {
				"selected": "ũ",
				"options": [ "ũ", "ū", "ŭ", "ù", "ú", "ҋ"]
			},
			"к": {
				"selected": "ᛕ",
				"options": [ "ᛕ", "₭", "Ꮶ", "ќ", "k", "ķ", "ҝ", "ᶄ", "ҡ"]
			},
			"л": {
				"selected": "ለ",
				"options": [ "ለ", "ሉ", "ሊ", "ሌ", "ል", "ሎ", "Ꮧ", "Ꮑ"]
			},
			"м": {
				"selected": "ጠ",
				"options": [ "ጠ", "ᛖ", "ℳ", "ʍ", "ᶆ", "ḿ", "♍", "ᗰ", "ᙢ", "爪", "♏", "₥"]
			},
			"н": {
				"selected": "ਮ",
				"options": [ "ਮ", "ዘ", "ዙ", "ዚ", "ዛ", "ዜ", "ዝ", "ዞ", "ዟ", "ℍ", "ℋ", "ℎ", "ℌ", "ℏ", "Ꮵ", "ĥ", "ħ", "ή", "ḩ", "ӈ"]
			},
			"о": {
				"selected": "০",
				"options": [ "০", "ℴ", "ტ", "٥", "ό", "ó", "σ", "ǿ", "θ", "ò", "ô", "ö", "õ", "ờ", "ớ", "ọ", "ợ", "ø", "ở", "ổ", "ō", "ő", "ӫ"]
			},
			"п": {
				"selected": "ո",
				"options": [ "ո", "ग", "ກ", "⋒", "ҧ"]
			},
			"р": {
				"selected": "թ",
				"options": [ "թ", "ℙ", "℘", "ρ", "Ꭾ", "Ꮅ", "尸", "ҏ", "ᶈ", "₱", "☧", "ᖘ", "ק", "₽", "ƿ"]
			},
			"с": {
				"selected": "ⴚ",
				"options": [ "ⴚ", "☾", "ℭ", "ℂ", "ç", "¢", "č", "ċ", "ĉ", "ς", "ć", "ḉ", "⊂", "Ꮸ", "₡"]
			},
			"т": {
				"selected": "⍑",
				"options": [ "⍑", "⍡", "t", "τ", "ţ", "ť", "ŧ", "ṫ", "₮"]
			},
			"у": {
				"selected": "ɣ",
				"options": [ "ɣ", "Ꭹ", "Ꮍ", "ẏ", "ϒ", "ɤ", "￥", "௶", "ⴘ"]
			},
			"ф": {
				"selected": "փ",
				"options": [ "փ", "ⴔ", "ቁ", "ቂ", "ቃ", "ቄ", "ቅ", "ቆ", "ቇ", "ቈ", "ᛄ"]
			},
			"х": {
				"selected": "χ",
				"options": [ "χ", "×", "✗", "✘", "᙭", "ჯ", "ẍ", "ᶍ"]
			},
			"ц": {
				"selected": "ա",
				"options": [ "ա", "ų"]
			},
			"ч": {
				"selected": "կ",
				"options": [ "կ", "੫", "ⴁ", "ӵ", "ҹ"]
			},
			"ш": {
				"selected": "ᗯ",
				"options": [ "ᗯ", "ᙡ", "ω"]
			},
			"щ": {
				"selected": "պ",
				"options": [ "պ", "ખ"]
			},
			"ъ": {
				"selected": "ѣ",
				"options": [ "ѣ", "৮"]
			},
			"ы": {
				"selected": "ӹ",
				"options": [ "ӹ"]
			},
			"ь": {
				"selected": "ѣ",
				"options": [ "ѣ", "৮"]
			},
			"э": {
				"selected": "∋",
				"options": [ "∋", "∌", "∍", "ヨ", "ӭ", "℈"]
			},
			"ю": {
				"selected": "ਠ",
				"options": [ "ਠ"]
			},
			"я": {
				"selected": "я",
				"options": [ "я"]
			},
			"a": {
				"selected": "Ꭿ",
				"options": [ "Ꭿ", "∀", "₳", "ǻ", "α", "ά", "ǡ", "ắ", "ằ", "ẳ", "ẵ", "ä", "ª", "å", "à", "á", "â", "ã", "ᗩ", "@", "ⱥ", "ǟ"]
			},
			"b": {
				"selected": "ℬ",
				"options": [ "ℬ", "Ᏸ", "β", "฿", "ß", "ђ", "ᗷ", "ᗽ", "ᗾ", "ᗿ", "ɓ", "ƀ", "ხ", "␢", "ᗸ", "ᗹ", "ᛔ"]
			},
			"c": {
				"selected": "☾",
				"options": [ "☾", "ℭ", "ℂ", "ç", "¢", "č", "ċ", "ĉ", "ς", "ć", "ḉ", "⊂", "Ꮸ", "₡", "ⴚ"]
			},
			"d": {
				"selected": "ᗫ",
				"options": [ "ᗫ", "ɗ", "ď", "đ", "ð", "∂", "₫", "ȡ", "ᚦ", "ᚧ"]
			},
			"e": {
				"selected": "ℰ",
				"options": [ "ℰ", "ℯ", "ໂ", "६", "£", "ē", "℮", "ė", "ę", "ě", "έ", "ê", "ξ", "è", "€", "é", "∑", "ế", "ề", "ể", "ễ", "є", "ε", "ҿ"]
			},
			"f": {
				"selected": "ℱ",
				"options": [ "ℱ", "₣", "ƒ", "∮", "ḟ", "ჶ", "ᶂ", "φ", "ᚨ", "ᚩ", "ᚪ", "ᚫ"]
			},
			"g": {
				"selected": "Ꮹ",
				"options": [ "Ꮹ", "Ꮆ", "ℊ", "ǥ", "ĝ", "ğ", "ġ", "ģ", "פ", "ᶃ", "₲"]
			},
			"h": {
				"selected": "ℍ",
				"options": [ "ℍ", "ℋ", "ℎ", "ℌ", "ℏ", "ዙ", "Ꮵ", "ĥ", "ħ", "ή", "廾", "ћ", "ђ", "ḩ", "һ", "♄", "ਮ"]
			},
			"i": {
				"selected": "ℐ",
				"options": [ "ℐ", "ί", "ι", "ï", "î", "ì", "í", "ϊ", "ΐ", "ĩ", "ī", "ĭ", "i̇", "į", "Ꭵ"]
			},
			"j": {
				"selected": "ჟ",
				"options": [ "ჟ", "ĵ", "ᶖ", "ɉ", "ℑ"]
			},
			"k": {
				"selected": "₭",
				"options": [ "₭", "Ꮶ", "ќ", "k", "ķ", "ҝ", "ᶄ", "ҡ"]
			},
			"l": {
				"selected": "ℒ",
				"options": [ "ℒ", "ℓ", "ŀ", "ĺ", "ļ", "λ", "₤", "ł", "ľ", "ḽ", "ȴ", "Ꮭ"]
			},
			"m": {
				"selected": "ℳ",
				"options": [ "ℳ", "ʍ", "ᶆ", "ḿ", "♍", "ᗰ", "ᙢ", "爪", "♏", "₥", "ጠ", "ᛖ"]
			},
			"n": {
				"selected": "ℕ",
				"options": [ "ℕ", "η", "ñ", "ח", "ή", "ŋ", "ń", "ņ", "ň", "ŉ", "ȵ", "ℵ", "₦", "ห", "ກ", "⋒", "ӈ"]
			},
			"o": {
				"selected": "ℴ",
				"options": [ "ℴ", "ტ", "٥", "ό", "ó", "σ", "ǿ", "θ", "ò", "ô", "ö", "õ", "ờ", "ớ", "ọ", "ợ", "ø", "ở", "ổ", "ō", "ő"]
			},
			"p": {
				"selected": "ℙ",
				"options": [ "ℙ", "℘", "ρ", "Ꭾ", "Ꮅ", "尸", "ҏ", "ᶈ", "₱", "☧", "ᖘ", "ק", "₽", "թ", "ƿ"]
			},
			"q": {
				"selected": "ℚ",
				"options": [ "ℚ", "q", "ᶐ", "ǭ", "ჹ", "૧"]
			},
			"r": {
				"selected": "ℝ",
				"options": [ "ℝ", "ℜ", "ℛ", "℟", "ჩ", "ᖇ", "ř", "ŗ", "ŕ", "ᶉ", "Ꮢ", "尺", "ᚱ"]
			},
			"s": {
				"selected": "Ꮥ",
				"options": [ "Ꮥ", "ṧ", "ȿ", "§", "ś", "š", "ş", "ŝ", "₰", "∫", "$", "ֆ", "տ", "క"]
			},
			"t": {
				"selected": "₸",
				"options": [ "₸", "†", "t", "τ", "ţ", "ť", "ŧ", "干", "ṫ", "ナ", "Ꮏ", "Ꮖ", "テ", "₮", "⍡"]
			},
			"u": {
				"selected": "∪",
				"options": [ "∪", "ᙀ", "ũ", "ủ", "ừ", "ử", "ữ", "ự", "ύ", "ϋ", "ù", "ú", "ΰ", "û", "ü", "ū", "ŭ", "ų", "ű", "ů", "น", "ա"]
			},
			"v": {
				"selected": "✔",
				"options": [ "✔", "✓", "∨", "√", "Ꮙ", "ṽ", "ᶌ", "℣"]
			},
			"w": {
				"selected": "₩",
				"options": [ "₩", "ẃ", "ẁ", "ẅ", "ώ", "ω", "ŵ", "Ꮤ", "Ꮃ", "ฬ", "ᗯ", "ᙡ", "ѡ", "ಎ", "ಭ", "Ꮚ", "Ꮗ", "ผ", "ฝ", "พ", "ฟ"]
			},
			"x": {
				"selected": "χ",
				"options": [ "χ", "×", "✗", "✘", "᙭", "ჯ", "ẍ", "ᶍ"]
			},
			"y": {
				"selected": "ɣ",
				"options": [ "ɣ", "Ꭹ", "Ꮍ", "ẏ", "ϒ", "ɤ", "￥", "௶", "ⴘ"]
			},
			"z": {
				"selected": "ℤ",
				"options": [ "ℤ", "乙", "ẑ", "ɀ", "Ꮓ"]
			}
		},
		version : 1,
	},
	watch : {
		input_text : function(){
			this.convert();
		},
		symbols : function(){
			this.convert();
		},
	},
	created : function(){
		this.convert();
		this.load();
	},
	updated : function(){
		this.convert();
		this.save();
	},
	methods : {
		convert : function() {
			let text = '';
			for (let i = 0, len = this.input_text.length; i < len; i++) {
				if (this.symbols[this.input_text[i]]) {
					text += this.symbols[this.input_text[i]].selected;
				} else {
					text += this.input_text[i];
				}
			}

			this.output_text = text;

		},
		save : function() {
			localStorage.setItem('jh_input_text', this.input_text);
			localStorage.setItem('jh_symbols', JSON.stringify(this.symbols));
		},
		load : function() {
			this.input_text = localStorage.getItem('jh_input_text');
			this.symbols = JSON.parse(localStorage.getItem('jh_symbols'));
		},
	},
});