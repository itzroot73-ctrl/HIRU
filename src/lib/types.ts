export interface Feedback {
    id: string;
    userProfileId: string;
    serviceId?: string; // Optional for general feedback
    rating: number;
    comment: string;
    dateCreated: string;
}
