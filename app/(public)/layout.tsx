import { Navbar } from "../components/navbar/Navbar";

export default function PagesLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar/>
    <div>
      <h1>Hello Root Layout </h1>{
         children
      }
    </div>
    </>
  );
}