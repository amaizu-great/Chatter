"use client";
import { useState } from "react";

const Post = () => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [publish, setPublish] = useState(false);

  return (
    <section className="flex flex-col gap-5 py-5 px-20 w-[97%] border border-b-0 h-full border-[#D0D0D0] max-md:border-0 max-md:w-full max-sm:p-0">
      <button
        disabled={!publish}
        className={`flex py-3 px-8 self-end w-fit text-[12px] rounded-[4px] text-white ${
          publish ? "bg-[#543EE0]" : "bg-[#543EE080]"
        } ${publish && "active:bg-[#4131af]"}  max-sm:px-2`}
      >
        Publish
      </button>
    </section>
  );
};

export default Post;
