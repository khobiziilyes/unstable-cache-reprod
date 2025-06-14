import { getBrands } from "@/apis";
import { NextLink } from "@/comps";

export default async function Page() {
  const brands = await getBrands();

  return brands.map((brand) => (
    <div key={brand.id} className="border-b p-4">
      <NextLink className="text-2xl font-semibold" href={`/${brand.id}`}>
        Brand ID: {brand.id}
      </NextLink>
    </div>
  ));
}
