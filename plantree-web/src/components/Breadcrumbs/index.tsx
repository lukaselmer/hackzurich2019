import React from 'react';
import { Breadcrumb } from 'bloomer/lib/components/Breadcrumb/Breadcrumb';
import { BreadcrumbItem } from 'bloomer/lib/components/Breadcrumb/BreadcrumbItem';
import { Link } from 'react-router-dom';

export function Breadcrumbs({ items }: { items: [string, string][] }) {
  return (
    <Breadcrumb>
      <ul>
        {items.map(([name, href]) => (
          <BreadcrumbItem key={name} isActive={!href}>
            {/* eslint-disable-next-line */}
            {href ? <Link to={href}>{name}</Link> : <a>{name}</a>}
          </BreadcrumbItem>
        ))}
      </ul>
    </Breadcrumb>
  );
}
