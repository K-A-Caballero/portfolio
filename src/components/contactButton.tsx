import Link from "next/link";

const ContactButton = () => {
  return (
    <Link
      href="#contact"
      className="text-xl border-solid border-4 border-[var(--textPrimary)] rounded-lg px-8 py-2 transition duration-300 hover:bg-[var(--backgroundSecondary)] text-[var(--textPrimary)] hover:text-[var(--textSecondary)]"
    >
      Contact
    </Link>
  );
}

export default ContactButton;