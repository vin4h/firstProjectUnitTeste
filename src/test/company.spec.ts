import chai from 'chai';
import http from 'chai-http';
import subset from 'chai-subset';
import Company from '../model/Company';

chai.use(http);

chai.use(subset);

const company = new Company({});

const companySchema = {
    socialReason: 'ok',
    cnpj: '91283192',
    address: 'okwoqkqwo 01293'
};

const AllCompanySchamea: Company[] = [];

describe('Test functions company routes', () => {
    it('return all company', () => {
        const companies = company.getCompanies();
        chai.expect(companies).to.containSubset(AllCompanySchamea)
    });

    it('Add company', () => {
        const newCompany = company.addCompany(companySchema);
        chai.expect(newCompany).to.containSubset(companySchema);
    });
})