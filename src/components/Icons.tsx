import { LucideProps } from "lucide-react";
import Image from "next/image";

export const Icons = {
  logo: (props: LucideProps) => (
    <Image
      {...props}
      src="/logo.svg"
      alt="TechTrove"
      height={48}
      width={48}
      className="rounded-full"
    />
  ),
};
