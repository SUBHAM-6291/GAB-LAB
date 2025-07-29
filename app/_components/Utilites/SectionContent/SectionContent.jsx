import React from "react";

const SectionContent = ({
  tooltrip,
  tooltripClass,
  heading,
  hedingClass,
  desCription,
  desCriptionClass,
  icon: Icon,
}) => {
  return (
    <div className="flex flex-col gap-7">
      <div>
        <div
          className={`inline-flex items-center gap-2 text-sm font-medium rounded-full px-4 py-1 w-fit ${tooltripClass}`}
        >
          {Icon && <Icon className="text-base" />}
          <span>{tooltrip}</span>
        </div>
      </div>
      <h2
        className={`text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold md:leading-[50px] lg:leading-[72px] ${hedingClass}`}
      >
        {heading}
      </h2>
      <p className={`md:text-sm lg:text-[16px] lg:pb-6 ${desCriptionClass}`}>
        {desCription}
      </p>
    </div>
  );
};

export default SectionContent;
