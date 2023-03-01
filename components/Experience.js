import Job from "./job";

export default function Experience() {
    return (
        <div className="">
            <p className="text-2xl flex justify-center m-4 text-[75px] md:text-[100px] mt-32 mb-20 font-header underline">
                Experience
            </p>
            <div className="grid md:grid-cols-3 mx-10 gap-10">
                <Job
                    title="Volunteer Mentor"
                    company="Code the Dream Bootcamp"
                    time="1/23 - current"
                    description="As a mentor for groups of students learning React and JavaScript, I provide guidance and support that help students improve their skills and understanding of the language and framework. This includes reviewing and providing feedback on students' homework and projects, leading weekly group discussions and coding sessions to review key concepts and provide additional practice opportunities. Through this approach, I aim to create a supportive and collaborative learning environment that helps students achieve their goals and become proficient developers."
                />
                <Job
                    title="Frontend Developer"
                    company="California Drums"
                    time="11/22-1/23"
                    description="I was contracted to design and develop the frontend for a full-scale e-commerce site from scratch. As part of this contract, I uploaded 1,600 products to the Bluehost database and accessed them for images and product information as well as calculating local sales tax and shipping costs for customer orders. This project utilized Wordpress, CSS, and agile methodologies to stay on track. Throughout the project, I maintained a focus on delivering high-quality work and providing exceptional customer service, resulting in a successful e-commerce site that met the client's needs and exceeded their expectations."
                />
                <Job
                    title="Frontend Developer"
                    company="Boldy Fine"
                    time="8/19-8/22"
                    description="As a Squarespace designer and developer for Boldlyfine, I created visually compelling and unique websites for clients. I added custom code blocks and styles while training clients on how to maintain their sites. By utilizing Squarespace, JavaScript, and CSS and engaging in paired programming, I successfully created and deployed professional and effective websites that exceeded client expectations. My experience has equipped me with the skills and knowledge necessary to create impactful and engaging websites that drive results."
                />
            </div>
        </div>
    );
}
