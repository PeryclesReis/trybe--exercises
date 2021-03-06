const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

// Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica : Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.
describe('verificando resultados para getUserName', () => {
  it('should return found user', () => {
    return  expect(getUserName(4)).resolves.toEqual('Mark');
  });

  it('should dont return found user', () => {
    const id = 3;
    return expect(getUserName(id)).rejects.toEqual({ error: 'User with ' + id + ' not found.' });
  });

  // Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
  // Dica: Utilize o try/catch para o caso de erro.
  it('should return found user', async () => {
   const data = await getUserName(4);
   expect(data).toEqual('Mark')
  });

  it('should does not return found user', async () => {
    try {
      await getUserName(3);
    } catch (error) {
      expect(getUserName(error)).rejects.toEqual({ error: 'User with 3 not found.' });
    }
  });
});

