import Head from "next/head";
import { ViewPort, Layer, LeftResizable, Fill } from "react-spaces";

export default function Home() {
  return (
    <div>
      <Head>
        <title>react-spaces SSR bug</title>
      </Head>

      <ViewPort>
        <Layer zIndex={0}>
          <LeftResizable size="20%" />
        </Layer>
        <Layer zIndex={1}>
          <Fill />
        </Layer>
      </ViewPort>
    </div>
  );
}
