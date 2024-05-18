import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReviewCardProps } from "@types";
import Image from "next/image";
import React from "react";

function ReviewCard({ pic, user }: ReviewCardProps) {
  return (
    <article className="flex flex-col gap-8 pb-8 border-b border-white w-full">
      <div>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div>
        <span className="flex items-center gap-4">
          <div className="relative w-16 h-16">
            <Image
              src={pic}
              alt={user}
              fill
              className="object-contain rounded-full"
            />
          </div>
          <p>{user}</p>
        </span>
      </div>
    </article>
  );
}

export default ReviewCard;
