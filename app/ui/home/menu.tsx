export default function Menu() {
	return (
    <div
      id="menu"
      className="fixed top-[100%] z-[90] flex h-screen w-screen items-center justify-center bg-[rgb(42,42,42)] text-[40px] tracking-[1px] text-white"
    >
      <ul className="pt-auto flex w-[80%] flex-col gap-3">
        <li className="px-auto block cursor-pointer rounded-xl border border-[rgb(228,228,228)] py-[20px] text-[25px] text-[white] hover:bg-[rgb(228,228,228)] hover:text-[rgb(42,42,42)]">
          <button className="w-full">
            <a href="/" className="no-underline hover:no-underline">
              {" "}
              login email password{" "}
            </a>
          </button>
        </li>
        <li className="px-auto block cursor-pointer rounded-xl border border-[rgb(228,228,228)] py-[20px] text-[25px] text-[white] hover:bg-[rgb(228,228,228)] hover:text-[rgb(42,42,42)]">
          <button className="w-full">
            <a href="/" className="no-underline hover:no-underline">
              {" "}
              login magic link{" "}
            </a>
          </button>
        </li>
        <li
          className="px-auto block cursor-pointer rounded-xl border border-[rgb(228,228,228)] py-[20px] text-[25px] text-[white] hover:bg-[rgb(228,228,228)] hover:text-[rgb(42,42,42)]"
          id="cerrar-menu"
        >
          <button className="w-full">
            <a href="" className="no-underline hover:no-underline">
              {" "}
              cerrar menu{" "}
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
}