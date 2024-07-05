/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Button } from "./ui/Button";

export interface IBook {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
}

export interface IBookDetailed {
  hide: any;
}

type BookView = IBook & IBookDetailed;

export function BookDetailedView(props: BookView) {
  return (
    <div
      className="fixed w-full h-full top-0 bottom-0 left-0 right-0 bg-slate-950 bg-opacity-75 flex justify-center items-center"
      onClick={props.hide}
    >
      <div className="w-2/4 bg-white flex gap-4 flex-col p-8">
        <div className="w-full flex gap-4">
          <img
            src={props.imageUrl}
            alt={props.title}
            className="w-48 h-80 object-contain"
          />
          <div className="flex flex-col gap-6">
            <span className="text-sm">DETAILS</span>
            <h1 className="text-xl text-gray font-bold">{props.title}</h1>
            <p>{props.description}</p>
            <div className="flex flex-col gap-1">
              <span className="text-sm">AUTHOR</span>
              <p className="text-gray text-md font-medium">{props.author}</p>
            </div>
          </div>
        </div>
        <Button onClick={props.hide}>Close</Button>
      </div>
    </div>
  );
}

export function Book(props: IBook) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        className="bg-white border-2 border-smoke cursor-pointer rounded-md p-2 w-full h-full flex flex-col justify-center items-center gap-2 hover:ring-1 ring-orange"
        onClick={() => setShowDetails(true)}
      >
        <img
          src={props.imageUrl}
          alt={props.title}
          className="object-contain max-w-28 max-h-40"
        />
        <h2 className="text-gray text-md text-center font-semibold text-ellipsis whitespace-nowrap w-48 overflow-hidden">
          {props.title}
        </h2>
        <span className="text-sm text-muted text-center">{props.author}</span>
      </div>

      {showDetails && (
        <BookDetailedView
          hide={() => setShowDetails(false)}
          title={props.title}
          description={props.description}
          imageUrl={props.imageUrl}
          author={props.author}
        />
      )}
    </>
  );
}
