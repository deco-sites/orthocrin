import { UnitPriceSpecification } from "$live/std/commerce/types.ts";

export const formatInstallments = (
  installment: UnitPriceSpecification,
) => {
  const { billingDuration, billingIncrement } = installment;

  if (!billingDuration || !billingIncrement) {
    return "";
  }

  // const withTaxes = sellingPrice < price;

  return `Em até ${billingDuration}X sem juros. Pagamento à vista, a partir de 10,11% de desconto.`;
};
