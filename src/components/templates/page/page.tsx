import type { ReactNode } from 'react';

type PagePropsT = {
  className?: string;
  header?: React.Component;
  footer?: React.Component;
  children: ReactNode | ReactNode[];
}

export const Page = ({ className, header, footer, children }: PagePropsT) => (
  <div className={`page ${className}`}>
    {header && header}
    {children}
    {footer && footer}
  </div>
);
