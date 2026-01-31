export interface Feedback {
    id: string;
    userId: string;
    serviceId?: string; // Optional for general feedback
    rating: number;
    comment: string;
    dateCreated: string;
}

    