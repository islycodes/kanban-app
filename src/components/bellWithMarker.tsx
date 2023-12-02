import BellIcon from "@/assets/bell";
import BellNotificationIcon from "@/assets/bell-notification";

interface BellWithMarkerProps {
  hasMarker: boolean;
  width: number;
  height: number;
}

export default function BellWithMarker({
  hasMarker,
  width,
  height,
}: BellWithMarkerProps) {
  return hasMarker ? (
    <BellNotificationIcon width={width} height={height} />
  ) : (
    <BellIcon width={width} height={height} />
  );
}
