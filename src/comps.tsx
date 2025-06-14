import Link from "next/link";
import type React from "react";

export function NextLink(
  props: Omit<React.ComponentProps<typeof Link>, "prefetch">,
) {
  return <Link {...props} prefetch={false} />;
}
