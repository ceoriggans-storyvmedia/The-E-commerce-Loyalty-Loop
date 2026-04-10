def _calculate_reward(customer_ltv: float, churn_risk_score: float, base_reward: float = 10.0) -> dict:
    """
    Calculates the retention reward based on Customer Lifetime Value (LTV) and Churn Risk.
    
    Args:
        customer_ltv (float): The historical lifetime value of the customer in USD.
        churn_risk_score (float): Probability of churn (0.0 to 1.0).
        base_reward (float): The baseline reward value to offer.
        
    Returns:
        dict: The calculated reward details, optimized for profitability.
    """
    # LTV Weighting: Higher LTV customers get a proportionally higher reward ceiling
    # Example: A $1000 LTV customer gets a 2.0x multiplier
    ltv_multiplier = 1.0 + (customer_ltv / 1000.0)
    
    # Risk Weighting: Higher risk means we invest more of the LTV-adjusted reward to save them
    # Example: A 0.9 (90%) churn risk gets a 1.9x multiplier
    risk_multiplier = 1.0 + churn_risk_score
    
    # Calculate the raw value
    calculated_value = base_reward * ltv_multiplier * risk_multiplier
    
    # Profitability Guardrail: Cap the reward at 15% of the customer's LTV
    max_reward = customer_ltv * 0.15
    
    # Ensure we don't offer a reward higher than the cap, but also don't offer $0 if LTV is very low
    final_reward = min(calculated_value, max_reward) if max_reward > 0 else calculated_value
    
    return {
        "suggested_reward_value": round(final_reward, 2),
        "ltv_weight_applied": round(ltv_multiplier, 2),
        "risk_weight_applied": round(risk_multiplier, 2),
        "profitability_cap_hit": final_reward == max_reward and max_reward > 0,
        "currency": "USD"
    }

# Example Usage:
# if __name__ == "__main__":
#     print(_calculate_reward(customer_ltv=2500.0, churn_risk_score=0.85))
