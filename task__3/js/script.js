// Задача 4.Дано 3 таблиці розмірності 3*3 з випадковими числами. Якщо відбувається клік на якійсь із клітинок, то до відповідної таблиці додається червона рамка (спробуйте додати можливість відображення кількості кліків біля назви таблиці з використанням відповідно доданого для цього атрибута). ---------------------------------------------------------------------------------

class Table{
	constructor(data) {
		this.data = data
		this.clicks = 0
		this.table = this.renderTable()
	}

	renderTable() {
		const table = document.createElement('table')

		for (let i = 0; i < 3; i++) {
			const row = document.createElement('tr')
			for (let j = 0; j < 3; j++) {
				const cell = document.createElement('td')
				cell.textContent = this.data[i][j]
				row.append(cell)

				//додає кількість кліків як атрибут в HTML розмітку
				cell.addEventListener('click', () => {
					this.clicks++
					this.table.classList.add('selected')
					this.table.setAttribute('data-clicks', `(${this.clicks} clicks)`)
				})
			}
			table.append(row)
		}

		return table
	}
}

const data1 = [
	[Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
	[Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
	[Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
];
const table1 = new Table(data1);

const data2 = [
	[Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
	[Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
	[Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
];
const table2 = new Table(data2);

const data3 = [
	[Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
	[Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
	[Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
];
const table3 = new Table(data3);

const container = document.getElementById('container')
container.append(table1.table)
container.append(table2.table)
container.append(table3.table)
