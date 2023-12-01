export default function KanbanIcon(props: { width: number; height: number }) {
  return (
    <>
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.5 4.5C4.29086 4.5 2.5 5.29086 2.5 7.5V15.5C2.5 17.7091 4 19 6 19.5H18C20 19 21 18 21.5 16V8C21.5 5.79086 20.2091 4.5 18 4.5H6.5ZM14 6H10V18H14V6ZM16 6V18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6H16ZM6 18H8V6H6C4.89543 6 4 6.89543 4 8V16C4 17.1046 4.89543 18 6 18Z"
          fill="#A9A9A9"
        />
      </svg>
    </>
  );
}
