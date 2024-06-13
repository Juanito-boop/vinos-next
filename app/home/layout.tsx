import '@/app/ui/global.css'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-principalColor2 pb-2.5">{children}</body>
		</html>
	);
}