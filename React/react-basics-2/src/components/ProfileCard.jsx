export default function ProfileCard({ name, bio, imgUrl }) {
    return (
        <div className="bg-gray-900 border border-gray-700 p-6 rounded-xl text-white max-w-sm">
            <img src={imgUrl} alt={name} className="w-full" />
            <h2 className="text-xl font-bold mt-2">{name}</h2>
            <p>{bio}</p>
        </div>
    );
}
