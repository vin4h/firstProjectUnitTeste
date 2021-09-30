export interface CompanyConstructor {
    socialReason: string;

    cnpj: string;

    address: string;
}

export class Company {
    socialReason: string;

    cnpj: string;

    address: string;

    constructor({ socialReason, cnpj, address }: CompanyConstructor) {
        this.socialReason = socialReason;

        this.cnpj = cnpj;

        this.address = address;
    }
}
