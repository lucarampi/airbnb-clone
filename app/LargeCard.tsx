import Image from "next/image";
import { LargeCardType } from "../pages/api/getLargeCard";
import { getLargeCard } from "../utils/getLargeCard";

export default async function LargeCard() {
  let cardData = {} as LargeCardType;
  try {
    const { data } = await getLargeCard();
    cardData = { ...data };
  } catch (error) {
    if (error) {
      console.log(error);
      return (
        <div>
          <p>Error while loading data...</p>
          <p>{JSON.stringify(error)}</p>
        </div>
      );
    }
  }
  return (
    <section className="relative pb-12 mt-2 cursor-pointer">
      <div className="relative h-96 min-w-[300px] ">
        <Image
          className="rounded-xl object-cover"
          src={cardData.publicUrl}
          alt={cardData.title}
          fill
        />
      </div>

      <div className="absolute top-1/3 -translate-y-1/2 left-12">
        <h3 className="text-4xl mb-3 w-64 capitalize">{cardData.title}</h3>
        <p>{cardData.description}</p>
        <button
          className="text-sm shadow-sm hover:scale-105 active:scale-95 text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 transition-all"
          type="button"
        >
          {cardData.buttonText}
        </button>
      </div>
    </section>
  );
}
