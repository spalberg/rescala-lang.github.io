//var slideIndex = 1;
//var slideTimer;
//function nextSlide() {
//	slideIndex += 1;
//	updateSlide();
//}
//function showSlide(n) {
//	slideIndex = n;
//	updateSlide();
//}
//function updateSlide() {
//	var imgs = queryAll("#slideshow img");
//	var indicators = queryAll("#slideshow-indicator span");
//	if (slideIndex > imgs.length)
//		slideIndex = 1;
//	if (slideIndex < 1)
//		slideIndex = imgs.length;
//	imgs.forEach(function(e) {
//		e.style.display = "";
//	});
//	indicators.forEach(function(e) {
//		e.classList.remove("current");
//	});
//	indicators[slideIndex-1].classList.add("current");
//	imgs[slideIndex-1].style.display = "block";
//}
//function reStartSlideTimer() {
//	if (slideTimer)
//		clearInterval(slideTimer);
//	slideTimer = setInterval(nextSlide, 6000);
//}

function elem(tag, elems, attrs) {
	var parent = document.createElement(tag);
	if (attrs) Object.entries(attrs).forEach(kv => parent[kv[0]] = kv[1]);
	if (elems) elems.forEach(x => parent.appendChild(x));
	return parent;
}
function queryAll(s) {
	return Array.prototype.slice.call(document.querySelectorAll(s));
}
function query(s) {
	return document.querySelector(s);
}

// wait for html to finish loading, as we need document.body
window.onload = function () {

	var toc = query("#toc");
	if (toc) {
		var currentList = toc;
		var currentDepth = 1;

		var numbering = [0,0,0,0,0];
		var headlines = queryAll("#main-content>h1, #main-content>h2, #main-content>h3, #main-content>h4");
		headlines.forEach((headline,i) => {
			var depth = parseInt(headline.nodeName[1]); // 1, 2, 3, 4
			++numbering[depth];
			numbering.forEach((_,i) => i > depth ? numbering[i]=0 : 0)
			var chapter = numbering.slice(1,depth+1).join(".") +". ";
			headline.textContent = chapter + headline.textContent;

			for (; currentDepth < depth; currentDepth++)
				currentList = currentList.lastChild.lastChild;
			for (; currentDepth > depth; currentDepth--)
				currentList = currentList.parentNode.parentNode;

			var link = elem("a", [], {textContent: headline.textContent, href: "#" + headline.id});
			var div = elem("div", [link]);
			var hasSubsections = headlines[i+1] && parseInt(headlines[i+1].nodeName[1]) > depth;
			if (!hasSubsections)
				currentList.appendChild(div);
			else
				currentList.appendChild(
				  elem("details", [elem("summary", [div]),
				                   elem("div")],
				       {open:true}));
		});
	}

//	var imgs = queryAll("#slideshow img");
//	if (imgs.length > 0) {
//		var indicator = query("#slideshow-indicator");
//		imgs.forEach(function(img, i) {
//			var span = document.createElement("span");
//			span.onclick = function() {reStartSlideTimer(); showSlide(i+1)};
//			indicator.appendChild(span);
//		});
//		reStartSlideTimer();
//		updateSlide();
//	}
//	var container = document.createElement("div");
//	container.id = "info-box-container";
//	var infoBoxes = queryAll(".info-box");
//	if (infoBoxes.length > 0) {
//		infoBoxes[0].parentElement.insertBefore(container, infoBoxes[0]);
//		infoBoxes.forEach(function(box) {
//			var p = box.nextElementSibling;
//			var div = document.createElement("div");
//			box.classList.remove("info-box");
//			div.classList.add("info-box");
//			container.appendChild(div);
//			div.appendChild(box);
//			div.appendChild(p);
//		});
//		container.nextElementSibling.style = "clear: left;";
//	}
}

