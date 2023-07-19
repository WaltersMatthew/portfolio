import React from "react";
import Freejob from "./Freejob";

function Freelance() {
    return (
        <div>
            <h1 className="text-2xl flex justify-center m-4 text-[75px] md:text-[100px] mt-32 mb-20 font-header underline">
                Freelance Work
            </h1>
            <div className="grid md:grid-cols-3 mx-10 gap-10">
                <Freejob
                    job="Sidle Entertainment"
                    src="/sidle.png"
                    description="loremIpsum"
                    href="https://www.sidleentertainment.com"
                />
                <Freejob
                    job="California Drums"
                    src="/cadrums.png"
                    description="Lorem Ipsum"
                    href="https://www.cadrums.com"
                />
                <Freejob
                    job="Marching Huskies"
                    src="/ch.png"
                    description="Lorem Ipsum"
                    href="https://www.marchinghuskies.com"
                />
            </div>
        </div>
    );
}

export default Freelance;
