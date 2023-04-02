import Job from "./job";

export default function Experience() {
    return (
        <div className="">
            <p className="text-2xl flex justify-center m-4 text-[75px] md:text-[100px] mt-32 mb-20 font-header underline">
                Experience
            </p>
            <div className="grid md:grid-cols-3 mx-10 gap-10">
                <Job
                    title="Developer"
                    company="Making Co"
                    time="11/22-1/23"
                    description="As a React Native developer, I build an innovative and user-friendly mobile app for both iOS and Android, while adhering to industry standards and best practices. I excel at rapidly prototyping and developing the cross-platform app that is flexible and scalable for future updates and enhancements. Collaborating with other developers and designers, I create unique solutions for user stories, using agile methodologies and feedback loops. Working in a fast-paced, dynamic startup environment, I have been able to adapt and experiment with new features and functionality, while delivering a high-quality product within tight deadlines. Using Asana and Git, I have tracked and fixed bugs, ensuring a seamless user experience."
                    urls={["https://www.makingzine.com"]}
                />
                <Job
                    title="Volunteer Mentor"
                    company="Code the Dream Bootcamp"
                    time="1/23 - current"
                    description="As a mentor for groups of students learning React and JavaScript, I provide guidance and support that help students improve their skills and understanding of the language and framework. This includes reviewing and providing feedback on students' homework and projects, leading weekly group discussions and coding sessions to review key concepts and provide additional practice opportunities. Through this approach, I aim to create a supportive and collaborative learning environment that helps students achieve their goals and become proficient developers."
                    urls={["https://www.codethedream.org"]}
                />
                <Job
                    title="Freelance Contractor"
                    company="BoldyFine LLC, California Drums"
                    time="8/19-8/22"
                    description="During my time as a freelance frontend developer, I gained experience working with both Wordpress and Squarespace platforms to design and develop visually compelling e-commerce and promotional websites. With my proficiency in CSS, JavaScript, and agile methodologies, I successfully delivered high-quality work, exceeding client expectations and providing exceptional customer service. At California Drums, I created a full-scale e-commerce site from scratch, while at Boldy Fine, I utilized Squarespace to create professional and effective websites that drove results. These experiences have equipped me with the skills and knowledge necessary to create impactful and engaging websites that meet client needs."
                    urls={[
                        "https://www.marchinghuskies.com",
                        "https://www.sidleentertainment.com",
                        "https://www.cadrums.com",
                    ]}
                />
            </div>
        </div>
    );
}
