import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="飞行棋"
        />
        <title>飞行棋</title>
        {/* <script src="/stat.js"></script> */}
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
