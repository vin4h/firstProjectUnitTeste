import { Router } from 'express';
import { Company, CompanyConstructor } from '../model/Company';

const companyRouter = Router();

const companies: Company[] = [];

const getCompanies = () => {
    return companies;
}

const addCompany = ({ socialReason, cnpj, address }: CompanyConstructor) => {
    const newCompany = new Company({
        socialReason,
        cnpj,
        address
    });

    companies.push(newCompany);

    return newCompany;
}

companyRouter.get('/company', (request, response) => {
    response.json(getCompanies());
});

companyRouter.post('/company', (request, response) => {
    const { socialReason, cnpj, address } = request.body;

    const newCompany = addCompany({
        socialReason,
        cnpj,
        address
    });

    return response.status(201).json(newCompany);
})

export default { companyRouter, getCompanies, addCompany };