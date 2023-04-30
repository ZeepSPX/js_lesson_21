// Задача 1. Дано 10 рядків тексту «Hello!» у окремих div. При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір. -----------------------------

const hellos = document.querySelectorAll('.head__hello')


for (let i = 0; i < hellos.length; i++) {
	hellos[i].addEventListener('click', function() {
		for (let j = i+1; j < hellos.length; j++) {
			hellos[j].style.color = 'red'
		}
	})
}
















