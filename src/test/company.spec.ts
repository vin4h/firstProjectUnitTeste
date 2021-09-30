import chai from 'chai';
import http from 'chai-http';
import subset from 'chai-subset';
import { Company } from '../model/Company';
import companyRoute from '../routes/company.routes'

chai.use(http);

chai.use(subset);

const companySchema = new Company({
    socialReason: 'ok',
    cnpj: '91283192',
    address: 'okwoqkqwo 01293'
});

const AllCompanySchamea: Company[] = [];

describe('Test functions company routes', () => {
    it('return all company', () => {
        const companies = companyRoute.getCompanies();
        chai.expect(companies).to.containSubset(AllCompanySchamea)
    });

    it('Add company', () => {
        const company = companyRoute.addCompany(companySchema);
        chai.expect(company).to.containSubset(companySchema);
    });
})