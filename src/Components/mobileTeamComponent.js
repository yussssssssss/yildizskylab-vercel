import React, { useState, useEffect } from "react";
import TeamsData from "../Data/teamsData";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

const MobileTeamComponent = ({ teamSelect, onTeamChange }) => {
  const [index, setIndex] = useState(0);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const newTeams = TeamsData[teamSelect] || [];
    setTeams(newTeams);
    setIndex(0);
    if (newTeams[0]) onTeamChange(newTeams[0].name);
  }, [teamSelect]);

  const handleNext = () => {
    const newIndex = (index + 1) % teams.length;
    setIndex(newIndex);
    onTeamChange(teams[newIndex].name);
  };

  const handlePrev = () => {
    const newIndex = (index - 1 + teams.length) % teams.length;
    setIndex(newIndex);
    onTeamChange(teams[newIndex].name);
  };

  const selectedTeam = teams[index] || {};

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Slider Navigation */}
      <div className="flex items-center justify-center w-full gap-20">
        <button
          onClick={handlePrev}
          className="p-2 text-white bg-customAccent rounded-full"
        >
          <FaAnglesLeft />
        </button>

        <div className="flex justify-center items-center space-x-4">
          <div
            key={selectedTeam.name}
            className="flex justify-center items-center w-24 h-24 bg-customLightPink rounded-full ring-customAccent p-2"
          >
              <img
                src={selectedTeam.logo}
                alt={`${selectedTeam.name} logo`}
                className="object-cover rounded-full w-full h-full"
              />
          </div>
        </div>

        <button
          onClick={handleNext}
          className="p-2 text-white bg-customAccent rounded-full"
        >
          <FaAnglesRight />
        </button>
      </div>

      {/* Team Details */}
      <div className="mt-8 text-center">
        <h2 className="text-customLightPink text-lg tracking-wide">
          {selectedTeam.name}
        </h2>
          <p className="font-inter text-center text-customLightPink tracking-widest text-lg px-12 mt-4">
            {selectedTeam.details}
          </p>
      </div>
    </div>
  );
};

export default MobileTeamComponent;
