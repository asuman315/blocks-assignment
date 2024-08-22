import React, { FC, useState, useRef, useEffect } from "react";
import { BlockCardComponentProps } from "../components.types";
import Image from "next/image";
import CustomIconComponent from "./CustomIcon.component";
import CustomButton from "./CustomButton";

const BlockCardComponent: FC<BlockCardComponentProps> = ({
  imageSrc,
  title,
  description,
  link,
}) => {
  const icons = ["heartIcon", "shareIcon", "dotsHorizontalIcon"];
  const [comment, setComment] = useState("");
  const [enteredComment, setEnteredComment] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleSetComment = () => {
    setComment(enteredComment);
    setEnteredComment("");
  };

  const adjustHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [enteredComment]);

  return (
    <section className="bg-white flex flex-col xl:grid grid-cols-2 xl:rounded-[30px] xl:shadow-custom-one w-screen overflow-hidden md:w-[1200px] max-w-lg mx-auto xl:max-w-5xl mb-12 @container">
      <section className="relative ">
        <img
          src={imageSrc}
          alt={title}
          className="h-auto object-cover rounded-none w-full  md:rounded-[30px] xl:rounded-r-none"
        />
        <div className="absolute left-0 right-0 top-0  hover:opacity-100 opacity-0 h-full">
          <div className="absolute top-24 left-4 bottom-4 flex items-center justify-center  transition-opacity duration-300">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 flex gap-2 items-center hover:bg-gray-200 rounded-full py-3 px-4 text-base font-semibold text-gray-800"
            >
              <CustomIconComponent
                svg="arrowUpRightIcon"
                classes="text-gray-800"
                iconSize="w-5"
              />
              <span className="mt-[-3px]">dribble.com</span>
            </a>
          </div>
        </div>
      </section>
      <section className=" @xl:px-7 pb-6 pt-5 @xl:pt-10">
        <div className="hidden @xl:flex items-center justify-between fixed-section">
          <div className="flex gap-1 lg:gap-5">
            {icons.map((icon, index) => (
              <button className="hover:bg-gray-100 w-9 h-9 rounded-full flex items-center justify-center">
                <CustomIconComponent
                  key={index}
                  svg={icon}
                  classes=""
                  iconSize="w-5"
                />
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <div className="flex items-center cursor-pointer">
              <p className="text-base font-semibold mr-[-7px]">Profile</p>
              <CustomIconComponent
                svg="arrowDropDownIcon"
                classes=""
                iconSize="w-10"
              />
            </div>
            <CustomButton
              label="Save"
              textColor="text-white"
              bgColor="bg-red-400"
              hoverBgColor="bg-red-600"
              rounded="rounded-full"
              paddingX="px-4"
              paddingY="py-1"
              textSize="text-sm"
              onClick={() => {}}
            />
          </div>
        </div>
        <p className="underline hidden @xl:block mt-8 mb-3 text-base font-normal cursor-pointer">
          dribble.com
        </p>
        <div className="px-6 md:px-0">
          <h3 className="text-[20px] @lg:text-[28px] font-semibold ">
            {title}
          </h3>
          <p className="text-gray-600 mt-3 text-base font-normal ">
            {description}
          </p>
        </div>
        <div className="@xl:hidden mt-4 px-6 flex justify-between">
          <CustomIconComponent
            svg="commentIcon"
            classes="cursor-pointer"
            iconSize="w-6"
          />
          <div className="flex gap-3 items-center">
            <CustomButton
              label="Read it"
              textColor="text-gray-900"
              bgColor="bg-gray-400"
              hoverBgColor="bg-gray-500"
              rounded="rounded-full"
              paddingX="px-4"
              paddingY="py-3"
              textSize="text-base"
              fontWeight="font-semibold"
              onClick={() => {}}
            />
            <CustomButton
              label="Save"
              textColor="text-white"
              bgColor="bg-red-400"
              hoverBgColor="bg-red-600"
              rounded="rounded-full"
              paddingX="px-4"
              paddingY="py-3"
              textSize="text-base"
              fontWeight="font-semibold"
              onClick={() => {}}
            />
          </div>
          <CustomIconComponent svg="shareTwoIcon" iconSize="w-6" />
        </div>
        <div className="mt-8 flex items-center justify-between px-6 md:px-0">
          <div className="flex  items-center gap-2">
            <button className="flex items-center justify-center w-12 h-12 text-pink-800 bg-pink-300 rounded-full text-sm font-semibold">
              <CustomIconComponent svg="basketBallIcon" iconSize="w-9 h-9" />
            </button>
            <div>
              <p className="font-semibold text-sm">Dribble</p>
              <p className="text-sm font-normal">1.6M followers</p>
            </div>
          </div>
          <div>
            <CustomButton
              label="Follow"
              textColor="text-black"
              bgColor="bg-transparent"
              hoverBgColor="bg-gray-100"
              rounded="rounded-full"
              paddingX="px-4"
              paddingY="py-3"
              textSize="text-base"
              fontWeight="font-semibold"
              onClick={() => {}}
              border="border border-gray-300"
            />
          </div>
        </div>
        <div className="mt-16 hidden @xl:block">
          <p className="font-semibold text-base">No comments yet</p>
          <p className="font-normal text-base py-4">
            {comment
              ? comment
              : "No comments yet! Add one to start the conversation."}
          </p>
        </div>
        <div className=" gap-2 mt-8 hidden @xl:flex">
          <div className="flex items-center justify-center w-12 h-12 leading-none bg-gray-200 text-black font-semibold rounded-full">
            A
          </div>
          {/* Comment Input */}
          <div className="flex-grow relative">
            <textarea
              ref={textAreaRef}
              placeholder="Add a comment"
              value={enteredComment}
              onChange={(e) => setEnteredComment(e.target.value)}
              onInput={adjustHeight}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              rows={1}
              className={`w-full rounded-3xl border border-gray-300 px-4 py-3 resize-none overflow-hidden font-normal focus:outline-none focus:ring-0 ${
                isFocused
                  ? "placeholder-gray-400"
                  : "cursor-pointer placeholder-gray-500"
              }`}
            />
            <div
              className={`absolute bottom-4 right-0 flex items-center pr-4 space-x-2`}
            >
              <CustomIconComponent
                svg="smilingFaceIcon"
                iconSize="w-5"
                classes="cursor-pointer"
              />
              {enteredComment !== "" && (
                <button
                  className="flex items-center bg-red justify-center w-6 h-6 text-white bg-red-400 rounded-full"
                  onClick={handleSetComment}
                >
                  ➤
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BlockCardComponent;
