import { getBrandDetails, getSuggestedBrands } from "@/apis";
import { NextLink } from "@/comps";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ brandId: string }>;
}) {
  const _params = await params;

  const brandId = parseInt(_params.brandId, 10);
  const brand = await getBrandDetails(brandId);

  return (
    <div>
      <h1 className="text-3xl font-bold">{brand.name}</h1>
      <p className="mt-2 text-lg">{brand.description}</p>

      <Suspense>
        <SuggestedBrandsSection currentBrandId={brandId} />
      </Suspense>
    </div>
  );
}

async function SuggestedBrandsSection({
  currentBrandId,
}: {
  currentBrandId: number;
}) {
  const suggestedBrands = await getSuggestedBrands(currentBrandId);

  return (
    <>
      <h1 className="text-2xl font-bold">Suggested Similar Brands</h1>

      <ul className="mt-2">
        {suggestedBrands.map((brand) => (
          <li key={brand.id} className="border-b p-2">
            <NextLink href={`/${brand.id}`}>{brand.id}</NextLink>
          </li>
        ))}
      </ul>
    </>
  );
}
