export interface CompanyConstructor {
    socialReason?: string;

    cnpj?: string;

    address?: string;
}

export class Company {
    private socialReason: string;

    private cnpj: string;

    private address: string;

    constructor({ socialReason, cnpj, address }: CompanyConstructor) {
        this.socialReason = socialReason || '';
        this.cnpj = cnpj || '';
        this.address = address || '';
    }
}