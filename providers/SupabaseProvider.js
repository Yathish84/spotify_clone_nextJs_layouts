"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from '@supabase/auth-helpers-react';

import React, { useState } from 'react'

export default function SupabaseProvider({children}) {

    const supabaseClient = createClientComponentClient()
    console.log(supabaseClient)
  return (
   <SessionContextProvider supabaseClient={supabaseClient}>
        {children}
   </SessionContextProvider>
  )
}
