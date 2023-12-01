import TeamHubLogo from "../assets/teamhub-logo";

export default function SideBar() {
  return (
    <div className="max-w-xs flex">
      <div className="w-full justify-start bg-slate-600">
        <TeamHubLogo width={50} height={50} />
      </div>
    </div>
  );
}
