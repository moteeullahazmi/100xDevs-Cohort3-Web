// sm, md, lg, xl, 2xl

export function SidebarClass1() {
   return <div className="flex">
    <div className="transition-all ease-in-out duration-150  md:w-96   h-screen w-0">
    Sidbar
    </div>
    <div className="bg-green-800 w-full h-screen">Content</div>
   </div>
}