import AdminClient from "./AdminClient";

export { metadata, viewport } from "next-sanity/studio";

// Studio's own client-side router handles every path under /admin after
// this shell loads, so the route can be pinned static.
export const dynamic = "force-static";

export default function AdminPage() {
  return <AdminClient />;
}
