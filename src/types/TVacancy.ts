export type TVacancy = {
    id: string,
    name: string,
    salary: TVacancySalary,
    address: TVacancyAddress,
    employer: TVacancyEmployer,
    alternate_url: string,

    found: number,
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
    logo_urls: {
        original: string
    },
}