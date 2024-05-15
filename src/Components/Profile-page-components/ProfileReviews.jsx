import AddReview from "./AddReview";
import OneReview from "./OneReview";

const ProfileReviews = () => {
  return (
    <div className="mt-20 md:w-[60%]">
      <h2 className="font-bold sub-font-3 text-xl mb-10">Reviews</h2>
      <div className="flex flex-col items-start gap-3">
        <OneReview />
        <OneReview />
        <OneReview />
      </div>
      <AddReview />
    </div>
  );
};

export default ProfileReviews;
