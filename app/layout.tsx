import '@/app/ui/global.css'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/b33142c330.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
