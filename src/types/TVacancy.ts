export type TVacancy = {
    id: string,
    name: string,
    employment: TVacancyEmployment,
    experience: TVacancyExperience,
    salary: TVacancySalary,
    address: TVacancyAddress,
    employer: TVacancyEmployer,
    description: string,
    key_skills: TVacancyKeySkill[]
    alternate_url: string,
    published_at: string,
    url: string,
    found: number,
};

type TVacancyEmployment = {
    name: string,
};

type TVacancyExperience = {
    name: string,
};

type TVacancySalary = {
    from: string,
    to: string,
    currency: string,
};

type TVacancyAddress = {
    city: string,
    lat: number | undefined,
    lng: number | undefined,
};

type TVacancyKeySkill = {
    name: string,
};

type TVacancyEmployer = {
    name: string,
    logo_urls: {
        original: string
    },
};