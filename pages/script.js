import Script from 'next/script'

export default function Dashboard() {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-252321-2"></Script>
        <Script>
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-252321-2');
            `}
        </Script>
    </>
  )
}
