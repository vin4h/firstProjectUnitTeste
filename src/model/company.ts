export interface CompanyConstructor {
    socialReason?: string;

    cnpj?: string;

    address?: string;
}

class Company {
    private socialReason: string;

    private cnpj: string;

    private address: string;

    private companies: Company[] = [];

    constructor({ socialReason, cnpj, address }: CompanyConstructor) {
        this.socialReason = socialReason || '';
        this.cnpj = cnpj || '';
        this.address = address || '';
    }

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
export default Company;