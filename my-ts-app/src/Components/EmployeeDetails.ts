export interface Employee  {
    id: string;
    Firstname: string;
    Lastname: string;
    email: string
}

export const dummyEmployeeList: Employee[] = [
    {
        id: new Date().toJSON().toString(),
        Firstname: 'Divyabharathi',
        Lastname:'Mayavan',
        email: "divyamayavan@gmail.com"
    },
];

export enum PageEnum {
    list,
    add,
    edit,
}