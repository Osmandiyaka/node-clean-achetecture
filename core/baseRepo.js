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

  function insert(entity) {
    var db = new Schema(entity);
    return db.save();
  }

  async function deleteById(id) {
    const entityToDelete = await findById(id);
    if (entityToDelete === undefined)
      throw new Error('Could not find entity with id' + id);
    entityToDelete.isDeleted = true;
    return updateById(id, entityToDelete);
  }

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