import { marked } from "marked";


$(document).ready(function () {
var currentPage = 0;
var pagesCount = 0;
var currentFile = "";

function loadFile(file) {
currentPage = 0;
pagesCount = 0;
currentFile = file;

$.get(file, function (data) {
	var content = data;
	var convertedContent = marked(content);

	var lines = convertedContent.split("\n");
	var pageContent = "";

	$("#body-text").empty(); // Очистка содержимого body-text перед загрузкой нового файла

	for (var i = 0; i < lines.length; i++) {
		var line = lines[i];

		if (pageContent.length + line.length > 2100) {
			$("#body-text").append('<div id="page' + pagesCount + '" class="page">' + pageContent + "</div>");
			pagesCount++;
			pageContent = "";
		}

		pageContent += line + "\n";
	}

	if (pageContent.length > 0) {
		$("#body-text").append('<div id="page' + pagesCount + '" class="page">' + pageContent + "</div>");
		pagesCount++;
	}

	showPage(currentPage);
	updateButtons();
});
}


function showPage(page) {
$("#body-text").find(".page").hide();
$("#page" + page).show();
$("#current-page").html("Страница " + (page + 1) + " из " + pagesCount);
currentPage = page;
}

function nextPage() {
if (currentPage < pagesCount - 1) {
showPage(currentPage + 1);
updateButtons();
}
}

function prevPage() {
if (currentPage > 0) {
showPage(currentPage - 1);
updateButtons();
}
}

function updateButtons() {
if (currentPage == 0) {
$("#prev-page").attr("disabled", true);
} else {
$("#prev-page").attr("disabled", false);
}

if (currentPage == pagesCount - 1) {
	$("#next-page").attr("disabled", true);
} else {
	$("#next-page").attr("disabled", false);
}
}

$(".menu__wrapper-item").click(function () {
var file = $(this).data("file");
loadFile(file);
});

$("#next-page").click(function () {
nextPage();
});

$("#prev-page").click(function () {
prevPage();
});
});

