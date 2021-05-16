function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});
"use strict"

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}

} else {
	document.body.classList.add('_pc');
}

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}


// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}



$('#slider').on('init reInit', function (event, slick) {
	let amount = slick.slideCount;
	$('#range').attr('max', amount);
})

$('#slider').on('afterChange', function (e, slick, currentSlide) {
	$('#range').val(currentSlide + 1);
})

$('#range').on('input change', function () {
	$('#slider').slick('slickGoTo', this.value - 1);
});

$('#slider').slick({
	slidesToShow: 2,
	arrows: false,
	centerMode: true,
	infinite: true,
	dots: false,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 756,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
	]
})






// ======Price value start=========
$("body")
	.off("change", '#money_value, #lvl_value')
	.on("change", '#money_value, #lvl_value', function (event, data, value) {
		console.log(money_value.value);

		switch (money_value.value) {
			case "Чебурашка":
				switch (lvl_value.value) {
					case "Чебурашка":
						$('#price').text("10$")
						break;

					case "Крокодил Гена":
						$('#price').text("20$")
						break;

					case "Шапокляк":
						$('#price').text("30$")
						break;


					case "Крыса Лариса":
						$('#price').text("40$")
						break;

					default:
						break;
				}

				break;

			case "Крокодил Гена":
				switch (lvl_value.value) {
					case "Чебурашка":
						$('#price').text("50$")
						break;

					case "Крокодил Гена":
						$('#price').text("60$")
						break;

					case "Шапокляк":
						$('#price').text("70$")
						break;


					case "Крыса Лариса":
						$('#price').text("80$")
						break;

					default:
						break;
				}

				break;

			case "Шапокляк":
				switch (lvl_value.value) {
					case "Чебурашка":
						$('#price').text("90$")
						break;

					case "Крокодил Гена":
						$('#price').text("100$")
						break;

					case "Шапокляк":
						$('#price').text("110$")
						break;


					case "Крыса Лариса":
						$('#price').text("120$")
						break;

					default:
						break;
				}

				break;


			case "Крыса Лариса":
				switch (lvl_value.value) {
					case "Чебурашка":
						$('#price').text("130$")
						break;

					case "Крокодил Гена":
						$('#price').text("140$")
						break;

					case "Шапокляк":
						$('#price').text("150$")
						break;


					case "Крыса Лариса":
						$('#price').text("160$")
						break;

					default:
						break;
				}

				break;

			default:
				$('#price').text("10$")
				break;
		}
	});

// ======Price value end=========
