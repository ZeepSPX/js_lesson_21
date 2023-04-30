// Задача 3. Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами (кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100). При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний. ---------------------------------------------------------------------------------

class NumberList {
	constructor(items) {
		this.items = items
		this.element = document.createElement('ol')
		for (let i = 0; i < this.items.length; i++) {
			const item = document.createElement('li')
			item.textContent = this.items[i]
			this.element.append(item)
		}
	}

	isEven() {
		return this.items.length % 2 ===0
	}
}


function renderList(lists) {
	const container = document.querySelector('#lists-container')
	container.innerHTML = ""
	for (let i = 0; i < lists.length; i++) {
		container.append(lists[i].element)
	}
}

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const lists = []
for (let i = 0; i < 5; i++) {
	const numItems = getRandomNumber(1, 10)
	const items = []
	for (let j = 0; j < numItems; j++) {
		items.push(getRandomNumber(1, 100))
	}
	const list = new NumberList(items)
	lists.push(list)
}

renderList(lists)

const button = document.querySelector('#color-button')
button.addEventListener('click', () => {
	for (let i = 0; i < lists.length; i++) {
		const list = lists[i];
		if (list.isEven()) {
			list.element.style.color = 'green'
		}else {
			list.element.style.color = 'red'
		}
	}
})


