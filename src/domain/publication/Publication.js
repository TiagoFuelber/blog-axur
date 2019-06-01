import slugify from '../../services/slugify';

export class Publication {
  constructor({ title, body, metadata }) {
    this._id = slugify(title);
    this._title = title;
    this._body = body;
    this._metadata = { ...metadata, publishedAt: new Date(metadata.publishedAt) };
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get body() {
    return this._body;
  }

  get authorId() {
    return this._metadata.authorId;
  }

  get metadata() {
    return this._metadata;
  }

  get date() {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Nov',
      'Dec'
    ];

    return `${
      monthNames[this._metadata.publishedAt.getMonth()]
    } ${this._metadata.publishedAt.getDate()}, ${this._metadata.publishedAt.getFullYear()}`;
  }
}
