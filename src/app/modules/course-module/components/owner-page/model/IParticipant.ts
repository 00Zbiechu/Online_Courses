export interface IParticipant {
    userId: number;
    username: string;
    photo: Uint8Array;
    joiningDate: Date;
}