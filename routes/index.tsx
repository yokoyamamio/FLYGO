import { Dock } from "../components/Dock.tsx";

export default function Home() {
  return (
    <>
      <div class="p-2 w-full grids leading-8 min-h-screen text-shadow bg-[#f9e4f0] text-lg text-red-100">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img src="/logo.png" class="w-16 h-16 mt-10 rounded-lg" />
          <h1 class="my-4 font-bold text-[#c5005a]">飞行棋大抽卡</h1>{" "}
          <h2 class="mb-4 text-[#c5005a]">好玩</h2>
          <div class="text-center mt-8">
            <div class="my-4 grid grid-cols-2 gap-4">
              <a
                href="/fxq/index.html"
                class="block px-8 py-2 border rounded-lg bg-pink-600">
                飞行棋
              </a>
              <a
                href="/card"
                class="block px-8 py-2 border rounded-lg bg-pink-600">
                任务卡牌
            	</a>
            </div>
            <div class="font-medium my-4 text-[#c5005a]">点击按钮开始游戏</div>
          </div>
          <div class="text-sm fixed bottom-40 left-0 right-0 text-center text-[#c5005a]">
          </div>
          <div class="text-sm fixed bottom-20 left-0 right-0 text-center text-[#c5005a]">
            支持android，ios，平板，电脑等设备访问
            <br />
            YOKO
          </div>
        </div>

        <Dock />
      </div>
    </>
  );
}
