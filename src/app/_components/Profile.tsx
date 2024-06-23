import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-black h-full p-4 rounded-xl px-4">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/mypro.jpg"
          width={500}
          height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white">Chakrit Norm</h1>
        <p className="text-base text-white">Software Engineer</p>
      </div>

      <div className="py-10 text-center  text-white">" May the force be with you "</div>
      <div className="p-6 mx-1 xl:mx-6 bg-red-900 rounded-md text-white">
        <p>
          <b className="text-white">Age:</b> 26
        </p>
        <p>
          <b className="text-white">Status:</b> Single
        </p>
        <p>
          <b className="text-white">Location:</b> Bangkok
        </p>
      </div>
    </div>
  );
};

export default Profile;
