import { IconProps } from "../types";

function ArrowUpRightIcon({
  className,
  size = 24,
  color = "currentColor",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
      className={className}
      width={size}
      height={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 18.5 17-16m0 0H6.25m15.25 0v14.25"
      />
    </svg>
  );
}

export default ArrowUpRightIcon;
