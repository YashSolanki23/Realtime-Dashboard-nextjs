import Card from "@/components/card";

export default function DashboardPage(){

  return <div className="grid grid-cols-2 gap-4 ">
       
       <Card >
        Tasks overview
       </Card>

       <Card>
        Online users Overview
       </Card>
  </div>
}