"use client";

import { axiosClient } from "../../service/axios";

export default function Search() {
  return (
    <main className="flex flex-col gap-8 max-w-7xl mx-auto px-8 sm:px-16 justify-self-start pt-4">
      <section>
        <p className="text-xs mt-4"> 300+ Stays for 5 number of guests</p>
        <h1 className="text-3xl font-semibold"> Satys in Mars</h1>

        <div className="hidden md:inline-flex mt-4">
          <button
          onClick={async()=>{
            const {data} = await  axiosClient.delete("/api/collaborator/delete/f089c674-532a-4668-9183-20e1b37797d6")
           console.log(data)
          }}
            type="button"
            className="px-4 py-2 outline-none hover:shadow-lg border rounded-full active:scale-95 transition-all"
          >
            Cancellations Flexibility
          </button>
          <button type="button">Type of plafe</button>
          <button type="button">Price</button>
          <button type="button"></button>
        </div>
      </section>
    </main>
  );
}
