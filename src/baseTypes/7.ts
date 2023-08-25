/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum daysOfWeek {
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday,
}

function isWeekend(dayOfWeek: daysOfWeek): boolean {
	if ((dayOfWeek = 6 || 5)) return true;
	return false;
}
