const { Book } = require('../model/bookModel');

const sendBookApi = async (req, res) => {
    try {
        const BookData = new Book({
            author: req.body.author,
            title: req.body.title,
            fileName: req.file.originalname,
            fileType: req.file.mimetype,
            filePath: req.file.path,
            fileSize: req.file.size
        })
        await BookData.save();
        console.log(BookData);
        res.status(201).json({ message: "book saved successfully!" });
    } catch (error) {
        console.log(error.message, "send book api error!");
    }
}

const getBookApi = async (req, res) => {
    await Book.find({}).then((data) => res.json(data)).catch(err => console.log(err.message, "get Book api error!"))
}


module.exports = {
    sendBookApi,
    getBookApi
}