import React from "react";

const About = () => {
  return (
    <div className="flex justify-center md:px-36 mb-44 ">
      <div className="flex flex-col justify-center space-y-10">
        <h2 className="text-5xl font-semibold flex justify-center uppercase">
          Diverse-Net
        </h2>
        <h4 className="text-2xl  uppercase w-full px-8 text-center md:px-0  ">
          online community dedicated to sharing travel experiences, tips, and
          recommendations among travel enthusiasts around the world. Whether
          you're looking for inspiration for your next destination, expert
          advice, or simply want to share your own adventures, you've come to
          the right place!
        </h4>
        <h3 className="flex justify-center items-center text-5xl py-10 font-semibold">
          What we Offer?{" "}
        </h3>
        <ul className=" md:flex w-full ">
          <div className="md:w-1/4 md:px-4 text-center">
            <li className="text-3xl uppercase px-1 font-bold md:h-24  h-20">
              Share your Stories:
            </li>
            <p className="font-medium h-28 text-xl ">
              Post your most exciting and unique travel experiences to inspire
              other community members.
            </p>
            <img
              className="w-full md:mb-5 h-64 mb-16 "
              src="https://i0.wp.com/montanerosviajeros.com/wp-content/uploads/2020/03/tuk-tuk-jeni-jorge-lago-chula-e1584447674669.jpg?fit=1436%2C916&ssl=1"
              alt="travelers"
            />
          </div>
          <div className="md:w-1/4 px-4 text-center ">
            <li className="text-3xl uppercase px-1 font-bold md:h-24  h-20">
              Connect with Other Travelers:{" "}
            </li>
            <p className="font-medium h-28 text-xl ">
              Meet travel-passionate people from all over the world, exchange
              ideas and make new friends.{" "}
            </p>
            <img
              className="w-full md:mb-5 h-64 mb-16  "
              src="https://media.traveler.es/photos/6137773ed7c7024f9175f47f/master/w_1600%2Cc_limit/104028.jpg"
              alt="friends"
            />
          </div>
          <div className="md:w-1/4 px-4 text-center ">
            <li className="text-3xl uppercase px-1 font-bold md:h-24  h-20">
              Find Personalized Recommendations:{" "}
            </li>
            <p className="font-medium h-28 text-xl ">
              Discover destinations, activities and accommodations recommended
              by real travelers that fit your interests and budget.{" "}
            </p>{" "}
            <img
              className="w-full md:mb-5 h-64 mb-16 "
              src="https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/03/Sitios-tur%C3%ADsticos-en-el-mundo.jpg"
              alt="city"
            />
          </div>
          <div className="md:w-1/4 px-4 text-center ">
            <li className="text-3xl uppercase px-1 font-bold md:h-24  h-20">
              {" "}
              Discussion Forums:{" "}
            </li>
            <p className="font-medium h-28 text-xl ">
              {" "}
              Join lively conversations about everything travel-related, from
              packing tips to local restaurant recommendations.
            </p>
            <img
              className=" mb-5 h-64 object-cover "
              src="https://www.informador.mx/__export/1668221658544/sites/elinformador/img/2022/11/11/solitario_1_crop1668221188133.jpg_2024461655.jpg"
              alt="discussion forums"
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default About;
