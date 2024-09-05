"use client";

import Image from "next/image";
import { useState } from "react";

// const images = [
//   {
//     id: 1,
//     url: "https://images.unsplash.com/photo-1517620114540-4f6a4c43f8ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4NXx4alBSNGhsa0JHQXx8ZW58MHx8fHx8",
//   },
//   {
//     id: 2,
//     url: "https://images.unsplash.com/photo-1696935198489-5e4f3b5c7667?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D",
//   },
//   {
//     id: 3,
//     url: "https://images.unsplash.com/photo-1713972327618-381d95481ca2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc3fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D",
//   },
//   {
//     id: 4,
//     url: "https://images.unsplash.com/photo-1722239318457-0371721aa9f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg5fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D",
//   },
// ];
const ProductImages = ({items}:{items:any}) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item:any, i:number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
