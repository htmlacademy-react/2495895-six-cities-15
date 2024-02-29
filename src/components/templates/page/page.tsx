import type { ReactNode } from 'react';

type PagePropsT = {
  className?: string;
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode | ReactNode[];
}

export const Page = ({ className, header, footer, children }: PagePropsT) => (
  <div className={`page ${className}`}>
    {header && header}
    {children}
    {footer && footer}
  </div>
);
