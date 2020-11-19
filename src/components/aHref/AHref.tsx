import React, { FC } from 'react';

interface AHrefProps {
  label: string;
  link: string;
  target?: boolean;
}

const AHref: FC<AHrefProps> = ({ link, label, target }) => (
  <a target={target ? '_blank' : '_self'} href={link}>
    {label}
  </a>
);

export default AHref;
