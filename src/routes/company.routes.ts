import { Router } from 'express';
import Company, { CompanyConstructor } from '../model/Company';

const companyRouter = Router();

const company = new Company({});

companyRouter.get('/company', (request, response) => {
    response.json(company.getCompanies());
});

companyRouter.post('/company', (request, response) => {
    const { socialReason, cnpj, address } = request.body;

    const newCompany = company.addCompany({
        socialReason,
        cnpj,
        address
    });

    return response.status(201).json(newCompany);
})

export default { companyRouter };