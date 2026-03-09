import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function DashboardLayout({
  children
}:{children:React.ReactNode}){

  return (
    <div className="flex min-h-screen">
     
    <Sidebar />

      
    <main className="flex-1 p-6 bg-gray-100">
      <DashboardHeader />

      {children}
    </main>

    </div>
  )

}