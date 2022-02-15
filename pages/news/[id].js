import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function News() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Head>
        <title>News {id}</title>
      </Head>
      News {id}
    </div>
  );
}

export default News;
