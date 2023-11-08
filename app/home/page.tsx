import MainHeader from "@/app/ui/home/main-header";
import Menu from "@/app/ui/home/menu";
import AsideMain from "@/app/ui/home/aside";
import CardsMain from "@/app/ui/home/cards";

export default function Page() {
  return (
    <>
      <Menu />
      <div id="principal">
        <MainHeader />
        <section className="flex flex-row mx-2.5 gap-2">
          <AsideMain />
          <CardsMain />
        </section>
      </div>
    </>
  )
}