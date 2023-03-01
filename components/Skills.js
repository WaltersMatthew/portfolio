import React from "react";
import SkillCard from "./SkillCard";

function Skills(props) {
    return (
        <div className="p-4">
            <p className="text-2xl flex justify-center m-4 text-[75px] md:text-[100px] mt-32 mb-20 font-header underline">
                Skills
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 py-4">
                <SkillCard src="/html.png" alt="html" skill="HTML 5" />
                <SkillCard src="/css.png" alt="css" skill="CSS 3" />
                <SkillCard src="/js.png" alt="javascript" skill="JavaScript" />
                <SkillCard src="/node.png" alt="node" skill="Node.js" />
                <SkillCard src="/react.png" alt="react" skill="React" />
                <SkillCard
                    src="/rn.png"
                    alt="react native"
                    skill="React Native"
                />
                <SkillCard src="/python.png" alt="python" skill="Python" />
                <SkillCard
                    src="/bootstrap.png"
                    alt="bootstrap"
                    skill="Bootstrap"
                />
                <SkillCard
                    src="/tailwind.png"
                    alt="tailwind"
                    skill="Tailwind"
                />
                <SkillCard src="/django.png" alt="django" skill="Django" />
                <SkillCard src="/express.png" alt="express" skill="Express" />
                <SkillCard
                    src="/postgres.png"
                    alt="postgres"
                    skill="PostgreSQL"
                />
            </div>
        </div>
    );
}

export default Skills;
