import { getSetting } from "./queries/getSetting";

export async function Footer() {
  const setting = await getSetting();

  return (
    <footer className="mt-2 py-2 border-t border-sky-400">
      Copyright &copy; siteName {setting.siteName}
    </footer>
  );
}
