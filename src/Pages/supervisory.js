import React from "react";
import { supervisoryMembers2526 } from "../Data/supervisoryData";
import BoardMember from "../Components/boardMember";

const SupervisoryPage = () => {
  const firstRowMembers = supervisoryMembers2526.slice(0, 3);
  const secondRowMembers = supervisoryMembers2526.slice(3);

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
      
      <div className="flex flex-col gap-12 w-full items-center">
        <div className="flex flex-wrap justify-center gap-6 px-10 sm:gap-8 md:gap-12 lg:gap-20">
          {firstRowMembers.map((member, index) => (
            <BoardMember key={index} member={member} />
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 px-10 sm:gap-8 md:gap-12 lg:gap-20">
          {secondRowMembers.map((member, index) => (
            <BoardMember key={index + 3} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupervisoryPage;