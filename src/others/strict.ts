type TableData = { [x: string]: string };

const enum TableKey {
  ID = 'ID',
  FirstName = 'firstName',
  LastName = 'lastName',
  Score = 'score',
}

type StrictTableData = { [key in TableKey]: string };
type LessStrictTableData = { [key in TableKey]?: string };

const myTableData: LessStrictTableData = {
  ID: '1',
  firstName: 'jane',
  lastName: 'doe',
};

console.log(myTableData);
