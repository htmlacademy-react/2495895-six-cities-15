import type { ReactNode } from 'react';

type PageProps = {
  className?: string;
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode | ReactNode[];
}

export const Page = ({ className, header, footer, children }: PageProps) => (
  <div className={`page ${className}`}>
    {header && header}
    {children}
    {footer && footer}
  </div>
);
