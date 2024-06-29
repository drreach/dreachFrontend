"use client";
import FailedToFetch from "@/components/FailedToFetch";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <FailedToFetch message={error.message} />;
}
