import MainHeader from "@/app/ui/home/main-header";
import AsideMainServer from "../ui/home/servidor/AsideMainServer";
import CardsMainClientWrapper from "@/app/ui/home/CardsMainClientWrapper";
import CardsMain from "../ui/home/servidor/CardsMain";

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