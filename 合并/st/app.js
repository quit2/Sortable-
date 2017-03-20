(function () {
	'use strict';

	var byId = function (id) { return document.getElementById(id); },

		console = window.console;


	if (!console.log) {
		console.log = function () {
			alert([].join.apply(arguments, ' '));
		};
	}

	Sortable.create(byId('multi'), {
		animation: 150,
		draggable: '.tile',
		handle: '.tile__name',
	});

	[].forEach.call(byId('multi').getElementsByClassName('edit'), function (el){
		Sortable.create(el, {
			group: 'directory',//去掉则每个列之间不能拖拽
			animation: 150,
			filter: '.js-remove',
			onFilter: function (evt) {
				evt.item.parentNode.removeChild(evt.item);
			}
		});
	});

		
})();
