export default function ViewModal({ user, closeModal }) {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-green-200 p-6 rounded-xl w-96">
        <h2 className="text-2xl text-yellow-200 text-center rounded-2xl bg-black font-bold mb-4">
          User Details
        </h2>

        <p className="mb-2">
          <strong>Name:</strong> {user.name}
        </p>

        <p className="mb-2">
          <strong>Email:</strong> {user.email}
        </p>

        <p className="mb-2">
          <strong>Mobile:</strong> {user.mobile}
        </p>

        <p className="mb-2">
          <strong>Age:</strong> {user.age}
        </p>

        <p className="mb-2">
          <strong>Role:</strong> {user.role}
        </p>

        <p className="mb-2">
          <strong>Status:</strong> {user.status}
        </p>

        <p className="mb-4">
          <strong>Joining Date:</strong>  {new Date(user.joiningDate).toLocaleDateString("en-GB")}
        </p>

        <button
          onClick={closeModal}
          className="bg-red-500 cursor-pointer active:scale-95 duration-300 hover:scale-110 text-white px-4 py-2 rounded-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
}