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

// myAccount.balance = BigInt(0);
// console.log(myAccount);

// --

type Type = string[];
type TypeII = Array<string>;

type ObjectTypeRecord = Record<string, string>;
type ObjectTypeObject = { [x: string]: string };

type Country = 'Korea' | 'USA' | 'Canada' | 'UK';
type CountryCode = 82 | 1 | 44;

type CountryToCountryCode = Record<Country, CountryCode>;
type CountryToCountryCodeObject = { [countryName in Country]: CountryCode };

const Countries: CountryToCountryCode = {
  Canada: 1,
  Korea: 82,
  USA: 1,
  UK: 44,
};

// --

interface UserInfo {
  userName: string;
  favoriteColor: string;
  email: string;
  password: string;
}

/* 새로운 타입을 만들어서 비밀번호랑 이메일을 생략 */
type LessUserInfo = Omit<UserInfo, 'password' | 'email'>;

const newUser: LessUserInfo = {
  userName: 'pony',
  favoriteColor: 'rainbow',
  // 생략시킨 email이 속해있어서 컴파일되지 않습니다
  // email: 'hello@world.hello',
};

// --

type MyType = 'dog' | 'cat' | 'alpaca';
/* 유니엇 타입에 속해있는 속성을 생략 */
type ExcludedType = Exclude<MyType, 'cat' | 'alpaca'>;

// ✅
const onlyDogAllowed: ExcludedType = 'dog';
// ❌
// const noAlpaca: ExcludedType = 'alpaca';

type OnChange = (isDone: boolean) => void;
type GroupOfTypes = string | undefined | OnChange;

/* GroupOfTypes에 OnChange 만 남긴다 */
type FunctionType = Exclude<GroupOfTypes, string | undefined>;

// ✅
const onChangeHandler: FunctionType = isDone => isDone;
console.log(onChangeHandler(true));

// ❌
// const today: FunctionType = 'great day';

// --

interface User {
  firstName: string;
  lastName: string;
}

interface Student {
  user: User;
  isGraduated: boolean;
  school: string;
}

/* 특정 프로퍼티들만 뽑아서 사용 */
type StudentName = Pick<Student, 'user' | 'isGraduated'>;
const studentName: StudentName = {
  user: {
    firstName: 'winnie',
    lastName: 'pooh',
  },
  isGraduated: true,
};
// console.log(studentName);

// --

type MyPet = 'dog' | 'cat' | 'alpaca';
type ExtractedType = Extract<MyPet, 'alpaca' | 'cat'>;

const onlyAlpacaOrCatAllowed: ExtractedType = 'cat'; // 또는 "alpaca"만 할당 가능
// console.log(onlyAlpacaOrCatAllowed);

// --

type QueryParam = string | string[] | undefined | null;
type NonNullableQueryParam = NonNullable<QueryParam>;

// 문자열은 허용되는 타입입니다
const queryParam: NonNullableQueryParam = 'orders';
// 허용되지 않습니다
// const forbiddenQueryParam: NonNullableQueryParam = undefined;
