/// <reference types="vite/client" />

/**
 * API Client for connecting the Merchant Dashboard to the GCP Backend via Cloud Run.
 */

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://api.theloyaltyloop.com';

export interface RewardCalculationRequest {
  customer_ltv: number;
  churn_risk_score: number;
}

export interface RewardCalculationResponse {
  suggested_reward_value: number;
  ltv_weight_applied: number;
  risk_weight_applied: number;
  profitability_cap_hit: boolean;
  currency: string;
}

/**
 * Fetches the merchant's dashboard analytics.
 */
export const fetchMerchantDashboard = async (merchantId: string) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/v1/merchants/${merchantId}/dashboard`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}` // To be implemented with OAuth
      }
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching dashboard: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Failed to connect to GCP Backend:", error);
    throw error;
  }
};

/**
 * Calculates a dynamic reward using the backend logic.
 */
export const calculateDynamicReward = async (merchantId: string, data: RewardCalculationRequest): Promise<RewardCalculationResponse> => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/v1/merchants/${merchantId}/rewards/calculate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error(`Error calculating reward: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Failed to connect to GCP Backend for reward calculation:", error);
    throw error;
  }
};
