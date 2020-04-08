function modelBuilder({modelValidator,appSession}) {
  return function buildModel(model) {
    const validationResult = modelValidator(model);
    if (validationResult.hasError)
      throw new Error(validationResult.errorMessage);

    return Object.freeze({
        ...model,
        creationTime:new Date(),
        creationUserId:appSession.userId,
        lastModifiedTime:new Date(),
        lastModifiedUserId:appSession.userId,
        isDeleted:false,
        deletedByUserId:null
    });
  };
}

module.exports = modelBuilder;
