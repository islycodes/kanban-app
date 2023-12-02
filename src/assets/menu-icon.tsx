export default function MenuIcon(props: { width: number; height: number }) {
  return (
    <>
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 13 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="3"
          width="3"
          height="3.25"
          rx="0.1"
          transform="rotate(-90 0 3)"
          fill="#A9A9A9"
        />
        <rect
          x="4.875"
          y="3"
          width="3"
          height="3.25"
          rx="0.1"
          transform="rotate(-90 4.875 3)"
          fill="#A9A9A9"
        />
        <rect
          x="9.75"
          y="3"
          width="3"
          height="3.25"
          rx="0.1"
          transform="rotate(-90 9.75 3)"
          fill="#A9A9A9"
        />
      </svg>
    </>
  );
}
