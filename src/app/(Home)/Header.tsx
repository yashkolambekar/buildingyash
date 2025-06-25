import { config } from "@/lib/utils";

const Header = () => {
  return (
    <>
      <div className="w-full  p-[0.5em] pb-0 text-center">
        <div>
          <p className="text-[1.5em] font-semibold">{config.title}</p>
          <p>{config.description}</p>
        </div>
        <hr className="mt-[0.5em]" />
      </div>
    </>
  );
};

export default Header;
