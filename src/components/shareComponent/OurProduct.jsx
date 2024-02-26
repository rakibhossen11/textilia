import React from 'react';
import Headline from '../HomeComponents/Headline';
import Sologan from '../HomeComponents/Sologan';
import ProjectCard from '../HomeComponents/ProjectCard';
import project1 from "../../images/product/project_1.jpg";
import project2 from "../../images/product/project_2.jpg";
import project3 from "../../images/product/project_3.jpg";
import project4 from "../../images/product/project_4.jpg";

const OurProduct = () => {
    return (
        <section className="grid grid-cols-2 items-center mt-[100px] px-[60px]">
        <div>
          <Headline text={"Our Projects"} />
          <Sologan text={"Design to Delivery The Garment Project Unveiled"} />
          <p className="font-poppins text-[14px] text-[#767472]">
            Lorem ipsum dolor sit amet, consecte adipiscing elit seddo eiusmod
            tempor dolore magna aliqua inventore veritatis et quasi.
          </p>
          <ProjectCard
            img={project1}
            head={"Couture Innovate Project"}
            para={"Sed ut perspiciatis unde."}
          />
        </div>
        <div>
          <ProjectCard
            img={project2}
            head={"Couture Innovate Project"}
            para={"Sed ut perspiciatis unde."}
          />
          <ProjectCard
            img={project3}
            head={"Couture Innovate Project"}
            para={"Sed ut perspiciatis unde."}
          />
          <ProjectCard
            img={project4}
            head={"Couture Innovate Project"}
            para={"Sed ut perspiciatis unde."}
          />
        </div>
      </section>
    );
};

export default OurProduct;