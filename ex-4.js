// Exercise #4
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(() => resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }), 1000 );
  });
};

// Start coding here
const getJohny = async () => {
    const result = await getJohnProfile(); 
    return result;
};
getJohny().then((getJohnProfile) => {
console.log(getJohnProfile);
});

