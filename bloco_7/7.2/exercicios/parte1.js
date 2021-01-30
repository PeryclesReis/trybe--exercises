const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };

  // Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const deliveryPerson = Object.values(order.order.delivery);
    const name = Object.values(order);
    const rua = Object.values(order.address);
    console.log(`Olá ${deliveryPerson[0]}, entraga para: ${name[0]}, Telefone: ${name[1]}, R. ${rua[0]}, N°: ${rua[1]}, AP: ${rua[2]}`);
  }

  customerInfo(order);

  // Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    let name = Object.values(order)
    console.log(name[0]);
    let newName = name;
    newName = 'Luiz Silva';
    let pizza = Object.keys(order.order.pizza);
    // let muzzarella = pizza[0];
    // muzzarella = 'muzzarella';
    // let calabresa = pizza[1];
    calabresa = 'calabresa';
    let bebida = Object.values(order.order.drinks.coke);
    let pay = Object.values(order.payment);
    pay = 50;
    console.log(`Olá ${newName}, o total do seu pedido de ${pizza} e ${bebida[0]} é R$ ${pay},00.`);
  }

  orderModifier(order);

