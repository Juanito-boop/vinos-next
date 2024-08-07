import MainHeader from "@/app/ui/home/main-header";
import AsideMainServer from "@/app/ui/home/servidor/AsideMainServer";
import CardsMainClientWrapper from "@/app/ui/home/CardsMainClientWrapper";
import CardsMain from "@/app/ui/home/servidor/CardsMain";
import FilteredCards from "@/app/ui/home/FilterCardProducts";

export default function Page() {
	return (
		<>
			<MainHeader />
			<section className="flex flex-row mx-2.5 gap-2">
				<AsideMainServer />
				{/* <CardsMain /> */}
				<FilteredCards />
			</section>
		</>
	);
}