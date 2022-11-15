import React from "react";

export default function GameLogBox({ data,next }) {
  return (
    <div className="bg-[#1e2633] h-48 md:h-52 lg:h-54 w-full flex flex-col items-center space-y-0.5 justify-center">
      <div className="flex w-full space-x-1 items-center">
      {data.slice(0, 4).reverse().map((game) => (
        <div key={game.Game_ID} className="bg-[#00b9bf] h-32 md:h-36 flex-1 flex flex-col items-center relative">
          <p className="flex flex-col items-center">
            <span className="font-semibold text-xs">{game.GAME_DATE}</span>
            <span className="font-extrabold text-xs md:text-sm">{game.MATCHUP}</span>
          </p>
          <p className="flex flex-col items-center w-full">
            <span className="font-bold text-sm md:text-lg block">PTS: {game.PTS}</span>
            <span className="font-bold text-sm md:text-lg block">AST: {game.AST}</span>
            <span className="font-bold text-sm md:text-lg block">REB: {game.REB}</span>
            <span className="font-bold text-sm md:text-lg block">MIN: {game.MIN}</span>
          </p>
          <span className='block absolute bottom-0 right-0 border-b-[35px] sm:border-b-[45px] border-l-[35px] sm:border-l-[45px] border-l-transparent'
                style={{borderBottomColor: game.WL === "W" ? '#68d391' : '#fc8181'}}
          >
            <span className="text-sm sm:text-lg font-semibold sm:font-bold absolute right-1 top-4 sm:top-5 block">{game.WL === "W" ? 'W' : 'L'}</span>
          </span>
        </div>
      ))}
      </div>
        <div className="relative bg-[#fe317e] h-8 md:h-10 flex justify-evenly items-center w-full">
          <span className="font-bold text-xs">NEXT GAME</span>
          <p className="font-bold text-sm md:text-sm text-center">{next.PLAYER_TEAM_ABBREVIATION}
            <span className="font-bold text-xs md:text-sm px-2 sm:px-4">VS</span>
            <span className="font-bold text-sm md:text-sm">{next.VS_TEAM_ABBREVIATION}</span>
          </p>
          <p className="font-semibold text-xs text-center">{next.GAME_DATE}
            <span className="font-bold text-xs md:text-sm block">{next.GAME_TIME}</span>
          </p>
        </div>
    </div>
  );
}
