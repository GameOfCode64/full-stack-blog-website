import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-3xl font-bold"> Blog Not Found</h1>
      <Link href="/" className="underline mt-4">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
