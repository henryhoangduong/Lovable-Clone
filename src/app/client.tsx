"use client";
import { useTRPC } from "@/trpc/client";
import { caller } from "@/trpc/server";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Client = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.createAI.queryOptions({ text: "Antoino server" })
  );
  return <div>{JSON.stringify(data)}</div>;
};
