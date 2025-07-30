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
    <div className="flex flex-col">
      <div>
        <div
          className={`inline-flex items-center gap-2 text-sm font-medium rounded-full px-4 py-1 w-fit ${tooltripClass}`}
        >
          {Icon && <Icon className="text-base" />}
          <span>{tooltrip}</span>
        </div>
      </div>
      <h2
        className={`text-[28px] md:text-[35px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px] font-bold mt-5 mb-7 ${hedingClass}`}
      >
        {heading}
      </h2>
      <p className={`text-sm lg:text-[16px] ${desCriptionClass}`}>
        {desCription}
      </p>
    </div>
  );
};

export default SectionContent;
