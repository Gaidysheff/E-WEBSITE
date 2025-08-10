import { Progress } from "@/components/ui/progress";

const RatingProgressBar = ({ rating, numRating }) => {
  return (
    <div className="flex items-center gap-4 w-full">
      <small
        className="w-[140px] text-primaryDark font-medium truncate
        max-sm:text-[10px] max-sm:w-[100px]"
      >
        {rating}
      </small>

      <div className="flex-1">
        <Progress
          value={numRating * 2}
          className="h-2 bg-gray-200 rounded-md"
        />
      </div>

      <small className="w-[40px] text-primaryDark font-semibold text-right">
        {numRating}
      </small>
    </div>
  );
};

export default RatingProgressBar;
