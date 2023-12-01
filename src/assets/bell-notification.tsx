export default function BellNotificationIcon(props: {
  width: number;
  height: number;
}) {
  return (
    <>
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5 10.5C22.5 8.37826 21.7099 6.34344 20.3032 4.84315C18.8967 3.34285 16.9891 2.5 15 2.5C13.0109 2.5 11.1032 3.34285 9.6967 4.84315C8.29018 6.34344 7.5 8.37826 7.5 10.5C7.5 19.8334 3.75 22.5 3.75 22.5H26.25C26.25 22.5 22.5 19.8334 22.5 10.5Z"
          stroke="#A9A9A9"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.1625 26.25C16.9428 26.6289 16.6274 26.9434 16.2478 27.1619C15.8683 27.3805 15.438 27.4956 15 27.4956C14.562 27.4956 14.1318 27.3805 13.7523 27.1619C13.3728 26.9434 13.0573 26.6289 12.8375 26.25"
          stroke="#A9A9A9"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
}
