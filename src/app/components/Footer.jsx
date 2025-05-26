export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} 787 Coffee. All rights reserved.</p>
      <p className="mt-1 text-gray-400">131 E 7th St, New York, NY · hello@787coffee.com</p>
    </footer>
  );
}
