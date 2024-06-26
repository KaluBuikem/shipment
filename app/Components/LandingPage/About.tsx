import { BiWorld } from "react-icons/bi";
import { BsFillFolderFill } from "react-icons/bs";
import { FaKey } from "react-icons/fa";

function About() {
  return (
    <div className="w-full px-7 pt-[5rem] mb-[4rem]" id="about">
      <p className="text-red-500 mt-3 font-medium">About</p>
      <div className="w-full flex md:flex-row flex-col mt-3 px-7 gap-x-8">
        <p className="w-full md:text-5xl text-2xl md:text-left text-center font-extrabold">
          Secure your business <br />
          needs
        </p>
        <p className="w-full md:text-right md:p-0 px-3 text-justify md:m-0 mt-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non adipisci
          <br /> enim animi culpa voluptatum quisquam cupiditate? Minima
          <br /> aut, esse culpa dignissimos eaque dolorem! Iste, nobis
          <br /> repellat beatae debitis delectus optio?
        </p>
      </div>

      <div className="w-full flex md:flex-row flex-col justify-between mt-[5rem]">
        <div className="md:w-30% w-full drop-shadow-xl h-[14rem] rounded-md p-3 ">
          <div className="p-2 w-[2rem] bg-red-300 text-red-600 rounded-md">
            <BiWorld />
          </div>
          <p className="text-center font-bold">
            Your international shipping solution
          </p>
          <p className="text-xs mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            porro repellendus suscipit ipsam dolor totam architecto fugit
            voluptatibus, illo perspiciatis dolores! Ea saepe quisquam qui.
            Laboriosam accusantium ipsa ea quisquam!
          </p>
        </div>
        <div className="md:w-30% w-full drop-shadow-xl h-[14rem] rounded-md p-3">
          <div className="p-2 w-[2rem] bg-red-300 text-red-600 rounded-md">
            <BsFillFolderFill />
          </div>
          <p className="text-center font-bold">
            One place to save all your documents
          </p>
          <p className="text-xs mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            porro repellendus suscipit ipsam dolor totam architecto fugit
            voluptatibus, illo perspiciatis dolores! Ea saepe quisquam qui.
            Laboriosam accusantium ipsa ea quisquam!
          </p>
        </div>
        <div className="md:w-30% w-full drop-shadow-xl h-[14rem] rounded-md p-3">
          <div className="p-2 w-[2rem] bg-red-300 text-red-600 rounded-md">
            <FaKey />
          </div>
          <p className="text-center font-bold">
            Secure, Transparent and reliable
          </p>
          <p className="text-xs mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            porro repellendus suscipit ipsam dolor totam architecto fugit
            voluptatibus, illo perspiciatis dolores! Ea saepe quisquam qui.
            Laboriosam accusantium ipsa ea quisquam!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
