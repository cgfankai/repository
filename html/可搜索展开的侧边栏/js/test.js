		$(document).ready(function () {
			$(".fold-menu > div").on('click', function () {
				var owner = $(this).parent();
				var menuUl = owner.children('ul')
				var div = owner.children('div')
				var arrow = div.children('.arrow');
				if (menuUl.hasClass('in')) {
					menuUl.removeClass('in')
					arrow.removeClass('fa-angle-down')
					arrow.addClass('fa-angle-right')
				} else {
					menuUl.addClass('in')
					arrow.removeClass('fa-angle-right')
					arrow.addClass('fa-angle-down')
				}
			})
		})