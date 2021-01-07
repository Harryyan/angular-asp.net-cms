import { Offer } from '../models/offer';

export interface OfferState {
    offers: Offer[];
    isLoading: boolean;
    hasError: boolean;
    errorMessage: string;
}

export const initialOfferState: OfferState = {
    offers: [],
    isLoading: false,
    hasError: false,
    errorMessage: null
};
