import React from "react";
import { supervisoryMembers } from "../Data/supervisoryData";
import BoardMember from "../Components/boardMember";

const SupervisoryPage = () => {
  return (
    <section
      className="flex flex-col gap-20 items-center justify-center w-screen scroll-mt-28 bg-customDarkPurple"
      id="supervisory-members"
    >
      <div className="w-screen flex justify-center tracking-widest">
        <h2 className="text-customAccent text-3xl lg:text-5xl">
          DENETİM KURULUMUZ
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-10 sm:gap-8 md:gap-12 lg:gap-20 2xl:max-w-[1800px] justify-self-center">
        {supervisoryMembers.map((member, index) => (
          <BoardMember key={index} member={member} />
        ))}
      </div>
    </section>
  );
};

export default SupervisoryPage;
