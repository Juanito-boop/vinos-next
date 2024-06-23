import "@/app/ui/global.css";
import MainHeader from "../ui/home/main-header";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-principalColor2 pb-2.5">
				{children}
			</body>
		</html>
	);
}
