//==================================================================
"use strict";
const newspaper = {
	title: "Ny Post - Murzilka",
	articles: ["Main news", "Article not main", "test1234", "give more money"],
	showArticles() {
		this.articles.forEach((article, index) => {
			//console.log(`${article}`);
			console.log(`Newspaper ${this.title} Article №${index + 1} : ${article}`);
		});
	},
};

newspaper.showArticles();