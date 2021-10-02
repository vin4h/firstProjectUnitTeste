import { Company, CompanyConstructor } from '../model/Company';

export class CompanyController {
    private companies: Company[] = [];

    public getCompanies = () => {
        return this.companies;
    }


    public addCompany = ({ socialReason, cnpj, address }: CompanyConstructor) => {
        const newCompany = {
            socialReason,
            cnpj,
            address
        };

        const company = new Company(newCompany);


        this.companies.push(company);

        return newCompany;
    }
}