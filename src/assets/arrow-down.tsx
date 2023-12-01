export default function ArrowDownIcon(props: {
  width: number;
  height: number;
}) {
  return (
    <>
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L7 7L13 1"
          stroke="#FAB600"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
}
