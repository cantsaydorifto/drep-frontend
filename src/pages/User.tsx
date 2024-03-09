import Image, { type StaticImageData } from "next/image";

export default function User({ user }: { user: User }) {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-center text-sm font-semibold text-gray-400">
        You’re asking question to
      </p>
      <div className="flex flex-col items-center">
        <Image
          className="w-[140px] rounded-lg"
          src={user.img}
          alt={user.username}
        />
        <span className="rounded-lg bg-orange-200 p-4 text-sm font-semibold text-orange-600">
          {user.walletId}
        </span>
      </div>
      <h2 className="text-4xl font-semibold">{user.username}</h2>
      <div className="flex h-[100px] w-[280px] rounded-lg bg-neutral-100 px-3">
        <div className="relative flex-1 ">
          <svg className="h-full w-full" viewBox="0 0 100 100">
            <circle
              className="stroke-current text-gray-200"
              stroke-width="6"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            ></circle>
            <circle
              className="progress-ring__circle  stroke-current text-orange-500"
              stroke-width="6"
              stroke-linecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke-dashoffset={`calc(400 - (400 * 45) / 100)`}
            ></circle>
          </svg>
          <span className="absolute left-6 top-10 font-semibold text-orange-500">
            {Math.floor((user.questionsAnswered / user.totalQuestions) * 100) +
              "%"}
          </span>
        </div>
        <div className="flex flex-[2_2_0%] flex-col justify-center gap-2 pl-3 text-2xl">
          <p>
            <span className="font-semibold">{user.questionsAnswered}</span>
            <span className="font-semibold text-gray-400">
              {" / " + user.totalQuestions}
            </span>
          </p>
          <span className="inline-block text-sm font-semibold text-gray-400">
            questions answered
          </span>
        </div>
      </div>
    </div>
  );
}

interface User {
  username: string;
  walletId: string;
  questionsAnswered: number;
  totalQuestions: number;
  img: string | StaticImageData;
}
