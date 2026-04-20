// components/CommonButton.tsx
import React, { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CommonButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
}

const CommonButton = ({
  href,
  children,
  className = "",
  showIcon = true,
}: CommonButtonProps) => {
  return (
    <Link
      href={href}
      className={`bg-blue btn px-3 py-2 text-white font-semibold rounded  !inline-flex items-center gap-2 ${className}`}
    >
      {children}
      {showIcon && <ArrowRight size={18} />}
    </Link>
  );
};

export default CommonButton;