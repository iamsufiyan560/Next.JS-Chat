import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import AuthButtons from "./AuthButtons";
import { redirect } from "next/navigation";

const Page = async () => {
  const { isAuthenticated } = getKindeServerSession();
  if (await isAuthenticated()) return redirect("/");
  return (
    <>
      <div
        className="flex h-screen w-full  bg-gradient-to-b max-lg:to-95% lg:from-35% from-[#1C1938]
    
    relative
    "
      >
        <div
          className="flex-1 flex overflow-hidden 
      
       bg-gradient-to-b  max-lg:to-95%   lg:from-35% from-[#1C1938]
       justify-center items-center"
        >
          <div
            className="flex flex-col gap-2 px-4 xl:ml-40 text-center md:text-start font-semibold z-50 
        "
          >
            <h1 className="mb-4 text-5xl lg:text-6xl text-white font-medium">
              Talk to strangers,
              <br />
              <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-transparent bg-clip-text">
                Make friends!
              </span>
            </h1>
            <p
              className="pb-8 
bg-gradient-to-r from-indigo-200 to-yellow-100
            text-transparent bg-clip-text w-full md:max-w-md text-xl"
            >
              Experience a random chat alternative to find friends, connect with
              people, and chat with strangers from all over the world!
            </p>
            <AuthButtons />
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden justify-center items-center hidden md:flex  bg-gradient-to-b  max-lg:to-95%   lg:from-35% from-[#1C1938]    ">
          <img
            src="https://www.chitchat.gg/_astro/features-03-image-02.DWzUSq7I_LPNSp.webp"
            alt="Hero Image"
            className="object-contain dark:opacity-60  pointer-events-none select-none h-full z-50 p-8
          "
          />
        </div>
        <div className="absolute w-full hidden md:block top-8 md:top-[20%] lg:top-[5%]  ">
          <img
            src="https://www.chitchat.gg/_astro/lines.COnCw4cC_2020Uc.svg"
            alt="Decorative SVG Image"
            className="object-contain opacity-50  pointer-events-none"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
