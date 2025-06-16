import React, { useEffect } from 'react';
import Layout from '@theme-original/Layout';
import { useLocation } from '@docusaurus/router';

export default function LayoutWrapper(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    const html = document.documentElement;

    if (pathname === '/') {
      html.setAttribute('data-route', 'home');
    } else if (pathname.startsWith('/blog')) {
      html.setAttribute('data-route', 'blog');
    } else {
      html.setAttribute('data-route', 'other');
    }

    return () => {
      html.removeAttribute('data-route');
    };
  }, [pathname]);

  return <Layout {...props} />;
}
