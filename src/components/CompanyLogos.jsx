import {  skillLogos, skillLogos2, skillLogos3 } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        My skills
      </h5>
      <ul className="flex w-full ">
        {skillLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={50} height={28} alt={logo} />
          </li>
        ))}
      </ul>
      <ul className="flex w-[80%] mx-auto mt-1 ">
        {skillLogos2.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={50} height={28} alt={logo} />
          </li>
        ))}
      </ul>
      <ul className="flex w-[30%] mx-auto mt-1 ">
        {skillLogos3.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={50} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;