import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-blue-100 h-full p-4 rounded-xl px-4">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="https://img5.pic.in.th/file/secure-sv1/448271118_451485737746935_5538182633225395576_n5ad2b8b1391f4d1f.md.jpg"
          width={500}
          height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Chakrit Norm</h1>
        <p className="text-base">Software Engineer</p>
      </div>

      <div className="py-10 text-center ">" May the force be with you "</div>
      <div className="p-6 mx-1 xl:mx-6 bg-blue-300 rounded-md">
        <p>
          <b>Age:</b> 26
        </p>
        <p>
          <b>Status:</b> Single
        </p>
        <p>
          <b>Location:</b> Bangkok
        </p>
      </div>
    </div>
  );
};

export default Profile;
