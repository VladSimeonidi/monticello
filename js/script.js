$(document).ready(function() {
	$(".slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
	});
});
function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 40.682041, lng: -73.900788 },
		zoom: 14,
		styles: [
			{
				elementType: "geometry",
				stylers: [
					{
						color: "#f5f5f5"
					}
				]
			},
			{
				elementType: "labels.icon",
				stylers: [
					{
						visibility: "off"
					}
				]
			},
			{
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#616161"
					}
				]
			},
			{
				elementType: "labels.text.stroke",
				stylers: [
					{
						color: "#f5f5f5"
					}
				]
			},
			{
				featureType: "administrative.land_parcel",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#bdbdbd"
					}
				]
			},
			{
				featureType: "poi",
				elementType: "geometry",
				stylers: [
					{
						color: "#eeeeee"
					}
				]
			},
			{
				featureType: "poi",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#757575"
					}
				]
			},
			{
				featureType: "poi.park",
				elementType: "geometry",
				stylers: [
					{
						color: "#e5e5e5"
					}
				]
			},
			{
				featureType: "poi.park",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#9e9e9e"
					}
				]
			},
			{
				featureType: "road",
				elementType: "geometry",
				stylers: [
					{
						color: "#ffffff"
					}
				]
			},
			{
				featureType: "road.arterial",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#757575"
					}
				]
			},
			{
				featureType: "road.highway",
				elementType: "geometry",
				stylers: [
					{
						color: "#dadada"
					}
				]
			},
			{
				featureType: "road.highway",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#616161"
					}
				]
			},
			{
				featureType: "road.local",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#9e9e9e"
					}
				]
			},
			{
				featureType: "transit.line",
				elementType: "geometry",
				stylers: [
					{
						color: "#e5e5e5"
					}
				]
			},
			{
				featureType: "transit.station",
				elementType: "geometry",
				stylers: [
					{
						color: "#eeeeee"
					}
				]
			},
			{
				featureType: "water",
				elementType: "geometry",
				stylers: [
					{
						color: "#c9c9c9"
					}
				]
			},
			{
				featureType: "water",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#9e9e9e"
					}
				]
			}
		]
	});
	var image = "../images/ellipse.png";
	var marker = new google.maps.Marker({
		position: { lat: 40.682041, lng: -73.900788 },
		map: map,
		icon: image
	});
}

/*const anchors = document.querySelectorAll(".scroll-link");
for (let anchor of anchors) {
	anchor.addEventListener("click", (e) => {
		e.preventDefault();
		const blockID = anchor.getAttribute("href");

		document.querySelector(blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	});
}*/


const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 500,
      framesCount = 50;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});


window.addEventListener("scroll", () => {
	let links = document.querySelectorAll(".list__link");
	let blocks = document.querySelectorAll(".scroll--block");
	let block1top = blocks[0].getBoundingClientRect().top; 
	let block2top = blocks[1].getBoundingClientRect().top;
	let block3top = blocks[2].getBoundingClientRect().top;
	let block4top = blocks[3].getBoundingClientRect().top;
	let block5top = blocks[4].getBoundingClientRect().top;
	let block1bottom = blocks[0].getBoundingClientRect().bottom; 
	let block2bottom = blocks[1].getBoundingClientRect().bottom;
	let block3bottom = blocks[2].getBoundingClientRect().bottom;
	let block4bottom = blocks[3].getBoundingClientRect().bottom;
	let block5bottom = blocks[4].getBoundingClientRect().bottom;
console.log(block3top);
	//console.log(`blockTop: ${blockTop}`);
	//console.log(`blockBottom:  ${blockBottom}`);
	if (block1top <= 0 && block1bottom > 0) {
		links[0].classList.add("active");
	} else {
		links[0].classList.remove("active");
	}
	if (block2top <= 0 && block2bottom > 0 || block4top <= 0 && block4bottom > 0) {
		links.forEach( function(elem) {
			elem.classList.add('active-border');
		});
		links[1].classList.add("active-black");
	} else {
		links.forEach( function(elem) {
			elem.classList.remove('active-border');
		});
		links[1].classList.remove("active-black");
	}
	if (block3top <= 0 && block3bottom > 0) {
		links[2].classList.add("active");
	} else {
		links[2].classList.remove("active");
	}
	if (block4top <= 0 && block4bottom > 0) {
		links[3].classList.add("active-black");
		links[1].classList.remove("active-black");
	} else {
		links[3].classList.remove("active-black");
	}
	if (block5top <= 0 && block5bottom > 0) {
		links[4].classList.add("active");
	} else {
		links[4].classList.remove("active");
	}
});

