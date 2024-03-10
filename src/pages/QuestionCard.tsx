export default function QuestionCard() {
  return (
    <div className="flex w-full max-w-[650px] flex-col gap-3 rounded-lg border bg-white pt-8">
      <div className="flex items-center justify-between px-5">
        <span className="inline-block text-sm font-semibold text-gray-400">
          Question Asked By ____
        </span>
        <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-200">
          ?
        </button>
      </div>
      <p className="px-5 font-medium">Would oyu adf aekf easjk feasjk df?</p>
      <div className="gap-4 rounded-b-lg bg-neutral-100 px-5 py-4">
        <span className="inline-block flex h-[40px] w-fit items-center justify-center rounded-lg bg-orange-200 p-1 text-sm font-semibold text-orange-400">
          Answered by <span className="text-orange-500">____</span>
        </span>
        <p className="mt-4 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla unde
          dolore dolorum minus esse repellat nostrum iste corporis dicta! Unde
          expedita minus nobis at in temporibus laboriosam voluptatum. Quae,
          corrupti!?
        </p>
        <div className="mt-8">
          <div className="flex gap-2">
            <span className="text-sm font-medium text-gray-400">TAGS</span>
            <span className="flex items-center rounded-full bg-white px-3 text-xs">
              Pension
            </span>
            <span className="flex items-center rounded-full bg-white px-3 text-xs">
              Inflation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
