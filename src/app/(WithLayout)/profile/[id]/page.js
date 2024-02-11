import ProfileHeader from "@/components/header/ProfileHeader";

const page = async ({ params }) => {
  const res = await fetch(`https://api.github.com/users/${params.id}`);
  const data = await res.json();

  return (
    <>
      <ProfileHeader data={data} />
    </>
  );
};

export default page;
