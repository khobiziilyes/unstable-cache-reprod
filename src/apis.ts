export async function getBrands() {
  console.log("Fetching brands ...");

  return [{ id: 1 }, { id: 2 }, { id: 3 }];
}

export async function getBrandDetails(brandId: number) {
  console.log(`Fetching details for brand ${brandId} ...`);

  return {
    id: brandId,
    name: `Brand ${brandId}`,
    description: `Description for Brand ${brandId}`,
  };
}

export async function getSuggestedBrands(currentBrandId: number) {
  console.log(`Fetching suggested brands for brand ${currentBrandId} ...`);

  const allBrands = await getBrands();
  return allBrands.filter((brand) => brand.id !== currentBrandId);
}
