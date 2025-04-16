import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-white dark:bg-neutral-900 shadow-sm border-b border-gray-100 dark:border-neutral-800">
      <div className="text-xl font-bold tracking-tight text-blue-700 dark:text-blue-300">
        <Link href="/">THE HOPE INTERNATIONAL SCHOOL</Link>
      </div>
      <ul className="flex gap-6 text-base font-medium text-gray-700 dark:text-gray-200"></ul>
    </nav>
  );
}
