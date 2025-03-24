import Job from "./job";

export default function Experience() {
    return (
        <div>
            <p className="text-2xl flex justify-center m-4 text-[75px] md:text-[100px] mt-32 mb-20 font-header underline">
                Experience
            </p>
            <div className="grid md:grid-cols-4 mx-10 gap-10">
                <Job
                    title="Salesforce Admin & Developer"
                    company="Emerson Collective"
                    time="1/24-6/25"
                    description="I ensure data integrity across Salesforce and integrated platforms by maintaining accurate donor, grantee, and communications records while optimizing workflows for reporting and compliance. I develop custom Lightning Web Components (LWC) and automate business processes with Apex and Flows to improve system efficiency and reduce manual work. Additionally, I provide frontline Salesforce support by troubleshooting issues, managing user requests, and delivering training to enhance team self-sufficiency. My work ensures smoother operations, better data reliability, and increased adoption of Salesforce across teams."
                    urls={[
                        {
                            href: "https://docs.google.com/presentation/d/1wT_kpGNK_Ax6hYaFBYGNk2g8G9UErnm-/",
                            label: "Salesforce Portfolio",
                        },
                    ]}
                />

                <Job
                    title="Developer"
                    company="Making Co"
                    time="11/22-1/23"
                    description="As a React Native developer, I build an innovative and user-friendly mobile app for both iOS and Android, while adhering to industry standards and best practices. I excel at rapidly prototyping and developing the cross-platform app that is flexible and scalable for future updates and enhancements. Collaborating with other developers and designers, I create unique solutions for user stories, using agile methodologies and feedback loops. Working in a fast-paced, dynamic startup environment, I have been able to adapt and experiment with new features and functionality, while delivering a high-quality product within tight deadlines. Using Asana and Git, I have tracked and fixed bugs, ensuring a seamless user experience."
                    urls={[
                        {
                            href: "https://www.makingzine.com",
                            label: "Making Co",
                        },
                    ]}
                />

                <Job
                    title="Cohort Instructional Lead"
                    company="Code the Dream Bootcamp"
                    time="1/23 - current"
                    description="As a cohort instructional lead, I create and deliver a comprehensive JavaScript bootcamp curriculum, covering essential programming concepts and advanced JavaScript techniques. I provide constructive feedback to students, fostering their growth and mastery of JavaScript programming concepts and best practices. Additionally, I guide students through weekly group discussions and coding sessions, offering support to help them improve their skills and understanding of the language and frameworks. Through this approach, I established a supportive and collaborative learning environment, enabling students to achieve their goals and become proficient developers. In my time with Code the Dream, I increased the passing rate in my cohort from 40% to 67%"
                    urls={[
                        {
                            href: "https://www.codethedream.org",
                            label: "Code The Dream",
                        },
                    ]}
                />

                <Job
                    title="Freelance Contractor"
                    company="BoldyFine LLC"
                    time="8/19-8/22"
                    description="During my time as a freelance frontend developer, I gained experience working with both Wordpress and Squarespace platforms to design and develop visually compelling e-commerce and promotional websites. With my proficiency in CSS, JavaScript, and agile methodologies, I successfully delivered high-quality work, exceeding client expectations and providing exceptional customer service. At California Drums, I created a full-scale e-commerce site from scratch, while at Boldy Fine, I utilized Squarespace to create professional and effective websites that drove results. These experiences have equipped me with the skills and knowledge necessary to create impactful and engaging websites that meet client needs."
                    urls={[
                        {
                            href: "https://www.marchinghuskies.com",
                            label: "Marching Huskies",
                        },
                        {
                            href: "https://www.sidleentertainment.com",
                            label: "Sidle Entertainment",
                        },
                        {
                            href: "https://www.cadrums.com",
                            label: "California Drums",
                        },
                    ]}
                />
            </div>
        </div>
    );
}
