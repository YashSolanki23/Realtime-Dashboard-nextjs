import Link from "next/link";

export default function Sidebar(){

  return (
         <aside className="w-64 bg-gray-900 text-white p-4">
      <h2 className="text-lg font-semibold mb-6">
        Dashboard
      </h2>

    <nav className="space-y-3 flex flex-col">
      
      <Link href="/dashboard">Home</Link>
       <Link href="/dashboard/tasks">Tasks</Link>
        <Link href="/dashboard/presence">Presence</Link>
    </nav>

     </aside>
  )
}