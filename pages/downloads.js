export default function DownloadsPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Your Downloads</h1>
      <ul className="list-disc ml-6">
        <li><a href="https://yourcdn.com/ebook.pdf" className="text-blue-600 underline">Productivity Guide PDF</a></li>
        <li><a href="https://yourcdn.com/photo-pack.zip" className="text-blue-600 underline">Photo Pack - Nature</a></li>
        <li><a href="https://yourcdn.com/react-template.zip" className="text-blue-600 underline">React Starter Template</a></li>
      </ul>
    </div>
  );
}