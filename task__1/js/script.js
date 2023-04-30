// Задача 2. Дано 5 елементів input. При введенні значення у якийсь із них необхідно автоматично заповнювати інші (усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний), усі наступні на 1 більше (кожен наступне на 1 більше за попереднього) ----------------------------------------

const inputs = document.querySelectorAll('input[type="number"]')

inputs.forEach((input, index ) => {
	input.addEventListener('input', () => {
		const value = parseInt(input.value)
		if (isNaN(value)) {
			for (let i = index + 1; i < inputs.length; i++) {
				inputs[i].value = ''
			}
		}else {
			for (let i = index + 1; i < inputs.length; i++) {
				inputs[i].value = value - (i - index)
			}
		}
	})
})