import { notFound } from "next/navigation";
import { UserCircleIcon } from '@heroicons/react/24/solid';

type Props = {
  params: {
    userId: string;
  };
};

const mockUsers: {
  [key: string]: {
    name: string;
  };
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
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-md text-center">
      <UserCircleIcon className="h-20 w-20 text-blue-500 mx-auto mb-4" />
      <h1 className="text-3xl font-bold text-blue-700 mb-2">Hello, {user.name}</h1>
      <p className="text-gray-600 mb-4">
        This is the profile page for user ID: <span className="font-mono">{params.userId}</span>
      </p>
      <p className="text-sm text-gray-400">Welcome to your dashboard profile section.</p>
    </div>
  );
}
