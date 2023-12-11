// Exercise #6
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(() => resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),1000 );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(() => resolve ([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "iti"],
          },
        ]), 1500 );
  });
};

// Start coding here

async function babyJohn() {
  try {
    const profile = await getJohnProfile();
    console.log(profile);
    const orders = await getJohnOrders();
    console.log(orders);
  } catch (err) {
    console.error('', err);
  }
}

babyJohn();