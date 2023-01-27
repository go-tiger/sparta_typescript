interface Toppings {
  tomatoes: boolean;
  onion: boolean;
  lettuce: boolean;
  ketchup: boolean;
}

const myToppingsl: Toppings = {
  tomatoes: true,
  onion: true,
  lettuce: true,
  ketchup: true,
};

const partialToppingsIWant: Partial<Toppings> = {
  tomatoes: true,
  onion: undefined,
};

console.log(partialToppingsIWant);
