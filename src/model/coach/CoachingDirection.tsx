export enum CoachingDirectionType {
    GROUP = 'GROUP',
    PERSON = 'PERSON'
}

export interface ICoachingDirection {
    id: number;
    title: string;
    type: CoachingDirectionType;
}
