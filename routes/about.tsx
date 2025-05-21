import { Dock } from "../components/Dock.tsx";
import ACtiveInput from "../islands/active.tsx";
export default function About() {
  return (
    <div class="p-3 w-full grids leading-8 min-h-screen text-shadow bg-[#f9e4f0] text-lg text-red-100">
      <div class="mx-auto flex max-w-screen-md flex-col items-center justify-center">
        <div class="flex w-full gap-3 justify-start items-center p-2">
          <a class="" href="/">
            <img src="/logo.png" class="h-12 w-12 rounded-lg" />
          </a>
          <h1 class="font-bold text-[#c5005a]">小游戏</h1>
        </div>

        <div class="mb-6 mt-3 text-[#c5005a] bg-white border border-base-300 p-4 rounded-lg shadow-lg">
          <h2 class="font-bold mb-4"></h2>{" "}
          <ul class="mb-5 list-none list-inside text-left text-sm">
          </ul>
          {/* <br class="my-3 bg-[#c4bcc029]" /> */}
          <ACtiveInput value="" />
        </div>

        {/* {isVip ? (
          
        ) : (
          <div class="max-w-screen-md text-[#c5005a] mx-auto p-4">
            <div className="bg-white p-4 rounded-md shadow-md">
              <h2 class="text-xl font-bold mb-4 text-gray-800">
                
              </h2>
              <ul class="list-disc list-inside text-left">
                <li className="mb-2">
                   <span className="font-semibold"></span>
                </li>
                <li className="mb-2">
                  {" "}
                  <span className="font-semibold">
                   
                  </span>
                </li>
                <li className="mb-2">
                  {" "}
                  <span className="font-semibold"></span>
                </li>
              </ul>
              <p class="mt-4 font-bold text-blue-500">
                
              </p>
            </div>

            <div class="text-sm mt-6">
            </div>
          </div>
        )} */}
      </div>

      <Dock />
    </div>
  );
}
