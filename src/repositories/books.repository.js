const BaseRepository = require("./base.repository");
const book = require("../models/book.models");
const { cloudinary } = require("../controllers/cloudinary");



class BookRepository extends BaseRepository {
  constructor() {
    super(book);
  }

  async getBooksByGenre(id) {
    let books = await this.mongooseCollection.find({
      genres: { $in: String(id) },
    });
    return books;
  }

  async create(body) {
    body.file = (await cloudinary.uploader.upload(body.file)).secure_url;
    let data = await this.mongooseCollection.create(body);
    return data;
  }

  async findAll(query) {
    if (query) {
      const regexQuery = new RegExp(query, "i");
      let data = await this.mongooseCollection
        .find({
          $or: [
            { title: { $regex: regexQuery } },
            { author: { $regex: regexQuery } },
          ],
        })
        .lean()
        .exec();
      return data;
    }

    let data = await this.mongooseCollection.find().lean().exec();
    return data;
  }
}

module.exports = BookRepository;
