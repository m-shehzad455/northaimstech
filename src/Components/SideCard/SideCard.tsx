import { Box, Card, Skeleton } from "@mantine/core";
import { useEffect, useState } from "react";

interface User {
  company: string;
  login: string;
  avatar_url: string;
}

function SideCard() {
  const [users, setUser] = useState<[User]>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.github.com/users/imran-baitham")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
        console.log(data, "data");
      });
  }, []);

  if (isLoading)
    return (
      <>
        <Skeleton height={50} circle mb="xl" className="bg-gray-800" />
        <Skeleton height={8} radius="xl" />
        <Skeleton height={8} mt={6} radius="xl" />
        <Skeleton height={8} mt={6} width="70%" radius="xl" />
      </>
    );
  if (!users) return <p>No profile data</p>;

  return (
    <>
      <div>
        <span className="inline-block relative">
          <img
            className="h-16 w-16 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <span className="absolute top-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400" />
        </span>
      </div>
      <div className="text-white">Profile</div>
    </>
  );
}

export default SideCard;
