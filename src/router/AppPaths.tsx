export class AppPaths {
    static readonly index: string = '';
    static readonly login: string = 'login';
    static readonly timeTable: string = 'time-table'
    static readonly coachingTimeTable: string = `${AppPaths.timeTable}/coaching`;

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
    static readonly employeeTimeTable = `${AppPaths.timeTable}/employee`

    static readonly indexProfile: string = 'profile'
    static readonly coachTransactions: string = 'coach-transactions'
}

export enum AppParams {
    personId = 'personId'
}