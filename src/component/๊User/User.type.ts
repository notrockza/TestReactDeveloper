export interface IUsers {
  id: string;
  firstname: string;
  lastname: string;
  cardnumber: string;
  sex: string;
  tell: string;
  passport: string;
  salary: string;
}

export const UserList : IUsers[] = [{
    id : new Date().toJSON().toString(),
    firstname: "test",
    lastname: "test",
    cardnumber: "test",
    sex: "test",
    tell: "test",
    passport: "test",
    salary: "test"
}]