import { unstable_cache } from "next/cache";

async function getBrandsRaw() {
  console.log("Fetching brands ...");

  return [{ id: 1 }, { id: 2 }, { id: 3 }];
}

async function getBrandDetailsRaw(brandId: number) {
  console.log(`Fetching details for brand ${brandId} ...`);

  return {
    id: brandId,
    name: `Brand ${brandId}`,
    description: `Description for Brand ${brandId}`,
  };
}

async function getSuggestedBrandsRaw(currentBrandId: number) {
  console.log(`Fetching suggested brands for brand ${currentBrandId} ...`);

  const allBrands = await getBrands();
  return allBrands.filter((brand) => brand.id !== currentBrandId);
}

export const getBrands = unstable_cache(getBrandsRaw, undefined, {
  revalidate: Infinity,
});

export const getBrandDetails = unstable_cache(getBrandDetailsRaw, undefined, {
  revalidate: Infinity,
});

export const getSuggestedBrands = getSuggestedBrandsRaw;
