import type { User } from '../types';

function getData<T>(data: T): T {
  return data;
}

console.log(getData<string>('string data'));
console.log(getData<number>(1234));
console.log(getData<User>({ email: 'email@email.com', name: 'katie' }));
console.log(getData<string[]>(['string', 'data']));
console.log(getData<string[]>([])); // 빈 배열도 유효한 인자입니다!
