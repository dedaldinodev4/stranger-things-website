import React from "react";
import IgImg1 from "../../assets/characters/eleven.jpg";
import IgImg2 from "../../assets/characters/mad.jpg";
import IgImg3 from "../../assets/characters/lucas.jpg";
import IgImg4 from "../../assets/characters/will2.jpg";
import IgImg5 from "../../assets/characters/dustin.jpg";
import IgImg6 from "../../assets/characters/mike.jpg";
import CharacterImg from "./CharacterImg";

const Character = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-4 dark:bg-slate-800">
      <p className="text-slate-900 dark:text-white text-2xl font-bold">Characters</p>
      <p className="pb-4 text-slate-500 dark:text-slate-400">Stranger Things is a television-format series created by the Duffer Brothers.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <CharacterImg socialImg={IgImg1} name="Eleven" />
        <CharacterImg socialImg={IgImg2} name="Max Mayfield" />
        <CharacterImg socialImg={IgImg3} name="Lucas Sinclair" />
        <CharacterImg socialImg={IgImg4} name="Will Byers" />
        <CharacterImg socialImg={IgImg5} name="Dustin Henderson"/>
        <CharacterImg socialImg={IgImg6} name="Mike Wheeler"/>
      </div>
    </div>
  );
};

export default Character;
