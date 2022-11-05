import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faW, faL } from "@fortawesome/free-solid-svg-icons";

export default function GameLogBox({ data,next }) {
  const wIcon = <FontAwesomeIcon icon={faW} size="sm" color="#00ff4c" />;
  const lIcon = <FontAwesomeIcon icon={faL} size="sm" color="#ff002d" />;
  return (
    <div className="bg-[#1e2633] h-40 md:h-44 w-full flex flex-row space-x-1 items-center">
      {data.slice(0, 4).reverse().map((game) => (
        <div key={game.Game_ID} className="bg-[#00b9bf] h-32 md:h-36 flex-1 flex flex-col justify-center items-center">
          <p className="font-extrabold text-xs">{game.GAME_DATE}</p>
          <p className="font-extrabold text-xs md:text-sm">{game.MATCHUP}</p>
          <p className="font-extrabold text-xs md:text-sm">PTS: {game.PTS}</p>
          <p className="font-extrabold text-xs md:text-sm">AST: {game.AST}</p>
          <p className="font-extrabold text-xs md:text-sm">REB: {game.REB}</p>
          <p className="font-extrabold text-xs md:text-sm">MIN: {game.MIN}</p>
          <p className="font-medium">{game.WL === "W" ? wIcon : lIcon}</p>
        </div>
      ))}
        <div className="relative bg-[#fe317e] h-32 md:h-36 flex-1 flex flex-col justify-evenly items-center">
          <span className="font-bold text-xs absolute -top-3.5 md:-top-4">NEXT GAME</span>
          <p className="font-bold text-xs text-center">{next.GAME_DATE}
            <span className="font-bold text-xs md:text-sm block">{next.GAME_TIME}</span>
          </p>
          <p className="font-bold text-xs md:text-sm text-center">{next.HOME_TEAM_ABBREVIATION} ({next.HOME_WL})
          <span className="font-bold text-xs md:text-sm block">VS</span>
          <span className="font-bold text-xs md:text-sm block">{next.VISITOR_TEAM_ABBREVIATION} ({next.VISITOR_WL})</span>
          </p>
        </div>
    </div>
  );
}
