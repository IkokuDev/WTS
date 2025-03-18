import { Product as BaseProduct } from '../../payload-types'

export interface Product extends BaseProduct {
  ncx?: {
    listed: boolean;
    warehouseId?: string;
    qualityTestingId?: string;
    marketPrice?: number;
    featured: boolean;
  };
  paystar?: {
    insuranceRequired: boolean;
    insuranceCoverage?: number;
    creditFacility: boolean;
    creditAmount?: number;
    commissionRate?: number;
  };
} 