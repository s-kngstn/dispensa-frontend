import { useState } from "react";
import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import Button from "../../src/components/ui/Button/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import Item from "../../src/ShoppingList/Item";

const shoppingList = [
  {
    name: "Oat milk",
    dateAdded: "2023-01-05",
    location: "Pantry",
  },
  {
    name: "Sourdough Bread",
    dateAdded: "2023-01-05",
    location: "Pantry",
  },
  {
    name: "Pesto",
    dateAdded: "2023-01-01",
    location: "Pantry",
  },
  // More people...
];

export default function ShoppingList() {
  return (
    <PageWrapper>
      <div>
        <div className="sm:flex sm:items-center mb-4">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">
              Shopping List
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of items to pick up on your next shopping trip.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Button text="Add item" />
          </div>
        </div>
        <div className="border-black border-3 rounded-md">
          <div className="flex flex-1 justify-between p-4 border-b-3 border-black">
            <div className="flex flex-1">
              <form className="flex w-full md:ml-0" action="#" method="GET">
                <label htmlFor="text" className="sr-only">
                  Add item
                </label>
                <div className="relative w-full text-black focus-within:text-black">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    <PlusIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <input
                    id="text"
                    className="block h-full w-full border-transparent py-2 pl-8 pr-4 bg-dispensa-off-white text-black placeholder-black font-semibold focus:border-transparent focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-md"
                    placeholder="Add"
                    type="text"
                    name="text"
                  />
                </div>
              </form>
            </div>
          </div>
          {shoppingList.map((item, index) => {
            return <Item key={index} item={item} />;
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
