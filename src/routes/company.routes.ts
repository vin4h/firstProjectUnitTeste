import { Router } from 'express';
import { Company } from '../model/Company';

const companyRouter = Router();

const companies: Company[] = [];

const getCompanies = () => {
    return companies;
}

companyRouter.get('/company', (request, response) => {
    response.json(getCompanies());
})

export default { companyRouter, getCompanies };