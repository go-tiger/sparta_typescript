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

// console.log(partialToppingsIWant);

/* 
서드파티 라이브러리에서 타입을 가져와서 쓰는 경우가 많다
그 라이브러리에서 export 해주는 타입만 쓸수있는데
그 타입에 속해있는 다른 타입들은 export가 되지않을 수 있다.
지정되어있는 타입들을 유용하게 쓸수있도록 사용하기 위해
*/

interface BubbleTeaOrder {
  tea: boolean;
  straw?: boolean;
}

const myBubbleTeaOrder: Required<BubbleTeaOrder> = {
  tea: true,
  straw: true,
};

// --

interface BackAccount {
  accountNumber: string;
  balance: bigint;
}

const myAccount: Readonly<BackAccount> = {
  accountNumber: '1234',
  balance: BigInt(1000000),
};

myAccount.balance = BigInt(0);

console.log(myAccount);
