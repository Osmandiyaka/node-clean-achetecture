function baseRepoBuilder(Schema) {
  if (!Schema) {
    throw new Error();
  }

  function create(account) {
    var db = new Schema(account);
    return db.save();
  }

  function deleteById(id) {
    return Schema.findByIdAndDelete(id);
  }

  function findById(id) {
    return Schema.findById(id);
  }

  function find(options) {
    var where = options.where || {};
    var sort = options.sort || {};
    var select = options.select || [];
    const limit = options.limit || 15;

    return Schema.where(where)
      .sort(sort)
      .select(...select)
      .limit(limit);
  }

  function findOne(where) {
    return Schema.findOne(where);
  }

  function deleteRecords(where) {
    return Schema.deleteMany(where);
  }

  function updateById(id, account) {
    delete account._id;
    return Schema.findByIdAndUpdate(id, account, {
      new: true,
      upsert: true
    });
  }

  function count(where = {}) {
    return Schema.countDocuments(where);
  }
  return {
    create,
    deleteById,
    findById,
    find,
    findOne,
    deleteRecords,
    updateById,
    count
  };
}

module.exports = baseRepoBuilder;
