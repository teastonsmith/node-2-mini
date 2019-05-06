let books = [];

let id = 0;

module.exports = {
	read(req, res) {
		res.send(books);
	},
	create(req, res) {
		let { title, author } = req.body;
		books.push({
			id,
			title,
			author,
		});
		id++;
		res.send(books);
	},
	update(req, res) {
		let { id } = req.params;
		let { title, author } = req.body;
		let index = books.findIndex(book => book.id === parseInt(id));
		if (index !== -1) {
			books[index] = {
				id: books[index].id,
				title: title ? title : books[index].title,
				author: author ? author : author[index].author,
			};
        }
        res.send(books)
	},
	delete(req, res) {
		let { id } = req.params;
		let index = books.findIndex(book => book.id === parseInt(id));
		if (index !== -1) books.splice(index, 1);
		res.send(books);
	},
};
