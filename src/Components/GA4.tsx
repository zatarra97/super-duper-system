import React from 'react'
import { Helmet } from 'react-helmet-async'

type GA4Props = {
  measurementId: string
}

// Componente per Google Analytics 4
export default function GA4({ measurementId }: GA4Props) {
  return (
    <Helmet>
      {/* Google tag (gtag.js) */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {
              'custom_parameter_1': 'bekboard_studio'
            }
          });
        `}
      </script>
    </Helmet>
  )
}
