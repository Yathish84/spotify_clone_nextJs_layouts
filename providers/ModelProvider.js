"use client";

import { useEffect, useState } from "react";
import AuthModel from "@/components/AuthModel";
import UploadModal from "@/components/UploadModal";


export default function ModelProvider() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }
  return (
    <>
      <AuthModel />
      {/* <SubscribeModal products={products} /> */}
      <UploadModal />
    </>
  )
}


