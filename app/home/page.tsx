import MainHeader from "@/app/ui/home/main-header";
import AsideMainServer from "@/app/ui/home/servidor/AsideMainServer";
import FilteredCards from "@/app/ui/home/FilterCardProducts";

export default function Page() {
	return (
		<>
			<MainHeader />
			<section className="flex flex-row mx-2.5 gap-2">
				<AsideMainServer />
				<FilteredCards />
			</section>
		</>
	);
}