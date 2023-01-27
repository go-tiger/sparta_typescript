interface MyInterface {
  value: string | number | string[];
}

// const error: readonly Array<boolean> = [false];
const okay: readonly boolean[] = [true];

// 제네릭이랑 유니언 같이쓰기
const okayGeneric: ReadonlyArray<boolean> = [false];

const stringObject: MyInterface = { value: 'hello, world!' };
const numberObject: MyInterface = { value: 1234 };
const stringArrayObject: MyInterface = { value: ['hello', 'world!'] };

/*
타입을 선언할때 어떤타입인지 전혀 명시가 안되어있다
그래서 그 타입에 가서 확인해야됨
어떤 타입에 내가 보낼 수 있구나
타입이 필요할때 수정해야된다.

디폴트값을 정해줄 수 있다. <T = string>
*/

interface MyInterfaceG<T = string> {
  value: T;
}

const stringObjectG: MyInterfaceG = { value: 'hello, world!' };
const numberObjectG: MyInterfaceG<number> = { value: 1234 };
const stringArrayObjectG: MyInterfaceG<string[]> = {
  value: ['hello', 'world!'],
};
