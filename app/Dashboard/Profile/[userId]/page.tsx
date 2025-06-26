import { notFound } from "next/navigation";

type Props = {
  params: {
    userId: string;
  };
};

const mockUsers: { 
  [key: string]: { 
    name: string 
  } 
} = {
  user777: { name: "John Doe" },
  user666: { name: "Jane Smith" },
};

export default function UserProfilePage({ params }: Props) {
  const user = mockUsers[params.userId];

  if (!user) {
    notFound();
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Profile of {user.name}</h1>
      <p className="text-gray-700">
        This is the profile page for user: <span className="font-mono">{params.userId}</span>.
      </p>
    </div>
  );
}
