import { MdOutlineStar } from "react-icons/md";
function Rating({ rate }) {
  return (
    <ul className="flex gap-[2px]">
      {Array.from({ length: 5 }, (_, i) =>
        i < rate ? (
          <li key={i} className="text-lg">
            <MdOutlineStar className="text-yellow-400" />
          </li>
        ) : (
          <li key={i} className="text-lg">
            <MdOutlineStar className="text-stone-300" />
          </li>
        )
      )}
    </ul>
  );
}

export default Rating;
