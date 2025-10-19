import Image from "next/image";

export default function Root() {

  return (
    <div className="h-full p-lg flex flex-col relative overflow-hidden">
      <div className="flex flex-row items-center min-h-0 justify-between">
        <div className="flex flex-col gap-2xl min-h-0 pb-2xl">
          <div className="">
            <h1 className="text-hero">Chat Smarter.<br></br>Connect Faster.<br></br>Collaborate Effortlessly</h1>
            <p className="mt-4 text-lg text-gray-600">Expertience the instant communication with our real-time WebChat application. Seemlessly connect with your team, friends and familly</p>
          </div>
          <div className="bg-primary py-md px-lg rounded-2xl w-fit text-h3 cursor-pointer hover:brightness-75">Get Started Free</div>
        </div>
        <Image src="/images/landingLogo.svg" alt="Landing Logo" width={750} height={750} />
      </div>
      <div className="absolute top-150 right-160 z-10 rotate-10">
        <svg className="w-340 h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,96L21.8,96C43.6,96,87,96,131,90.7C174.5,85,218,75,262,101.3C305.5,128,349,192,393,186.7C436.4,181,480,107,524,90.7C567.3,75,611,117,655,144C698.2,171,742,181,785,160C829.1,139,873,85,916,58.7C960,32,1004,32,1047,53.3C1090.9,75,1135,117,1178,128C1221.8,139,1265,117,1309,138.7C1352.7,160,1396,224,1418,256L1440,288L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
      </div>
    </div>
  );
}