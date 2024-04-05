import { getAllActivities } from "@/lib/activities";
import Link from "next/link";
import NewActivityButton from "./components/NewActivityButton";
import RemoveButton from "./components/RemoveButton";

async function ActivityPage() {
  const activities = await getAllActivities();
  return (
    <div className="relative flex flex-col gap-4">
      <div className="sticky top-0 z-10 flex flex-row justify-between border-b pb-4 bg-black-primary">
        <h1 className="text-4xl">Recent Activity</h1>
        <NewActivityButton />
      </div>
      <div className="flex flex-col">
        {activities.data &&
          activities.data.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-row items-center justify-between py-2 mx-4 border-b border-white-primary"
              >
                <div className="flex flex-col">
                  <div className="flex flex-row items-end justify-between">
                    <p className="text-sm">{item.date}</p>
                  </div>
                  <h3 className="text-lg">{item.title}</h3>
                  {item.linkTo && (
                    <h3 className="text-sm">
                      Link:
                      <Link href={item.linkTo} target="_blank">
                        {item.linkTo}
                      </Link>
                    </h3>
                  )}
                </div>
                <RemoveButton id={item.id} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ActivityPage;
