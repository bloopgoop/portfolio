const items = [
  "intro",
  "about",
  "projects",
  "contact",
];

const SidenavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={`#${href}`}
      className="p-3 rounded-full hover:bg-green-100 text-center"
    >
      {children}
    </a>
  );
}

const captitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function Sidenav() {
  return (
    <div className="sticky top-0 z-99 h-0 hidden flex-col gap-4 text-left pt-6 pl-6 w-min 2xl:flex">
      {items.map((item, i) => (
        <SidenavItem key={i} href={item}> {captitalize(item)} </SidenavItem>
      ))}
    </div>
    )
}