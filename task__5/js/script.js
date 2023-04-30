// Задача 6.Динамічний пошук. Є список працівників і поле пошуку. При введенні відображаються усі, які містять вказаний фрагмент ---------------------------------------------------------------------------------

// Масив об'єктів з працівниками
const employees = [
	{ id: 1, firstName: 'Іван', lastName: 'Петров', position: 'Менеджер', salary: 5000 },
	{ id: 2, firstName: 'Марія', lastName: 'Сидоренко', position: 'Асистент', salary: 2500 },
	{ id: 3, firstName: 'Петро', lastName: 'Коваленко', position: 'Розробник', salary: 7000 },
	{ id: 4, firstName: 'Оксана', lastName: 'Іванова', position: 'Тестувальник', salary: 4000 },
	{ id: 5, firstName: 'Сергій', lastName: 'Морозов', position: 'Аналітик', salary: 6000 }
];

  // Функція для відображення списку працівників
function renderEmployeeList(employees) {
	const listElement = document.getElementById('employee-list')
	listElement.innerHTML = ''

	employees.forEach(function(employee) {
		const li = document.createElement('li')
		li.innerHTML = `${employee.firstName} ${employee.lastName} (${employee.position}, ${employee.salary}$)`
		listElement.appendChild(li)
	})
}

// Функція для пошуку
function searchEmployees(query) {
	const filteredEmployees = employees.filter(function(employee) {
	const fullName = `${employee.firstName} ${employee.lastName}`
	return fullName.toLowerCase().includes(query.toLowerCase())
	})
	renderEmployeeList(filteredEmployees)
}
	
// Відображення списку працівників при завантаженні сторінки
	renderEmployeeList(employees)
	
// Отримання поля вводу та додавання обробника події для пошуку
const searchInput = document.getElementById('search-input')
	searchInput.addEventListener('input', function() {
	searchEmployees(this.value)
})