import GearContainer from "@/app/_components/account/GearContainer";
import { H2 } from "@/app/_components/Headings";
import { auth } from "@/app/_lib/auth";
import { getUser } from "@/app/_lib/data-service";

export const metadata = {
  title: "Gear",
};

async function page() {
  const session = await auth();
  const user = await getUser(session.user.email);
  return (
    <div>
      <H2>My gear</H2>
      <div className="flex flex-col">
        {user?.coffeeMakers?.map((maker) => (
          <GearContainer key={maker.mark + maker.model + "container"} gear={maker} />
        ))}
      </div>
    </div>
  );
}

export default page;
