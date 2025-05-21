import { Head } from "$fresh/runtime.ts";

export default function Member() {
  return (
    <>
      <Head>
        <script src="/js/jquery.min.js"></script>
        <title>空间</title>
      </Head>
      <div class="w-full leading-8 p-2 min-h-screen text-shadow bg-pink-400 text-lg text-red-100">
        <div class="max-w-screen-md mx-auto p-4">
          <div></div>
        </div>
      </div>
    </>
  );
}
