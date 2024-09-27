export const Navigation = () => {
    return (
        <nav className="flex justify-between max-w-[1280px] m-auto h-[72px] items-center">
          <img src="/images/brand_logo.png" alt="logo img" />
          <ul className="flex gap-[24px]">
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
          </ul>
          <button className="px-[6px] bg-redbg text-white h-[31px] w-[75px]">
            Login
          </button>
        </nav>
    );
}