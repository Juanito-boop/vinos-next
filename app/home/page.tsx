import MainHeader from "@/app/ui/home/main-header";
import CardsMain from "@/app/ui/home/servidor/CardsMain";
import AsideMainServer from "../ui/home/servidor/AsideMainServer";

export default function Page() {
	return (
		<>
			<MainHeader />
			<section className="flex flex-row mx-2.5 gap-2">
				<AsideMainServer />
				<CardsMain />
			</section>
		</>
	);
}