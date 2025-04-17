let pizzaOrder = new Promise((resolve, reject) => {
    let pizzaAvailable = true;
  
    setTimeout(() => {
      if (pizzaAvailable) {
        resolve("Pizza delivered!");
      } else {
        reject("Sorry, no pizza today.");
      }
    }, 2000); // wait 2 seconds to simulate delivery
  });
  
  pizzaOrder
    .then((message) => {
      console.log("Success:", message); //then catches resolve()
    })
    .catch((error) => {
      console.log("Failed:", error);
    });
  