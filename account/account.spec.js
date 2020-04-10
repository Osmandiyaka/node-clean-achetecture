const mockAccountRepository=require('./mockAccountRepository');
const sut=require('./account')({mockAccountRepository});

  test('adds account to repository', async () => {
      const id=await sut.create({
         name:'Osman Diyaka',
         accountNumber:'45219855',
         balance:450
      });
    expect(id).toEqual(0);
  });