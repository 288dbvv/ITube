// Событие правой группы тега nav
function navRightItemEvent(item_name)
{
	// Первичные настройки
	var items; var item; var btn;
	var item_names = ['account', 'lang'];
	var response = ['', 'nav-items-right'];
	// Текущий элемент
	var citem = document.querySelector('#' + item_name);
	var cbtn = document.querySelector('#' + item_name + '-btn');
	// Переключение css стилей, кроме текущего элемента
	for (var i in item_names) 
	{
		if (item_names[i] == item_name) continue;
		item = document.querySelector('#' + item_names[i]);
		btn = document.querySelector('#' + item_names[i] + '-btn');
		btn.className = response[1];
		item.style.display = response[0];
	}
	// Проверка текущего элемента
	if (citem.style.display == response[0])
	{
		response[0] = 'block';
		response[1] += "-click";
	}
	// Переключение css стилей текущего элемента
	cbtn.className = response[1];
	citem.style.display = response[0];
}
