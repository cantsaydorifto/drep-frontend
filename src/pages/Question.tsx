import User from "./User";
import userImg from "../../public/user.png";

export default function Question({ question }: { question: Question | null }) {
  return (
    <div className="flex w-full max-w-[1318px] flex-col gap-4 rounded-lg bg-white lg:flex-row lg:pr-12">
      <div className="flex-[2_2_0%] py-12 lg:border-r lg:border-gray-200">
        <div className="flex items-center gap-4 pl-12">
          <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-200">
            <LeftArrow />
          </button>
          <h1 className="text-xl font-semibold">Preview</h1>
        </div>
        <div className="mt-12 flex flex-col gap-6 px-12">
          <TitleAndInput title="Theme" />
          <TitleAndInput title="Question Title" />
          <TitleAndInput
            textArea
            title="Question Description"
            inputPlaceholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, amet? Tempore soluta ipsam veniam quidem, quasi odit minus maxime porro, itaque nesciunt nam explicabo esse sunt, accusantium assumenda? Dicta, architecto."
          />
        </div>
        <div className="mt-8 flex justify-between border-gray-200 pl-12 pr-5 pt-6 lg:border-t">
          <button className="flex h-10 h-11 items-center justify-center rounded-lg bg-neutral-200 px-8 text-sm">
            Back
          </button>
          <button className="flex h-10 h-11 items-center justify-center rounded-lg bg-neutral-200 bg-gradient-to-b from-orange-300 to-orange-600 px-8 text-sm text-white">
            Submit &#10003;
          </button>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center pb-8 lg:pb-0">
        <User
          user={{
            img: userImg,
            questionsAnswered: 700,
            totalQuestions: 730,
            username: "Drep of NMKR",
            walletId: "uqwdbd8271gd98n13241",
          }}
        />
      </div>
    </div>
  );
}

interface Question {
  theme: string;
  questionTitle: string;
  questionDescription: string;
}

function LeftArrow() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3584 4.55806C13.6025 4.80214 13.6025 5.19786 13.3584 5.44194L8.80039 10L13.3584 14.5581C13.6025 14.8021 13.6025 15.1979 13.3584 15.4419C13.1144 15.686 12.7186 15.686 12.4746 15.4419L7.47456 10.4419C7.23048 10.1979 7.23048 9.80214 7.47456 9.55806L12.4746 4.55806C12.7186 4.31398 13.1144 4.31398 13.3584 4.55806Z"
        fill="#8C8C8C"
      />
    </svg>
  );
}

function TitleAndInput({
  title,
  inputPlaceholder,
  textArea,
}: {
  title?: string;
  inputPlaceholder?: string;
  textArea?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-semibold text-gray-600">{title ?? "Lorem"}</h2>
      <div className="relative mt-2">
        {textArea ? (
          <textarea
            className="h-[182px] w-full resize-none overflow-hidden rounded-lg bg-neutral-100 py-3 pl-5 pr-8 text-sm"
            placeholder={inputPlaceholder ?? "Lorem ipsum dolor sit amet"}
          />
        ) : (
          <input
            type="text"
            className="w-full rounded-lg bg-neutral-100 px-5 py-3 text-sm"
            placeholder={inputPlaceholder ?? "Lorem ipsum dolor sit amet"}
          />
        )}
        <svg
          className="pointer-events-none absolute right-3 top-3 h-5 w-5 text-gray-400"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.7404 1.18391C14.9845 0.939835 15.3802 0.939835 15.6243 1.18391L19.1599 4.71944C19.2771 4.83665 19.3429 4.99562 19.3429 5.16138C19.3429 5.32714 19.2771 5.48611 19.1599 5.60332L6.19623 18.5669C6.07902 18.6842 5.92004 18.75 5.75427 18.75L2.21884 18.7499C1.87368 18.7499 1.59387 18.4701 1.59386 18.1249L1.59375 14.5895C1.59374 14.4237 1.65959 14.2647 1.77681 14.1475L14.7404 1.18391ZM15.1824 2.50974L2.84376 14.8483L2.84384 17.4999L5.49541 17.5L17.834 5.16138L15.1824 2.50974Z"
            fill="#8C8C8C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.2047 4.71937C11.4488 4.4753 11.8445 4.4753 12.0886 4.71937L15.6241 8.25492C15.8682 8.49899 15.8682 8.89472 15.6241 9.1388C15.3801 9.38288 14.9843 9.38288 14.7402 9.1388L11.2047 5.60326C10.9606 5.35918 10.9606 4.96345 11.2047 4.71937Z"
            fill="#8C8C8C"
          />
        </svg>
      </div>
    </div>
  );
}
