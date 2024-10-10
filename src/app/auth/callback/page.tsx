"use client";

import { checkAuthStatus } from "@/actions/auth.actions";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["authCheck"],
    queryFn: async () => await checkAuthStatus(),
  });

  useEffect(() => {
    if (!isLoading) {
      if (data?.success) {
        router.push("/");
      } else {
        router.push("/auth");
      }
    }
  }, [data, isLoading, router]);

  return (
    <div className="mt-20 w-full flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader className="w-10 h-10 animate-spin text-muted-foreground" />
        <h3 className="text-xl font-bold">Checking authentication...</h3>
        <p>Please wait</p>
      </div>
    </div>
  );
};

export default Page;
