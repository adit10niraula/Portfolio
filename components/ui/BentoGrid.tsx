import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { div } from "motion/react-client";
import Lottie from "react-lottie";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {

  return (
    <div
      className={cn(
        // "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImage,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImage?: string;
  id?: number;
}) => {
  return (
    <div
      className={cn(
        "row-span-1  relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4       ",
        className
      )}
      style={{
        background: "rgb(13,13,14)",
        backgroundColor:
          "linear-gradient(90deg, rgba(13,13,14,1) 0%, rgba(48,48,48,1) 32%, rgba(141,142,143,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute  ">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImage && (
            <img
              src={spareImage}
              alt={spareImage}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold " />
          </BackgroundGradientAnimation>
        )}

        <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>


          {id === 3 && (
            <div className="flex gap-1 h-full  lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-2 ">
                {["React.js", "Next.js", "typeScript"].map((item) => (
                  <span
                    key={item}
                    className="py-1 lg:py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                
              </div>

              <div className="flex flex-col gap-2 ">
                {["Node.js", "Express.js", "MongoDb"].map((item) => (
                  <span
                    key={item}
                    className="py-1 lg:py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}



          {/* {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                  loop: copied,
                  autoplay:copied,
                  animationData:animationData


                }}
              </div>
            </div>
          )} */}


        </div>
      </div>
    </div>
  );
};
