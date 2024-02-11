import ProfileHeader from "@/components/header/ProfileHeader";
import Repositories from "@/components/repo/Repositories";

const page = async ({ params }) => {
  // Fetch User
  const res = await fetch(`https://api.github.com/users/${params.id}`);
  const data = await res.json();

  // Fetch Userwise Repo
  const resRepo = await fetch(
    `https://api.github.com/users/${params.id}/repos?page=1&per_page=100`
  );
  const repos = await resRepo.json();
  return (
    <>
      <ProfileHeader data={data} />
      <Repositories repos={repos} data={data} />
    </>
  );
};

export default page;
