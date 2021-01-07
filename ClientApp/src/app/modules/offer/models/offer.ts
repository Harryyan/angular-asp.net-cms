export interface Offer {
    id: number;
    title: string;
    description: string;
    startDateTime: Date;
    endDateTime: Date;
    isRespawningOffer: boolean;
    categoryId?: number;
    categoryName?: string | null;
    respawnStartTime?: number | null;
}
