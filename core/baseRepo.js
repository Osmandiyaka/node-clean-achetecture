function BaseRepository(Schema) {
  if (!Schema) {
    throw new Error();
  }

  this.Schema=Schema;
}

BaseRepository.prototype.insert=function (entity) {
  var db = new Schema(entity);
  return db.save();
}

BaseRepository.prototype.deleteById=function (id) {
  const entityToDelete = await this.findById(id);
  if (entityToDelete === undefined)
    throw new Error('Could not find entity with id' + id);
  entityToDelete.isDeleted = true;
  return updateById(id, entityToDelete);
}

BaseRepository.prototype.findById=function (id) {
  return this.Schema.findById(id);
}

BaseRepository.prototype.find=function () {
  
}
function baseRepoBuilder({Schema}) {
  if (!Schema) {
    throw new Error();
  }

  return {
    insert,
    deleteById,
    findById,
    find,
    findOne,
    hardDelete,
    updateById,
    count
  };

  

  function hardDelete(id) {
    return Schema.findByIdAndDelete(id);
  }

  function findById(id) {
    return Schema.findById(id);
  }

  function find(options) {
    const where = options.where || {};
    const sort = options.sort || {};
    const select = options.select || [];
    const limit = options.limit || 15;

    return Schema.where(where)
      .sort(sort)
      .select(...select)
      .limit(limit);
  }

  function findOne(where) {
    return Schema.findOne(where);
  }

  
  function updateById(id, entity) {
    delete account._id;
    return Schema.findByIdAndUpdate(id, entity, {
      new: true,
      upsert: true
    });
  }

  function count(where = {}) {
    return Schema.countDocuments(where);
  }

}

module.exports = baseRepoBuilder;