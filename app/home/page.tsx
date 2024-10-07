import React from "react"; 
import { Metadata } from "next"; 
import Page from './'; 

export const metadata: Metadata = {
  title: "Moe Novel",
  description: "Website for novel lover",
};

export default function Home1Page() {
  return <Page />;
}