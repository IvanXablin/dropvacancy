export type TVacancy = {
    id: string,
    name: string,
    salary: TVacancySalary,
    address: TVacancyAddress,
};

type TVacancySalary = {
    from: string,
    to: string,
    currency: string,
};

type TVacancyAddress = {
    city: string,
}

type TVacancyEmployer = {
    name: string,
}