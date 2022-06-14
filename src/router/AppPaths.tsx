export class AppPaths {
    static readonly index: string = '';
    static readonly login: string = 'login';
    static readonly coachingTimeTable: string = 'coaching-time-table';

    static readonly indexCRM: string = 'crm';
    static readonly registration: string = 'registration';
    static readonly cash: string = 'cash';
    static readonly coach: string = 'coach';
    static readonly products: string = 'products';
    static readonly reports: string = 'reports';
    static readonly customerRequests: string = 'customer-requests';
    static readonly bot: string = 'bot';
    static readonly conversations: string = AppPaths.bot + '/conversations';
    static readonly newCustomerRequests: string = AppPaths.customerRequests + '/new';
}

export enum AppParams {
    personId = 'personId'
}