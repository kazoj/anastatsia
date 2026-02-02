export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'House' | 'Apartment' | 'Villa';
  status: 'Sale' | 'Rent';
  isNew: boolean;
  imageUrl: string;
  description: string;
}

export interface MarketInsight {
  answer: string;
  sources?: {
    title: string;
    uri: string;
  }[];
}