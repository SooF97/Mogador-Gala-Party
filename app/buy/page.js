"use client";
import React, { useState } from "react";

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

import { ethers,utils } from "ethers";

import mogadorEvent from "../mogadorEvent.json";

import { useAddress, useSigner } from "@thirdweb-dev/react";

import Loading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Component() {

  const [quantity,setQuantity] = useState(0)
  const [ticketIsBuying, setTicketIsBuying] = useState(false);

  const userAddress = useAddress();
  const signer = useSigner();

  function handleQuantity(e) {
    console.log(e.target.value)
    setQuantity(e.target.value)
  }

  async function buyTicket() {
    setTicketIsBuying(true);
    try {
      const contract = new ethers.Contract(
        mogadorEvent.address,
        mogadorEvent.abi,
        signer
      );
      const finalPrice = quantity*(0.005)
      const weiValue = utils.parseUnits(finalPrice.toString(), "ether");
      const transaction = await contract.mintTicket(quantity, {value:weiValue});
      await transaction.wait();
      console.log(transaction);

      toast("Ticket Purchased successfully !", {
        type: "success",
      });
    } catch (error) {
      console.log(error);
    }
    setTicketIsBuying(false);
  }



  return (
    <div className="grid md:grid-cols-2 items-start max-w-6xl px-4 mx-auto gap-8 lg:gap-12 py-6">
      <div className="flex flex-col gap-4 md:gap-8">
      <ToastContainer />
        <div className="grid gap-2">
          <h1 className="font-bold text-2xl sm:text-3xl">Moroccan Moonlit Gala: Mogador's Spectacular Party.</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-0.5">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
          </div>
        </div>
        <div className="grid gap-2 md:gap-4">
          <div className="text-4xl font-bold">$3 (0.005 MATIC)</div>
          <div className="flex items-center gap-2 ">
            <Label className="sr-only" htmlFor="quantity">
              Quantity
            </Label>
            <Input className="w-20 text-white" id="quantity" min="1" placeholder="Quantity" type="number" onChange={handleQuantity} />
            <button
          onClick={buyTicket}
          className="bg-gray-950 text-white py-2 px-4 rounded-md hover:bg-gray-800"
        >
          Buy
        </button>
        {ticketIsBuying && (
          <div className="mt-2 flex justify-center">
            <Loading type="spin" color="black" height={20} width={20} />
          </div>
        )}
          </div>
        </div>
        <Separator className="border-gray-200 dark:border-gray-800" />
        <div className="grid gap-4 text-sm leading-loose">
          <p>
          Under the shimmering Moroccan moonlight, join us for an unforgettable evening of elegance and enchantment at the Moroccan Moonlit Gala: Mogador's Spectacular Party. Immerse yourself in the rich tapestry of Moroccan culture, indulge in tantalizing cuisine, and dance the night away amidst the stunning backdrop of Essaouira's historic Mogador fortress. Prepare to be swept off your feet in a celebration that marries tradition with modern allure, promising an experience that lingers long after the stars fade from the sky.
          </p>
          <p>
          Mogador Fortress Courtyard Avenue de l'Istiqlal Essaouira, Morocco - 25 May 2024 09h00 PM
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-8">
        <img
          alt="Product Image"
          className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
          height={600}
          src="https://www.crosalsafestival.com/var/news/storage/images/cssf/2023/spotlights/parties/gala_party/589955-3-eng-GB/gala_party_cssffullarticle.jpg"
          width={700}
        />
      </div>
    </div>
  )
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
