import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex w-[1440px] items-center justify-between px-[160px] py-[16px] relative bg-[#ffffff]">
      <img
        className="relative w-[98px] h-[37px] object-cover"
        alt="Logo copy"
        src="/logo_nghich.png"
      />
      <div className="flex gap-20">
        <Link>Home</Link>
        <Link>Product</Link>
        <Link>Custom</Link>
        <Link>Contact Us</Link>
        {/* <ElementsNavigation className="!flex-[0_0_auto]" /> */}
        {/* <div className="inline-flex items-center gap-[2px] relative flex-[0_0_auto]">
          <button className="all-[unset] box-border inline-flex items-center gap-[2px] relative flex-[0_0_auto] border-0 border-none border-neutral-04100">
            <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
              <div className="text-neutral-04100 relative w-fit mt-[-1.00px] font-button-xsmall font-[number:var(--button-xsmall-font-weight)] text-[length:var(--button-xsmall-font-size)] tracking-[var(--button-xsmall-letter-spacing)] leading-[var(--button-xsmall-line-height)] whitespace-nowrap [font-style:var(--button-xsmall-font-style)]">
                Product
              </div>
            </div>
          </button>
        </div>
        <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
          <div className="text-neutral-04100 relative w-fit mt-[-1.00px] font-button-xsmall font-[number:var(--button-xsmall-font-weight)] text-[length:var(--button-xsmall-font-size)] tracking-[var(--button-xsmall-letter-spacing)] leading-[var(--button-xsmall-line-height)] whitespace-nowrap [font-style:var(--button-xsmall-font-style)]">
            Custom
          </div>
        </div> */}
        {/* <ElementsNavigationWrapper className="!flex-[0_0_auto]" /> */}
      </div>
      <div className="inline-flex items-center justify-end gap-[16px] relative flex-[0_0_auto]">
        {/* <Search02 className="!relative !w-[24px] !h-[24px]" />
        <UserCircle className="!relative !w-[24px] !h-[24px]" />
        <DivWrapper text="5" /> */}
      </div>
    </div>
  );
};

export default Header;
