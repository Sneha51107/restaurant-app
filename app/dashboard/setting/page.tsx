"use client"
import Link from "next/link"
export default function Setting()
{
    return(
        <div className="">
            <h1 className="text-2xl text-[#021A70]  font-bold">App Settings</h1>
            <div className="grid grid-cols-4 mt-4 hover:cursor-pointer gap-4">
             <div className="flex flex-col items-center justify-center w-75 h-43 text-center gap-1 bg-white border-2 rounded-lg border-blue-950">
             <Link href="/dashboard/setting/generalsetting"><span className="material-symbols-outlined text-[#021A70]" style={{ fontSize: "60px" }}>settings</span>
              <p className="text-xl text-[#021A70]">General</p>
              <p className="text-sm text-[#021A70]">Configure general site settings</p></Link> 
             </div>
              <div className="flex flex-col items-center justify-center w-75 h-43 text-center gap-1 bg-white border-2 rounded-lg border-blue-950">
              <Link href="/dashboard/setting/outgoingmall"><span className="material-symbols-outlined text-[#021A70]" style={{ fontSize: "60px" }}>outgoing_mail</span></Link>
              <p className="text-xl text-[#021A70]">Outgoing Mail</p>
              <p className="text-sm text-[#021A70]">Configure outgoing email service prefernce</p>
             </div>
              <div className="flex flex-col items-center justify-center w-75 h-43 text-center gap-1 bg-white border-2 rounded-lg border-blue-950">
               <Link href="/dashboard/setting/appearance"><span className="material-symbols-outlined text-[#021A70]" style={{ fontSize: "60px" }}>palette</span></Link>
              <p className="text-xl text-[#021A70]">Apperanace</p>
              <p className="text-sm text-[#021A70]">Configure the site icon and background</p>
             </div>
              <div className="flex flex-col items-center justify-center w-75 h-43 text-center gap-1 bg-white border-2 rounded-lg border-blue-950">
  <Link href="/dashboard/setting/currency"><span className="material-symbols-outlined text-[#021A70]" style={{ fontSize: "60px" }}>attach_money</span></Link>
              <p className="text-xl text-[#021A70]">Currency</p>
              <p className="text-sm text-[#021A70]">Configure site currency symbology</p>
             </div>
             <div className="flex flex-col items-center justify-center w-75 h-43 text-center gap-1 bg-white border-2 rounded-lg border-blue-950">
                <Link href="/dashboard/setting/Tax"><span className="material-symbols-outlined text-[#021A70]" style={{ fontSize: "60px" }}>universal_currency</span></Link> 
              <p className="text-xl text-[#021A70]">Tax</p>
              <p className="text-sm text-[#021A70]">Configure tax rate type & implementation</p>
             </div>
             <div className="flex flex-col items-center justify-center w-75 h-43 text-center gap-1 bg-white border-2 rounded-lg border-blue-950">
              <span className="material-symbols-outlined text-[#021A70]" style={{ fontSize: "60px" }}>fingerprint</span>
              <p className="text-xl text-[#021A70]">Authentication</p>
              <p className="text-sm text-[#021A70]">Configure registration & related things</p>
             </div>
             <div className="flex flex-col items-center justify-center w-75 h-43 text-center gap-1 bg-white border-2 rounded-lg border-blue-950">
              <span className="material-symbols-outlined text-[#021A70]" style={{ fontSize: "60px" }}>smart_toy</span>
              <p className="text-xl text-[#021A70]">Captcha</p>
              <p className="text-sm text-[#021A70]">Configure captcha settings  preferences</p>
             </div>
             <div className="flex flex-col items-center justify-center w-75 h-43 text-center gap-1 bg-white border-2 rounded-lg border-blue-950">
              <span className="material-symbols-outlined text-[#021A70]" style={{ fontSize: "60px" }}>language_chinese_cangjie</span>
              <p className="text-xl text-[#021A70]">Localisation</p>
              <p className="text-sm text-[#021A70]">Configure localisation setting for the site</p>
             </div>
              <div className="flex flex-col items-center justify-center w-75 h-43 text-center gap-1 bg-white border-2 rounded-lg border-blue-950">
              <span className="material-symbols-outlined text-[#021A70]" style={{ fontSize: "60px" }}>receipt</span>
              <p className="text-xl text-[#021A70]">Invoice Printing</p>
              <p className="text-sm text-[#021A70]">Configure printing setting for the sale invoice</p>
             </div>

            </div>
        </div>
    )
}