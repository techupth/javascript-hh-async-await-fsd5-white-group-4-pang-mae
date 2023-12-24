// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
async function handlingError() {
  try {
    const profileError = await getJohnProfile();
    console.log(profileError);
  } catch (errorCode) {
    console.log(errorCode);
  }
}

handlingError();
