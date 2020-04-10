function BaseRepository(Schema) {
  if (!Schema) {
    throw new Error();
  }

  this.Schema = Schema;
}

BaseRepository.prototype.insert = function (entity) {
  var db = new this.Schema(entity);
  return db.save();
}

BaseRepository.prototype.deleteById = function (id) {
  const entityToDelete = await this.findById(id);
  if (entityToDelete === undefined)
    throw new Error('Could not find entity with id' + id);
  entityToDelete.isDeleted = true;
  return updateById(id, entityToDelete);
}

BaseRepository.prototype.findById = function (id) {
  return this.Schema.findById(id);
}

BaseRepository.prototype.find = function (options) {
  const where = options.where || {};
  const sort = options.sort || {};
  const select = options.select || [];
  const limit = options.limit || 15;

  return this.Schema.where(where)
    .sort(sort)
    .select(...select)
    .limit(limit);
}


BaseRepository.prototype.findOne = function (query) {
  return this.Schema.findOne(query);
}


BaseRepository.prototype.updateById = function (id, entity) {
  delete entity._id;
  return this.Schema.findByIdAndUpdate(id, entity, {
    new: true,
    upsert: true
  });
}

BaseRepository.prototype.count = function (where = {}) {
  return this.Schema.countDocuments(where);
}



module.exports = BaseRepository;